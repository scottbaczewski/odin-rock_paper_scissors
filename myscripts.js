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

    let playerScore = 0;
    let computerScore = 0;

// 5. Write logic to play single round

    // playRound
    function playRound(playerChoice, computerChoice) {
        if (playerChoice == computerChoice) {
            console.log(`Tie! Both picked ${playerChoice}`)
        } else if ((playerChoice == 'rock' && computerChoice == 'scissors') ||
            (playerChoice == 'paper' && computerChoice == 'rock') ||
            (playerChoice == 'scissors' && computerChoice == 'paper')) {
                console.log(`You win! ${playerChoice} beats ${computerChoice}`)
            } else {
                console.log(`You lose! ${computerChoice} beats ${playerChoice}`)
            }
    }

    const playerSelection = getPlayerChoice().toLowerCase();
    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);

// 6. Write logic to play the entire game