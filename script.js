
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

// return value explanation
// 1 for user win
// 2 for computer win
// 0 for tie
function playRound(playerSelection, compSelection) {    
    let result;

    if ( (playerSelection.toUpperCase() === "ROCK") && compSelection === "Scissors"
        ||  (playerSelection.toUpperCase() === "PAPER") && compSelection === "Rock"  
        ||  (playerSelection.toUpperCase() === "SCISSORS") && compSelection === "Paper" ) 
    {

        result =  1;
    }
    else if ( (playerSelection.toUpperCase() === "ROCK") && compSelection === "Paper"
        ||  (playerSelection.toUpperCase() === "PAPER") && compSelection === "Scissors"  
        ||  (playerSelection.toUpperCase() === "SCISSORS") && compSelection === "Rock" ) 
    {
        result =  2;
    }
    else
    {
        result = 0;
    }
    return result;
}

function userPlay() { 
    let userChoice =  prompt("Enter your choice!"); 

    if (userChoice === null) {
        console.log("Game Cancelled!");
        return;
    }

    while (!validateUserChoice(userChoice)) 
    {
        alert("You did not enter a valid choice! Try Again..")
        let userChoice =  prompt("Enter your choice!"); 
    }
    return userChoice;
}

function validateUserChoice(choice) {

    let userChoiceCap = choice.toUpperCase();
    if (userChoiceCap === "ROCK"
        ||  userChoiceCap === "PAPER"
        ||  userChoiceCap === "SCISSORS" ) {

        return true;
    }
    return false;
}

function game() {
    let userScore  = 0, compScore = 0;

    for (let i = 0; i < 5; i++) 
    {
        const userSelection = userPlay();
        if (userSelection === undefined) {
            return;
        }

        const computerSelection = computerPlay();
        let roundResult = playRoundRound(userSelection, computerSelection);

        if (roundResult === 1) {
            userScore++;
            console.log(`You Won! ${userSelection} beats ${computerSelection}!`);
        }
        else if (result === 2) {
            compScore++;
            console.log(`You Lost! ${computerSelection} beats ${userSelection}!`);
        }
        else
        {
            console.log(`It is a tie! you both went ${computerSelection}!`);
        }
    }

    console.info("Final Results of this Game:");
    console.log(`Total Rounds played: 5
                You won: ${userScore}
                You lost: ${compScore} `);
}


