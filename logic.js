// Computer randomly picks rock, paper, scissors
function computerPlay() {
  let choice = Math.random(0, 1);
  if (choice < 0.333) {
      console.log("computer: rock");
      return "rock";
  } else if (choice > 0.666) {
      console.log("computer: scissors");
      return "scissors";
  } else {
      console.log("computer: paper");
      return "paper";
  }
}

// Prompt user to pick rock, paper, scissors
// Reprompt user for invalid choice
function userPlay(e) {
  const userChoice = e.target.value;
  console.log(userChoice);
  const playArea = document.querySelector('.play-area');
  const choiceDiv = document.createElement('div');
  choiceDiv.textContent = userChoice;
  playArea.appendChild(choiceDiv);  
}

// Compare computer choice to user choice
// Return values for win, lose, draw cases
function playRound(player, computer) {
  if (player == "rock") {
      switch (computer) {
          case "rock":
              console.log("Draw!");
              return 0;
          case "paper":
              console.log("You lose!");
              return -1;
          case "scissors":
              console.log("You win!");
              return 1;
      }
  } else if (player == "paper") {
      switch (computer) {
          case "rock":
              console.log("You win!");
              return 1;
          case "paper":
              console.log("Draw!");
              return 0;
          case "scissors":
              console.log("You lose!");
              return -1;
      }
  } else {
      switch (computer) {
          case "rock":
              console.log("You lose!");
              return -1;
          case "paper":
              console.log("You win!");
              return 1;
          case "scissors":
              console.log("Draw!");
              return 0;
      }
  }
}



// Play a game of first to 3 points calling playRound() each time
function playGame() {
  let userScore = 0;
  let compScore = 0;
  
  while (userScore < 3 && compScore < 3) {
      let j = playRound(userPlay(), computerPlay());
      if (j == 1) {
          userScore++;
          console.log(`Score:
          user: ${userScore}
          comp: ${compScore}`);
      } else if (j == -1) {
          compScore++;
          console.log(`Score:
          user: ${userScore}
          comp: ${compScore}`);
      } else {
          console.log(`Score:
          user: ${userScore}
          comp: ${compScore}`);
      }

      if (userScore == 3) {
          console.log("You win! Congratulations!");
          return;
      }

      if (compScore == 3) {
          console.log("You lose! Better luck next time.");
          return;
      }
  }
}

playGame();

// Add functions to DOM

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener('click', userPlay));