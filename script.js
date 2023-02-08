const choices = ['rock', 'paper', 'scissors'];
const emojiMap = {"rock": "✊", "paper": "✋", "scissors": "✌️"};

const textLine = document.getElementsByClassName('textLine');
const playerScoreBoard = document.getElementById('playerScore');
const computerScoreBoard = document.getElementById('computerScore');
const buttons = document.querySelectorAll('button');
const choicesDisplay = document.getElementById('choices');
const body = document.querySelector('body');
const bodyColor = getComputedStyle(body).backgroundColor;


let playerSelection = '';
let computerSelection = '';
let playerScore = 0;
let computerScore = 0;

// Will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay(){
    let computerSelection = choices[getRandomInt(choices.length)];
    textLine[0].innerHTML = `Computer chooses ${emojiMap[computerSelection]}`;
    return computerSelection;
}

// Returns a random number between 0 and max number provided
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getPlayerChoice(e){
    playerSelection = e.target.id;
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}



// Returns the winner between player and computer selection in Rock Paper Scissors game
function playRound(playerSelection , computerSelection){
    if ((playerSelection == 'rock'      && computerSelection == 'scissors')   ||
        (playerSelection == 'paper'     && computerSelection == 'rock')       ||
        (playerSelection == 'scissors'  && computerSelection == 'paper')) {
        textLine[1].innerHTML  = `<b>You Won!</b>`;
        textLine[2].innerHTML  = `Your ${emojiMap[playerSelection]} beats their ${emojiMap[computerSelection]}.`;
        playerScore += 1;
        playerScoreBoard.textContent = `${playerScore}`
    }
    else if(playerSelection == computerSelection){
        textLine[1].innerHTML = `<b>You Tied!</b>`;
        textLine[2].innerHTML = '';  
    }
    else{
        textLine[1].innerHTML  = `<b>You Lost!</b>`;
        textLine[2].innerHTML  = `Their ${emojiMap[computerSelection]} beats your ${emojiMap[playerSelection]}.`;
        computerScore += 1;
        computerScoreBoard.textContent = `${computerScore}`
    }

    checkForWinner()

}

function buttonListeners(){
    buttons.forEach((button) => {
        button.addEventListener('click', getPlayerChoice)
      });
}

function checkForWinner(){
    let flash = true;
    if (playerScore == 5) {
        textLine[0].innerHTML  = `<b>You Win! 😊</b>`;
        textLine[1].innerHTML  = '';
        textLine[2].innerHTML  = `Play Again?`;

        setInterval(() => {
            document.body.style.backgroundColor = flash ? bodyColor : 'green';
            flash = !flash;
          }, 400);
    }
    if (computerScore == 5) {
        textLine[0].innerHTML  = `<b>Computer Wins! 😭 </b>`;
        textLine[1].innerHTML  = '';
        textLine[2].innerHTML  = `Play Again?`;                        
        setInterval(() => {
            document.body.style.backgroundColor = flash ? bodyColor : 'red';
            flash = !flash;
          }, 400);
    }
    if ((playerScore == 5) || (computerScore == 5)) {
        buttons.forEach(button => {
            button.parentNode.removeChild(button);
          });
        addResetOption();
    }
}

function addResetOption(){
    const resetButton = document.createElement("button");
    resetButton.innerText = "↻";
    resetButton.style.cursor = "pointer";
    resetButton.addEventListener('click',() => location.reload());
    
    choicesDisplay.appendChild(resetButton);
}

buttonListeners();
