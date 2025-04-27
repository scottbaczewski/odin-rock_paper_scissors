// 2. Function that randomly returns “rock”, “paper” or “scissors”

    // declare choices
const choices = ['rock', 'paper', 'scissors'];

const rock = document.querySelector('button.rock');
const paper = document.querySelector('button.paper');
const scissors = document.querySelector('button.scissors');
const results = document.querySelector('div.results');
const runningScore = document.querySelector('div.runningScore');
const winner = document.querySelector('div.winner');

// function to randomly return choice

function getPlayerChoice() {
    rock.addEventListener("click", () => {
        return 'rock'});
    paper.addEventListener("click", () => {
        return 'paper'});
    scissors.addEventListener("click", () => {
        return 'scissors'});
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// 3. Function to get players choice

// 4. Declare the players score variables

// 5. Write logic to play single round

    // playRound moved inside playGame function below
    
// 6. Write logic to play the entire game

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 0;
    let roundOutput = '';

    let p_runningScore = document.createElement('p');
    

    function playRound(playerChoice, computerChoice) {
    p_runningScore.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
    runningScore.appendChild(p_runningScore);
        if (playerChoice == computerChoice) {
            roundOutput = `Tie! Both picked ${playerChoice}`;
        } else if ((playerChoice == 'rock' && computerChoice == 'scissors') ||
            (playerChoice == 'paper' && computerChoice == 'rock') ||
            (playerChoice == 'scissors' && computerChoice == 'paper')) {
                playerScore++;
                round++;
                roundOutput = `You win! ${playerChoice} beats ${computerChoice}`;
            } else {
                computerScore++;
                round++;
                roundOutput = `You lose! ${computerChoice} beats ${playerChoice}`;
            }
            let p_roundOutput = document.createElement('p');
            p_roundOutput.textContent = roundOutput;
            results.appendChild(p_roundOutput);
    }
    

    for (; round < 5;) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(`Round: ${round}, PlayerScore: ${playerScore}, ComputerScore: ${computerScore}`)
    }  
    let p_winner = document.createElement('p');
    if (playerScore >= 3) {
        p_winner.textContent = `You won the game ${playerScore} to ${computerScore}!`;
    } else p_winner.textContent = `The computer won the game ${computerScore} to ${playerScore}!`;
    winner.appendChild(p_winner);

}
playGame()