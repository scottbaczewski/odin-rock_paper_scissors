// 2. Function that randomly returns “rock”, “paper” or “scissors”

    // declare choices
    const choices = ['rock', 'paper', 'scissors'];

    // function to randomly return choice
    function getComputerChoice() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

// 3. Function to get players choice

    function getPlayerChoice() {
        return prompt('Pick 1: rock, paper, or scissors');
    }

// 4. Declare the players score variables



// 5. Write logic to play single round

    // playRound moved inside playGame function below
    
// 6. Write logic to play the entire game

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 0;
    
    function playRound(playerChoice, computerChoice) {
        if (playerChoice == computerChoice) {
            console.log(`Tie! Both picked ${playerChoice}`);
        } else if ((playerChoice == 'rock' && computerChoice == 'scissors') ||
            (playerChoice == 'paper' && computerChoice == 'rock') ||
            (playerChoice == 'scissors' && computerChoice == 'paper')) {
                playerScore++;
                round++;
                console.log(`You win! ${playerChoice} beats ${computerChoice}`);
            } else {
                computerScore++;
                round++;
                console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
            }
    }
    

    // for (; round < 5;) {
    //     let playerSelection = getPlayerChoice().toLowerCase();
    //     let computerSelection = getComputerChoice();
    //     playRound(playerSelection, computerSelection);
    //     console.log(`Round: ${round}, PlayerScore: ${playerScore}, ComputerScore: ${computerScore}`)
    // }  
    // if (playerScore >= 3) {
    //     console.log(`You won the game ${playerScore} to ${computerScore}!`);
    // } else console.log(`The computer won the game ${computerScore} to ${playerScore}!`);


const rock = document.querySelector('button.rock');
const paper = document.querySelector('button.paper');
const scissors = document.querySelector('button.scissors');

rock.addEventListener("click", () => {
    playRound('rock', getComputerChoice())
});
paper.addEventListener("click", () => {
    playRound('paper', getComputerChoice())
});
scissors.addEventListener("click", () => {
    playRound('scissors', getComputerChoice())
});

}
playGame()