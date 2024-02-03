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
// If player and computer selection is the same, output tie
// If player is rock, and computer is paper
//  computer wins
// If player is paper, and computer is rock
//  computer wins
// If player is scissors, and computer is 
// If player is scissors, and computer is paper
// player wins




}
