let userScore = 0;
let compScore = 0;
let userSelect = '';
let compSelect = '';
const playArea = document.querySelector('.play-area');

// Computer randomly selects a choice
function computerChoice() {
  const choice = Math.random(0, 1);
  if (choice < 0.3334) {
      return "rock";
  } else if (choice > 0.6667) {
      return "paper";
  } else {
      return "scissors";
  }
}

// When a button is selected, store its value into a variable and then display that value in the play area
function userValue(e) {
  const roundValue = e.target.value;
  console.log(typeof roundValue);
  console.log(roundValue);
  const userChoice = document.createElement('p');
  userChoice.textContent = `User: ${roundValue}`;
  playArea.appendChild(userChoice);
  userSelect = roundValue;
}

// When a button is clicked, the random computer option is displayed in the play area
function computerValue() {
  const roundValue = computerChoice();
  console.log(roundValue);
  const compChoice = document.createElement('p');
  compChoice.textContent = `Computer: ${roundValue}`;
  playArea.appendChild(compChoice);
  compSelect = roundValue;
}

// If play area is not empty when button is clicked, clear it
function clearPlay() {
  if (playArea.textContent) {
    playArea.innerHTML = '';
  }
}

// When button is clicked, determine whether user won, lost, or drew
function evaluatePlay() {
  const outcome = document.createElement('p');
  console.log(userValue);
  if (userSelect == 'rock') {
    if (compSelect == 'rock') {
      outcome.textContent = "Draw!"; 
    } else if (compSelect == 'paper') {
      outcome.textContent = "Lose!";
      compScore++;
    } else {
      outcome.textContent = "Win!";
      userScore++;
    }
  } 
  else if (userSelect == 'paper') {
    if (compSelect == 'rock') {
      outcome.textContent = "Win!";
      userScore++;
    } else if (compSelect == 'paper') {
      outcome.textContent = "Draw!";
    } else {
      outcome.textContent = "Lose!"
      compScore++;
    }
  }
  else {
    if (compSelect == 'rock') {
      outcome.textContent = "Lose!"; 
      compScore++;
    } else if (compSelect == 'paper') {
      outcome.textContent = "Win!";
      userScore++;
    } else {
      outcome.textContent = "Draw!"
    }
  }

  playArea.appendChild(outcome);
}

// Update score after each click and check whether any player has won the whole game
function updateScore() {
  document.querySelector('#user-score-num').textContent = userScore;
  document.querySelector('#comp-score-num').textContent = compScore;
  if (userScore == 5) {
    const message = document.createElement('p');
    message.textContent = "Victorious!";
    playArea.appendChild(message);
  }
  if (compScore == 5) {
    const message = document.createElement('p');
    message.textContent = "Defeat!";
    playArea.appendChild(message);
  }
}

// Add event listener for buttons
const buttons = document.querySelectorAll('button');
buttons.forEach( button => button.addEventListener('click', clearPlay));
buttons.forEach( button => button.addEventListener('click', userValue));
buttons.forEach( button => button.addEventListener('click', computerValue));
buttons.forEach( button => button.addEventListener('click', evaluatePlay));
buttons.forEach( button => button.addEventListener('click', updateScore));
