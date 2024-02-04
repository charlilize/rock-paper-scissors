// RANDOMLY ASSIGNS THE COMPUTER ROCK, PAPER, OR SCISSORS
function getComputerChoice() {
    // Randomize a random number from 0-2, inclusive
    let choice = Math.round(Math.random() * 2);

    // Assigns rock, paper, or scissors, depending on randomization
    if (choice == 0) {
        return 'Rock';
    } else if (choice == 1) {
        return 'Paper';
    } else if (choice == 2) {
        return 'Scissors';
    }
}

// PLAYS A ROUND OF GAME
function playRound(playerSelection, computerSelection) {
    // Make player selection case insensitive
    playerSelection = playerSelection.toUpperCase();

    // Determine who wins each round
    if (playerSelection == computerSelection.toUpperCase()) {
        return "It's a Tie!";
    } else if (playerSelection == "ROCK" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors!";
    } else if (playerSelection == "PAPER" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock!";
    } else if (playerSelection == "SCISSORS" && computerSelection == "Paper") {
        return "You Win! Scissors beats paper!"
    } else if (computerSelection == "Rock" && playerSelection == "SCISSORS") {
        return "You Lose! Rock beats Scissors!";
    } else if (computerSelection == "Paper" && playerSelection == "ROCK") {
        return "You Lose! Paper beats Rock!";
    } else if (computerSelection == "Scissors" && playerSelection == "PAPER") {
        return "You Lose! Scissors beats Paper!";
    }
}
