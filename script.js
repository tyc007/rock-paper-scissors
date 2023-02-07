const choices = ['rock', 'paper', 'scissors'];

const textLine = document.getElementById('textLine');
const playerScoreBoard = document.getElementById('playerScore');
const computerScoreBoard = document.getElementById('computerScore');
const buttons = document.querySelectorAll('button');

let playerSelection = '';
let computerSelection = '';
let playerScore = 0;
let computerScore = 0;

// Will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay(){
    let computerSelection = choices[getRandomInt(choices.length)];
    textLine.textContent = `Computer chooses ${computerSelection}!`;
    return computerSelection;
}

// Returns a random number between 0 and max number provided
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

// Returns the winner between player and computer selection in Rock Paper Scissors game
function playRound(playerSelection , computerSelection){
    console.log(playerSelection, computerSelection)
    if ((playerSelection == 'rock'      && computerSelection == 'scissors')   ||
        (playerSelection == 'paper'     && computerSelection == 'rock')       ||
        (playerSelection == 'scissors'  && computerSelection == 'paper')) {
        textLine.textContent = textLine.textContent + ` You Win! Your ${playerSelection} beats their ${computerSelection}.`;
        playerScore += 1;
        playerScoreBoard.textContent = `Player Score: ${playerScore}`
    }
    else if(playerSelection == computerSelection){
        textLine.textContent = textLine.textContent + ` You guys tied.`;
    }
    else{
        textLine.textContent = textLine.textContent + ` You Lose! Their ${computerSelection} beats your ${playerSelection}.`;
        computerScore += 1;
        computerScoreBoard.textContent = `Computer Score: ${computerScore}`
    }

    checkForWinner()

}

function buttonListeners(){
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.id;
            computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
        });
      });
}

function checkForWinner(){
    if (playerScore == 5) textLine.textContent = "Player Wins!"
    if (computerScore == 5) textLine.textContent = "Computer Wins!"
}

function game(){
    //let playerSelection = prompt
    textLine.textContent = "Let's play Rock, Paper Scissors! Put in your choice!";
    
}

buttonListeners();
game();
