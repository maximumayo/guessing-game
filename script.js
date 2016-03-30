$(document).ready(function () {
    $('#submit').click(function () {
        game.makeGuess();
        $('#guessInput').val("");
    });
});

guessingGame = function (min, max) {
    this.init(min, max);
};

guessingGame.prototype = {
    minNumber: 1,
    maxNumber: 100,
    secretNumber: null,
    lastMessage: null,

    init: function (min, max) {
        this.minNumber = min || this.minNumber;
        this.maxNumber = max || this.maxNumber;
        this.generateNumber();
    },

    generateNumber: function () {
        this.secretNumber = Math.floor(this.minNumber + (Math.random() * this.maxNumber));
    },

    checkGuess: function (guess) {

        if (guess < this.secretNumber) {
            $('#responseDiv').text(guess + ' is too low. try again');
            $('#gameArea').css('background-color', 'blue');
            return false;
        }
        else if (guess > this.secretNumber) {
            $('#responseDiv').text(guess + ' is too high. try again');
            $('#gameArea').css('background-color', 'yellow');
            return false;
        }
        else {
            $('#responseDiv').text('You Guessed It! Nice Work!');
            $('#gameArea').css('background-color', 'green');
            return true;
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