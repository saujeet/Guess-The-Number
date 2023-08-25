// Get a random number between 1 to 20
let correctNumber = Math.floor(Math.random() * 20) + 1;

// Initiallize score and high score
let score = 20;
let highscore = 0;

// Getting all querry sclectors
const messageDisplay = document.querySelector('.message');
const highscoreDisplay = document.querySelector('.highscore');
const scoreDisplay = document.querySelector('.score');
const numberDisplay = document.querySelector('.number');
const guessNumber = document.querySelector('.guess');
const againBtn = document.querySelector('.again');
const checkbtn = document.querySelector('.check');
const guessTextBoxEl = document.querySelector('#guessTextBox');

// Function to display message
function displayMessage(message) {
    messageDisplay.textContent = message;
}

// Reset the game
function resetGame() {
    correctNumber = Math.floor(Math.random() * 20) + 1;
    score = 20;
    displayMessage('Start guessing...');
    scoreDisplay.textContent = score;
    numberDisplay.textContent = '?';
    guessNumber.value = '';
    document.body.style.backgroundColor = '#222';
}

// Adding event listener for Check button
checkbtn.addEventListener('click', checkBtnHandler);

// Adding event listener for Text Box
guessTextBoxEl.addEventListener('keypress', keyPressHandler);

//Event handler for Text Box
function keyPressHandler(e) {
    if (e.key === 'Enter') {
        checkBtnHandler();
    }
}

//Event handler for Check button
function checkBtnHandler() {
    let guess = parseInt(guessNumber.value);

    // If there is a guess
    if (!guess) {
        displayMessage('Please enter a number');
    }

    if (guess > 20 || guess < 1) {
        displayMessage('Please enter a number between 1 to 20');
    }

    // If the guess is correct
    else if (guess === correctNumber) {
        displayMessage('Congratulations! Correct Number!');
        numberDisplay.textContent = correctNumber;
        document.body.style.backgroundColor = '#60b347';

        // Display high score
        if (score > highscore) {
            highscore = score;
            highscoreDisplay.textContent = highscore;
        }
    }

    // Check if the guess is more or less
    else {
        if (score > 1) {
            displayMessage(guess > correctNumber ? `The number is less than ${guess}!` : `The number is more than ${guess}!`);
            score--;
            scoreDisplay.textContent = score;
        }
        else {
            displayMessage('You Lost the Game :(');
            scoreDisplay.textContent = 0;
            document.body.style.backgroundColor = 'red';
        }
    }
};

// Event listener for Again button
againBtn.addEventListener('click', resetGame);

resetGame();