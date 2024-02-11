// RANDOMLY ASSIGNS THE COMPUTER ROCK, PAPER, OR SCISSORS
function getComputerChoice() {
    // Randomize a random number from 0-2, inclusive
    let choice = Math.round(Math.random() * 2);

    // Assigns rock, paper, or scissors, depending on randomization
    if (choice == 0) {
        return 'ROCK';
    } else if (choice == 1) {
        return 'PAPER';
    } else if (choice == 2) {
        return 'SCISSORS';
    }
}


function updateWins(playerSelection, computerSelection) {
        // Determine who wins each round
        if (playerSelection == computerSelection) {
            return;
        } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
            return 1;
        } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
            return 1;
        } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {        
            return 1
        } else if (computerSelection == "ROCK" && playerSelection == "SCISSORS") {
            return 0;
        } else if (computerSelection == "PAPER" && playerSelection == "ROCK") {
            return 0;
        } else if (computerSelection == "SCISSORS" && playerSelection == "PAPER") {
            return 0;
        } else {
            return "Error";
        }
}

// PLAYS A ROUND OF GAME
function playRound(playerSelection, computerSelection) {
    // Determine who wins each round
    if (playerSelection == computerSelection) {
        return "It's a Tie!";
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        return "You Win! Rock beats Scissors!";
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        return "You Win! Paper beats Rock!";
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {        
        return "You Win! Scissors beats Paper!"
    } else if (computerSelection == "ROCK" && playerSelection == "SCISSORS") {
        return "You Lose! Rock beats Scissors!";
    } else if (computerSelection == "PAPER" && playerSelection == "ROCK") {
        return "You Lose! Paper beats Rock!";
    } else if (computerSelection == "SCISSORS" && playerSelection == "PAPER") {
        return "You Lose! Scissors beats Paper!";
    } else {
        return "Error";
    }
}

const buttonsDiv = document.querySelector("#container");
const buttons = document.querySelectorAll("button");
const displayResults = document.querySelector("#results");
const displayWinner = document.querySelector("#winner");
const playerScore = document.querySelector("#plyrScore");
const compScore = document.querySelector("#compScore");
const playAgain = document.querySelector("#playAgain")
let playerWins = 0;
let computerWins = 0;
let roundWinner = 0;

buttons.forEach((button) => {

    button.addEventListener("click", (event) => {
        // Randomize computer's choice every play
        let computerSelection = getComputerChoice();

        // Depending on element's ID put player's selection
        switch(event.target.id) {
            case "rock":
                displayResults.textContent = playRound("ROCK", computerSelection);
                roundWinner = updateWins("ROCK", computerSelection);
                break;
            case "paper":
                displayResults.textContent = playRound("PAPER", computerSelection);
                roundWinner = updateWins("PAPER", computerSelection);
                break;
            case "scissors":
                displayResults.textContent = playRound("SCISSORS", computerSelection);
                roundWinner = updateWins("SCISSORS", computerSelection);
                break;
        }

        if (roundWinner == 1)      playerWins++;
        else if (roundWinner == 0) computerWins++;

        playerScore.textContent = "Player: " + playerWins;
        compScore.textContent = "Computer: " + computerWins;

        if (playerWins == 5 || computerWins == 5) {
            buttonsDiv.remove();

            if (playerWins == computerWins)     displayWinner.textContent = "GAME OVER: It's a Tie!";
            else if (playerWins > computerWins) displayWinner.textContent = "GAME OVER: Player Wins the Game!";
            else if (computerWins > playerWins) displayWinner.textContent = "GAME OVER: Computer Wins the Game!";

            let playAgainBtn = document.createElement("button");
            playAgainBtn.setAttribute("class", "buttons");
            playAgain.appendChild(playAgainBtn);  
            playAgainBtn.textContent = "Play Again?";

            playAgainBtn.addEventListener("click", () => {
                window.location.reload();
            });
        }
    });
});
