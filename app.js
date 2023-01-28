const computerChoice = document.getElementById('computer-choice');
const userChoice = document.getElementById('user-choice');
const result = document.getElementById('result');
let chosen;

const choices = document.querySelectorAll('.button');
choices.forEach(choice => choice.addEventListener('click',  (e) => {
    chosen = e.target.id;
    userChoice.innerHTML = chosen;
    generateComputerChoice();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * choices.length);
    computerChoice.innerHTML = choices[randomNumber].id;
}