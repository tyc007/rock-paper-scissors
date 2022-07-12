// Will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay(){
    const items = ['Rock', 'Paper', 'Scissors'];
    console.log(items[getRandomInt(items.length)]);
    return;
}

// Returns a random number between 0 and max number provided
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

computerPlay();