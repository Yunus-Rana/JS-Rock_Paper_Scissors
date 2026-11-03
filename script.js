

const choices = ['rock', 'paper', 'scissors'];
const playerdisplay = document.getElementById('display');
const computerdisplay = document.getElementById('computerdisplay');
const resultdisplay = document.getElementById('resultdisplay');
const playerscoredisplay = document.getElementById('playerscoredisplay');
const computerscoredisplay = document.getElementById('computerscoredisplay');

let playerscore = 0;
let computerscore = 0;

function playgame(playerchoice) {
  const computerchoice = choices[Math.floor(Math.random() * 3)]; // computer choice picker

  let result = ""; //empty string

  if (playerchoice === computerchoice) {
    result = "It's a tie";
  } else {
    switch (playerchoice) {
      case "rock":
        result = (computerchoice === "scissors") ? "You win" : "You lose";
        break;
      case "paper":
        result = (computerchoice === "rock") ? "You win" : "You lose";
        break;
      case "scissors":
        result = (computerchoice === "paper") ? "You win" : "You lose";
        break;
    }
  }

  playerdisplay.textContent = `Player: ${playerchoice}`; //playerchoice
  computerdisplay.textContent = `Computer: ${computerchoice}`; //computer choice
  resultdisplay.textContent = result; //result

  resultdisplay.classList.remove("Success", "Lose"); //removes all classes before next round

  switch (result) {
    case "You win":
      resultdisplay.classList.add("Success");
      playerscore++;
      playerscoredisplay.textContent = playerscore;
      break;
    case "You lose":
      resultdisplay.classList.add("Lose");
      computerscore++;
      computerscoredisplay.textContent = computerscore;
      break;
  }
}