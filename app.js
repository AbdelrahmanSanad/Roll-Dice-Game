/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var player1 = document.getElementsByClassName("player-0-panel")[0];
var player2 = document.getElementsByClassName("player-1-panel")[0];
var myRoll = 0;
var img = document.getElementsByTagName("img")[0];
var palyer1CurrentScore = document.getElementById("current-0");
var player2CurrentScore = document.getElementById("current-1");
var player1TotalScore = document.getElementById("score-0");
var player2TotalScore = document.getElementById("score-1");

var player1Score = 0;
var player2Score = 0;

function getPlayer2Turn() {
  player2.classList.add("active");
  player1.classList.remove("active");
}

function getPlayer1Turn() {
  player1.classList.add("active");
  player2.classList.remove("active");
}

var p1 = 0;
var p2 = 0;

function getTheRoll() {
  do {
    myRoll = parseInt(Math.random() * 10);
  } while (myRoll > 6 || myRoll === 0);
  img.setAttribute("src", "assest/dice-" + myRoll + ".png");

  if (player1.classList.contains("active")) {
    if (player1Score < 50) {
      if (myRoll === 1) {
        p1 = 0;
        palyer1CurrentScore.textContent = p1;
        player1.classList.remove("active");
        player2.classList.add("active");
      } else {
        p1 += myRoll;
        palyer1CurrentScore.textContent = p1;
      }
    }
  } else if (player2.classList.contains("active")) {
    if (player2Score < 50) {
      if (myRoll === 1) {
        p2 = 0;
        player2CurrentScore.textContent = p2;
        player2.classList.remove("active");
        player1.classList.add("active");
      } else {
        p2 += myRoll;
        player2CurrentScore.textContent = p2;
      }
    }
  }
}

function getHold() {
  if (player1.classList.contains("active")) {
    if (player1Score + p1 >= 50) {
      document.getElementById("name-0").textContent = " Winner!";
    }

    player1.classList.remove("active");
    player1Score += p1;
    p1 = 0;
    player1TotalScore.textContent = player1Score;
    palyer1CurrentScore.textContent = 0;
    player2.classList.add("active");
  } else if (player2.classList.contains("active")) {
    if (player2Score + p2 >= 50) {
      document.getElementById("name-1").textContent = " Winner!";
    }
    player2.classList.remove("active");
    player2Score += p2;
    p2 = 0;
    player2CurrentScore.textContent = p2;
    player2TotalScore.textContent = player2Score;
    player1.classList.add("active");
  }
}

function getNewGame() {
  p1 = 0;
  p2 = 0;
  player1Score = 0;
  player2Score = 0;
  palyer1CurrentScore.textContent = p1;
  player1TotalScore.textContent = player1Score;
  player2CurrentScore.textContent = p2;
  player2TotalScore.textContent = player2Score;
  document.getElementById("name-0").textContent = " Player1";
  document.getElementById("name-1").textContent = " Player2";
}
