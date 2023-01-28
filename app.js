const computerChoice = document.getElementById('computer-choice');
const userChoice = document.getElementById('user-choice');
const result = document.getElementById('result');
let chosen;

const choices = document.querySelectorAll('.button');
choices.forEach(choice => choice.addEventListener('click',  (e) => {
    chosen = e.target.id;
    userChoice.innerHTML = chosen;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * choices.length);
    computerChoice.innerHTML = choices[randomNumber].id;
}

function getResult() {
    if (computerChoice.innerHTML === userChoice.innerHTML) {
        result.innerHTML = `It's a draw!`;
    }

    if (computerChoice.innerHTML === 'rock' && userChoice.innerHTML === 'paper') {
        result.innerHTML = `Computer wins`;
    }

    if (computerChoice.innerHTML === 'rock' && userChoice.innerHTML === 'scissors') {
        result.innerHTML = `Computer wins`;
    }

    if (computerChoice.innerHTML === 'paper' && userChoice.innerHTML === 'scissors') {
        result.innerHTML = `You win`;
    }

    if (computerChoice.innerHTML === 'paper' && userChoice.innerHTML === 'rock') {
        result.innerHTML = `You win`;
    }

    if (computerChoice.innerHTML === 'scissors' && userChoice.innerHTML === 'rock') {
        result.innerHTML = `You win`;
    }

    if (computerChoice.innerHTML === 'scissors' && userChoice.innerHTML === 'paper') {
        result.innerHTML = `Computer wins`;
    }
}