// 2. Function that randomly returns “rock”, “paper” or “scissors”

    // declare choices
    const choices = ['rock', 'paper', 'scissors'];

    // function to randomly return choice
    function getComputerChoice() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

// 3. Function to get players choice

    // prompt user for a valid choice
    function getPlayerChoice() {
        return prompt('Pick 1: rock, paper, or scissors');
    }

// 4. Declare the players score variables

    // playerScore
    let playerScore = 0;
    // computerScore
    let computerScore = 0;

// 5. Write logic to play single round

// 6. Write logic to play the entire game