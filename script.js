
function computerPlay() {
    
    let randNo = Math.floor(Math.random()*3);
    
    if (randNo === 0) {
        return 'Rock'; 
    }
    else if (randNo === 1)
    {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }

}

function playRound(playerSelection, compSelection) {
    let result;

    if ( (playerSelection.toUpperCase() === "ROCK") && compSelection === "Scissors"
        ||  (playerSelection.toUpperCase() === "PAPER") && compSelection === "Rock"  
        ||  (playerSelection.toUpperCase() === "SCISSORS") && compSelection === "Paper" ) 
    {

        result =   `You Won! ${playerSelection} beats ${compSelection}!`;
    }
    else if ( (playerSelection.toUpperCase() === "ROCK") && compSelection === "Paper"
        ||  (playerSelection.toUpperCase() === "PAPER") && compSelection === "Scissors"  
        ||  (playerSelection.toUpperCase() === "SCISSORS") && compSelection === "Rock" ) 
    {
        result =   `You Lost! ${compSelection} beats ${playerSelection}!`;
    }
    else
    {
        result = `It is a tie! you both went ${compSelection}!`;
    }
    return result;
}


const computerSelection = computerPlay();
console.log(computerSelection);
const playerSelection = "pApEr";
console.log(playRound(playerSelection, computerSelection));


