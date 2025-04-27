// 2. Function that randomly returns “rock”, “paper” or “scissors”

    // declare choices
    const choices = ['rock', 'paper', 'scissors'];

    const rock = document.querySelector('button.rock');
    const paper = document.querySelector('button.paper');
    const scissors = document.querySelector('button.scissors');
    const results = document.querySelector('div.results');

    // function to randomly return choice
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

    function getPlayerChoice() {
        rock.addEventListener("click", () => {
            return 'rock'});
        paper.addEventListener("click", () => {
            return 'paper'});
        scissors.addEventListener("click", () => {
            return 'scissors'});
    }
    
    function playRound(playerChoice, computerChoice) {
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
            let p = document.createElement('p');
            p.textContent = roundOutput;
            results.appendChild(p);
    }
    

    for (; round < 5;) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(`Round: ${round}, PlayerScore: ${playerScore}, ComputerScore: ${computerScore}`)
    }  
    if (playerScore >= 3) {
        console.log(`You won the game ${playerScore} to ${computerScore}!`);
    } else console.log(`The computer won the game ${computerScore} to ${playerScore}!`);

}
playGame()