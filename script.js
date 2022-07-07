
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
    // let userChoice =  prompt("Enter your choice!"); 

    // while ( (userChoice !== null)
    //     &&  (!validateUserChoice(userChoice)) )
    // {
    //     alert("You did not enter a valid choice! Try Again..")
    //     userChoice =  prompt("Enter your choice!"); 
    // }
    // console.log(userChoice);
    // if (userChoice === null) {
    //     console.log("Game Cancelled!");
    //     return;
    // }
    // return userChoice;

    // const userChoiceList = document.querySelectorAll(".player-selection button");

    // userChoiceList.forEach(btn => {
    //     btn.addEventListener('click', (e) => {
    //         let choiceMade = e.target.textContent.trim();
    //         console.log(choiceMade);

    //         game(choiceMade);
    //     })
    // });
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

function showResult(roundResult) {
    if (roundResult === 1) {
        // userScore++;
        console.log(`You Won! ${userSelection} beats ${computerSelection}!`);
    }
    else if (roundResult === 2) {
        // compScore++;
        console.log(`You Lost! ${computerSelection} beats ${userSelection}!`);
    }
    else
    {
        console.log(`It is a tie! you both went ${computerSelection}!`);
    }
}

function game(userSelection) {
    let userScore  = 0, compScore = 0;

    //for (let i = 0; i < 5; i++) 
    {
        // const userSelection = userPlay();
        // console.log('in here', userSelection);

        if (userSelection === undefined) {
            return;
        }

        const computerSelection = computerPlay();
        let roundResult = playRound(userSelection, computerSelection);

        if (roundResult === 1) {
            // userScore++;

            userScoreBoard.textContent = +userScoreBoard.textContent + 1;

            console.log(`You Won! ${userSelection} beats ${computerSelection}!`);
        }
        else if (roundResult === 2) {
            // compScore++;

            compScoreBoard.textContent = +compScoreBoard.textContent + 1;
            console.log(`You Lost! ${computerSelection} beats ${userSelection}!`);
        }
        else
        {
            console.log(`It is a tie! you both went ${computerSelection}!`);
        }
    }

    // console.info("Final Results of this Game:");
    // console.log(`Total Rounds played: 5
    // You won: ${userScore}
    // You lost: ${compScore} 
    // Tie: ${5-userScore-compScore}`);
}

// userPlay();

const userChoiceList = document.querySelectorAll(".player-selection button");

const userScoreBoard = document.querySelector(".player-score .number");
const compScoreBoard = document.querySelector(".comp-score .number");

userChoiceList.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let choiceMade = e.target.textContent.trim();
        // console.log(choiceMade);

        game(choiceMade);
        
    })
});



