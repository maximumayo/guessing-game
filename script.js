$(document).ready(function () {
    $('#submit').click(function () {
        game.makeGuess();
        $('#guessInput').val("");
    });

    $('#guessInput').keypress(function (key) {
        if (key.which == 13) {
            game.makeGuess();
            $('#guessInput').val("");
        }
    });
});

guessingGame = function () {
    this.generateNumber();
};

guessingGame.prototype = {
    minNumber: 1,
    maxNumber: 100,
    secretNumber: null,

    generateNumber: function () {
        this.secretNumber = Math.floor(this.minNumber + (Math.random() * this.maxNumber));
        console.log('secret number is: ', this.secretNumber);
    },

    checkGuess: function (guess) {

        if (guess < this.secretNumber) {
            $('#responseDiv').text(guess + ' is too low. try again');
            $('#gameArea').removeClass('high').addClass('low');
            $('.square').addClass('blob').removeClass('square');

        }
        else if (guess > this.secretNumber) {
            $('#responseDiv').text(guess + ' is too high. try again');
            $('#gameArea').removeClass('low').addClass('high');
            $('.blob').addClass('square').removeClass('blob');
        }
        else {
            $('#responseDiv').text('You Guessed It! Nice Work!');
            //$('#gameArea').css('background-color', 'green');
        }
    },

    makeGuess: function () {
        var guessStr = $('#guessInput').val();
        if (guessStr && !isNaN(guessStr)) {
            var guessInt = parseInt(guessStr);
            guessResult = game.checkGuess(guessInt);
        }
    }
};

var game = new guessingGame();

function motion(ele) {
    var location = $('#main');
    var height = location.height() - $(ele).height();
    var width = location.width() - $(ele).width();
    var rand = Math.floor(Math.random() * height);
    var rand2 = Math.floor(Math.random() * width);
    $(ele).animate({
        "left": +rand + "px",
        "top": +rand2 + "px"
    }, 4000, function () {
        if (!ele) {
            return false;
        }
        else {
            motion(ele);
        }
    });
}

function makeDivs() {
    for (var i = 1; i < 101; i++) {
        $('#main').prepend('<div class="blob" id="b' + i + '"></div>')
    }
}

function moveDivs() {
    for (var i = 1; i < 101; i++) {
        motion('#b' + i);
    }
}

//call blobs in motion
$('document').ready(function () {
    makeDivs();
    moveDivs();
});