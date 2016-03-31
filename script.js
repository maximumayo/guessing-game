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