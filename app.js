const greenButton = document.querySelector('#greenButton');
const blueButton = document.querySelector('#blueButton');
const resetButton = document.querySelector('#resetButton');
const greenDisplay = document.querySelector('#greenDisplay');
const blueDisplay = document.querySelector('#blueDisplay');
const h2Display = document.querySelector('h2');
const goal = document.querySelector('#goal');

let greenScore = 0;
let blueScore = 0;
let winScore = parseInt(goal.value);
let isGameOver = false;

goal.addEventListener('change', function () {
    winScore = parseInt(this.value);
    reset();
})

greenButton.addEventListener('click', function () {
    if (!isGameOver) {
        greenScore += 1;
        if (greenScore === winScore) {
            h2Display.classList.add('green');
            blueDisplay.classList.replace('blue', 'green');
            isGameOver = true;
        }
        greenDisplay.textContent = greenScore;
    }
})

blueButton.addEventListener('click', function () {
    if (!isGameOver) {
        blueScore += 1;
        if (blueScore === winScore) {
            h2Display.classList.add('blue');
            greenDisplay.classList.replace('green', 'blue');
            isGameOver = true;
        }
        blueDisplay.textContent = blueScore;
    }
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    greenScore = 0;
    blueScore = 0;
    greenDisplay.textContent = greenScore;
    blueDisplay.textContent = blueScore;
    h2Display.className = "";
    greenDisplay.className = "";
    blueDisplay.className = "";
}