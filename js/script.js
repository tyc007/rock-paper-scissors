const choices = ['Rock', 'Paper', 'Scissors'];

// Will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay(){
    let computerSelection = choices[getRandomInt(choices.length)];
    console.log(`Computer chooses ${computerSelection}!`);
    return computerSelection;
}

// Returns a random number between 0 and max number provided
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

// Returns the winner between player and computer selection in Rock Paper Scissors game
function playRound(playerSelection , computerSelection){
    playerSelection = String(playerSelection).toLowerCase();
    computerSelection = String(computerSelection).toLowerCase();

    if ( playerSelection === computerSelection) {
        return "You guys tied!"
    }
    else {
        if (playerSelection === 'rock'      && computerSelection === 'paper')       return "You Lose! Paper beats Rock";
        if (playerSelection === 'rock'      && computerSelection === 'scissors')    return "You Win! Rock beats Scissors";
        if (playerSelection === 'paper'     && computerSelection === 'scissors')    return "You Lose! Scissors beats Paper";
        if (playerSelection === 'paper'     && computerSelection === 'rock')        return "You Win! Paper beats Rock";
        if (playerSelection === 'scissors'  && computerSelection === 'rock')        return "You Lose! Rock beats Scissors";
        if (playerSelection === 'scissors'  && computerSelection === 'paper')       return "You Win! Scissors beats Paper";
    }
}

function game(){
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Let's play Rock, Paper Scissors! Put in your choice!");
        alert(playRound(playerSelection, computerPlay() ) );
    }
}

game();