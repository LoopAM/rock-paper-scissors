let userScore = 0;
let compScore = 0;
let userSelect = '';
let compSelect = '';
const playArea = document.querySelector('.display-area');
const userArea = document.querySelector('#user-choice');
const compArea = document.querySelector('#comp-choice');
const outcomeArea = document.querySelector('.outcome');

// Computer randomly selects a choice
function computerChoice() {
  const choice = Math.random(0, 1);
  if (choice < 0.3334) {
      return "Rock";
  } else if (choice > 0.6667) {
      return "Paper";
  } else {
      return "Scissors";
  }
}

// When a button is selected, store its value into a variable and then display that value in the play area
function userValue(e) {
  const roundValue = e.target.value;
  const userChoice = document.createElement('p');
  userChoice.textContent = `${roundValue}`;
  userArea.appendChild(userChoice);
  userSelect = roundValue;
}

// When a button is clicked, the random computer option is displayed in the play area
function computerValue() {
  const roundValue = computerChoice();
  const compChoice = document.createElement('p');
  compChoice.textContent = `${roundValue}`;
  compArea.appendChild(compChoice);
  compSelect = roundValue;
}

// Clear user selection, computer selection, and outcome when button is clicked
function clearPlay() {
    outcomeArea.textContent = '';
    userArea.textContent = '';
    compArea.textContent = '';
}

// When button is clicked, determine whether user won, lost, or drew
function evaluatePlay() {
  const outcome = document.createElement('p');
  if (userSelect == 'Rock') {
    if (compSelect == 'Rock') {
      outcome.textContent = "Draw!"; 
    } else if (compSelect == 'Paper') {
      outcome.textContent = "Lose!";
      compScore++;
    } else {
      outcome.textContent = "Win!";
      userScore++;
    }
  } 
  else if (userSelect == 'Paper') {
    if (compSelect == 'Rock') {
      outcome.textContent = "Win!";
      userScore++;
    } else if (compSelect == 'Paper') {
      outcome.textContent = "Draw!";
    } else {
      outcome.textContent = "Lose!"
      compScore++;
    }
  }
  else {
    if (compSelect == 'Rock') {
      outcome.textContent = "Lose!"; 
      compScore++;
    } else if (compSelect == 'Paper') {
      outcome.textContent = "Win!";
      userScore++;
    } else {
      outcome.textContent = "Draw!"
    }
  }

  outcomeArea.appendChild(outcome);
}

// Update score after each click and check whether any player has won the whole game
function updateScore() {
  document.querySelector('#user-score-num').textContent = userScore;
  document.querySelector('#comp-score-num').textContent = compScore;
  if (userScore == 5) {
    const message = document.createElement('p');
    message.classList.add('end-result');
    message.textContent = "Victory!";
    playArea.appendChild(message);
  }
  if (compScore == 5) {
    const message = document.createElement('p');
    message.classList.add('end-result');
    message.textContent = "Defeat!";
    document.querySelector('body').appendChild(message);
  }
}

// Add event listener for buttons
const buttons = document.querySelectorAll('button');
buttons.forEach( button => button.addEventListener('click', clearPlay));
buttons.forEach( button => button.addEventListener('click', userValue));
buttons.forEach( button => button.addEventListener('click', computerValue));
buttons.forEach( button => button.addEventListener('click', evaluatePlay));
buttons.forEach( button => button.addEventListener('click', updateScore));
