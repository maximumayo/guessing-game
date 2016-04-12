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
            $('#gameArea').css('background-color', 'blue');
        }
        else if (guess > this.secretNumber) {
            $('#responseDiv').text(guess + ' is too high. try again');
            $('#gameArea').css('background-color', 'yellow');
        }
        else {
            $('#responseDiv').text('You Guessed It! Nice Work!');
            $('#gameArea').css('background-color', 'green');
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

//call blobs in motion
$('document').ready(function () {
    motion('#b1');
    motion('#b2');
    motion('#b3');
    motion('#b4');
    motion('#b5');
    motion('#b6');
    motion('#b7');
    motion('#b8');
    motion('#b9');
    motion('#b10');
    motion('#b11');
    motion('#b12');
    motion('#b13');
    motion('#b14');
    motion('#b15');
    motion('#b16');
    motion('#b17');
    motion('#b18');
    motion('#b19');
    motion('#b20');
    motion('#b21');
    motion('#b22');
    motion('#b23');
    motion('#b24');
    motion('#b25');
    motion('#b26');
    motion('#b27');
    motion('#b28');
    motion('#b29');
    motion('#b30');
});