// vars
var rPs = ["Rock", "Paper", "Scissors"];
var userInput;
var computerInput = rPs[Math.floor(Math.random() * 3)];
var score = 0;
var scoreHolder = 0;
var compliment;
var complimentHolder;
document.getElementById("scoreText").innerHTML = score;
// -------------------------------------------------------------
function assignScissors(){
  userInput = "Scissors";
}
function assignRock(){
  userInput = "Rock";
}
function assignPaper(){
  userInput = "Paper";
}
// -------------------------------------------------------------
function compareChoices(){
  if (userInput===computerInput){
    document.getElementById("result").innerHTML = "It's a tie.";
    computerInput = rPs[Math.floor(Math.random() * 3)];
  } else if (userInput==="Rock" && computerInput === "Scissors" || userInput === "Paper" && computerInput === "Rock" || userInput === "Scissors" && computerInput === "Paper") {
    document.getElementById("result").innerHTML = "You Win!";
    score = scoreHolder + 1;
    scoreHolder = score;
    document.getElementById("scoreText").innerHTML = score;
    computerInput = rPs[Math.floor(Math.random() * 3)];
  } else {
    document.getElementById("result").innerHTML = "You Lose!";
    computerInput = rPs[Math.floor(Math.random() * 3)];
  }
}

// -----------------------------------------------------------------
switch (score)
{
  case 5:
  compliment = complimentHolder = "Good Job!";
  complimentHolder = compliment;
  document.getElementById("complimentText").innerHTML = compliment;
  break;
  case 7:
  compliment = complimentHolder = "Great Job!!";
  complimentHolder = compliment;
  document.getElementById("complimentText").innerHTML = compliment;
  break;
  case 10:
  compliment = complimentHolder = "Amazing!!!";
  complimentHolder = compliment;
  document.getElementById("complimentText").innerHTML = compliment;
  case 12:
  compliment = complimentHolder = "Epic!";
  complimentHolder = compliment;
  document.getElementById("complimentText").innerHTML = compliment;
  default:
  compliment = "You can do it!";
  document.getElementById("complimentText").innerHTML = compliment;
}



// -----------------------------------------------------------------
var bg_colour = Math.floor(Math.random() * 16777215).toString(16);
      bg_colour = "#" + ("000000" + bg_colour).slice(-6);
      document.bgColor = bg_colour;
document.getElementById('colors').style.backgroundColor = bg_colour;


function changeColor(){
  bg_colour = Math.floor(Math.random() * 16777215).toString(16);
  bg_colour = "#" + ("000000" + bg_colour).slice(-6);
  document.bgColor = bg_colour;
  document.getElementById('colors').style.backgroundColor = bg_colour;
}
