$(document).ready(function () {
    //loop main game music
    backMusic.addEventListener('ended', function () {
        backMusic.currentTime = 0;
        backMusic.play();
    }, false);
    backMusic.play();
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
            down.play();

        }
        else if (guess > this.secretNumber) {
            $('#responseDiv').text(guess + ' is too high. try again');
            $('#gameArea').removeClass('low').addClass('high');
            $('.blob').addClass('square').removeClass('blob');
            up.play();

        }
        else {
            $('#responseDiv').text('You Guessed It! Nice Work!');
            $('#gameArea').removeClass('low high').addClass('win');
            $('.blob, .square').removeClass('blob square');
            backMusic.pause();
            backMusic.currentTime = 0;
            winMusic.currentTime = 0;
            //loop win music
            winMusic.addEventListener('ended', function () {
                winMusic.currentTime = 0;
                winMusic.play();
            }, false);
            winMusic.play();
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
    }, 3500, function () {
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

var backMusic = new Audio('sounds/backing.mp3');
var winMusic = new Audio('sounds/intro.mp3');
var up = new Audio('sounds/down.mp3');
var down = new Audio('sounds/up.mp3');

winMusic.volume = .4;
up.volume = .4;
down.volume = .4;

//call blobs in motion
$('document').ready(function () {
    makeDivs();
    moveDivs();
    $('#clear').click(function () {
        game = new guessingGame();
        $('#gameArea').removeClass('win low high');
        $('.blob, .square').removeClass('blob square');
        $('#guessInput').val("");
        $('#responseDiv').text('Give it a try!');
        makeDivs();
        moveDivs();
        winMusic.pause();
        backMusic.currentTime = 0;
        backMusic.play();
    });
});