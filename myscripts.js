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
    function playRound(playerChoice, computerChoice) {
        if (playerChoice == computerChoice) {
            console.log(`Tie! Both picked ${playerChoice}`);
        } else if ((playerChoice == 'rock' && computerChoice == 'scissors') ||
            (playerChoice == 'paper' && computerChoice == 'rock') ||
            (playerChoice == 'scissors' && computerChoice == 'paper')) {
                console.log(`You win! ${playerChoice} beats ${computerChoice}`);
                playerScore++;
            } else {
                console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
                computerScore++;
            }
    }
    const playerSelection = getPlayerChoice().toLowerCase();
    const computerSelection = getComputerChoice();

    for (let i = 0; i < 5; i++) {
        let round = i + 1;
        playRound(getComputerChoice(), getPlayerChoice());
        console.log(`PlayerScore: ${playerScore}, ComputerScore: ${computerScore}`)
    }  
    if (playerScore >= 3) {
        console.log(`You won the game ${playerScore} to ${computerScore}!`);
    } else console.log(`The computer won the game ${computerScore} to ${playerScore}!`);
}
playGame()