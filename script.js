/* prompt-based
let userInput = prompt("Want to play a game?");
if (userInput != null) {
    /*
    let playerSelection = prompt("Rock, paper, or scissors?");
    */

    // youtube tutorial-based
    // Creating variables by their IDs
    const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');
    const userChoiceDisplay = document.getElementById('playerChoice');
    const resultDisplay = document.getElementById('result');
    const playerScoreDisplay = document.getElementById('playerScoreDisplay');
    const computerScoreDisplay = document.getElementById('computerScoreDisplay');

    // Used queryselectorall to select all buttons
    const possibleChoices = document.querySelectorAll('button')
    let userChoice
    let computerChoice
    let result
    let playerScore = 0;
    let computerScore = 0;
    
    // Assign an event when buttons are clicked
    possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = userChoice
        generateComputerChoice()
        playRound()
    }))

    // Generate random computer choice every time button is clicked
    function generateComputerChoice() {
        let randomChoice = Math.floor(Math.random() * possibleChoices.length);

        if (randomChoice === 0) {
            computerChoice = 'Rock';
        } if (randomChoice === 1) {
            computerChoice = 'Paper';
        } if (randomChoice === 2) {
            computerChoice = 'Scissors';
        }
        computerChoiceDisplay.innerHTML = computerChoice;
    }

    // Generate result
    function playRound() {

        if (userChoice === computerChoice) {
            result = "It's a tie!"; 
        } else if (
            (userChoice === 'Rock' && computerChoice === 'Scissors') ||
            (userChoice === 'Paper' && computerChoice === 'Rock') ||
            (userChoice === 'Scissors' && computerChoice === 'Paper')
        ) {
            result = "You win!";
            playerScore++;
        } else {
            result = "You lose! Try again next time.";
            computerScore++;
        }

        resultDisplay.innerHTML = result;
        playerScoreDisplay.innerHTML = playerScore;
        compScoreDisplay.innerHTML = computerScore;
    };
    
    // Generate score

