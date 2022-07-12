// Will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay(){
    const items = ['Rock', 'Paper', 'Scissors'];
    let computerSelection = items[getRandomInt(items.length)];
    console.log(computerSelection);
    return computerSelection;
}

// Returns a random number between 0 and max number provided
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

// Returns the winner between player and computer selection in Rock Paper Scissors game
function playRound(playerSelection , computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if ( playerSelection === computerSelection) {
        return "You guys tied!"
    }
    else {
        if (playerSelection === 'rock' && computerSelection === 'paper') return "You Lose! Paper beats Rock";
        if (playerSelection === 'rock' && computerSelection === 'scissors') return "You Win! Rock beats Scissors";
        if (playerSelection === 'paper' && computerSelection === 'scissors') return "You Lose! Scissors beats Paper";
        if (playerSelection === 'paper' && computerSelection === 'rock') return "You Win! Paper beats Rock";
        if (playerSelection === 'scissors' && computerSelection === 'rock') return "You Lose! Rock beats Scissors";
        if (playerSelection === 'scissors' && computerSelection === 'paper') return "You Win! Scissors beats Paper";
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));