'use strict';

function getInput() {
  //Prompts to enter a move.//
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}
function randomPlay() {
  //Randomly picks a number below 1.0, and returns it.//
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move){
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
  //Determines who the winner is.//
    var winner;
    var playerMove = playerMove.toLowerCase();
    //Turns playerMove into all lowercase so it doesn't conflict with the function.//
    if (playerMove === "rock" && computerMove === "scissors") {
        winner="Player";
    } else if (playerMove === "paper" && computerMove === "rock") {
        winner = "Player";
    } else if (playerMove === "scissors" && computerMove === "paper") {
        winner="Player";
    } else if (playerMove === "rock" && computerMove === "paper") {
        winner = "Computer";
    } else if (playerMove === "paper" && computerMove === "scissors") {
        winner = "Computer";
    } else if (playerMove === "scissors" && computerMove === "rock") {
        winner = "Computer";
    } else if (playerMove === computerMove) {
        winner = "Tie";
    } else if (playerMove === "terminate") {
        winner = "Terminate"
      //Input as player move to end the program.//
    } else {
        winner=null
      console.log("Ugly bag of moslty water. You did not enter 'rock', 'paper', or 'scissors'. Armus is angered!");
    } //This is displayed if an answer other than rock, paper or scissors is given.//
    return winner;
}

function gameAmount() {
  //This function sets the total points the game will go to.//
  console.log("Please enter the number of points you would like to play till. ex. 1, 5, 25...");
  return prompt("Please enter the number of points you would like to play till. ex. 1, 5, 25...");
}

function playToFive() {
  //Runs rock, paper, scissors game till someone scores enough points.//
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var gameRounds;
    while (isNaN(gameRounds) === true || gameRounds<=0) {
      //Checks to see if gameRounds is a numeral, and loops gameAmount until a numeral is entered.//
      var gameRounds = gameAmount();
    }
    console.log("*** You may type 'terminate' in the prompt to end the game. ***");
    while (playerWins < gameRounds && computerWins < gameRounds) {
      //Loops function till someone wins enough points.//
      var playerMove = getPlayerMove();
      console.log('You chose ' + playerMove.toLowerCase() + '.');
      var computerMove = getComputerMove();
      console.log('Computer chooses ' + computerMove + '.');
      var roundWinner = getWinner(playerMove,computerMove);
        if (roundWinner === "Player" && playerWins < gameRounds) {
          playerWins+=1;
          console.log('Humankind is victorious because ' + playerMove.toLowerCase() + ' triumphs over ' + computerMove + '!');
          console.log('Current score ' + 'Humans ' + playerWins + ' : ' + 'Machines ' + computerWins);
        } else if (roundWinner === "Computer" && computerWins < gameRounds) {
          computerWins+=1;
          console.log('Machines are superior because ' + computerMove + ' overrides ' + playerMove.toLowerCase() + '. Silly Human.');
          console.log('Current score ' + 'Humans ' + playerWins + ' : ' + 'Machines ' + computerWins);
        } else if (roundWinner === "Tie") {
          console.log('It\'s a tie. Bow ties are cool.');
          console.log('Current score ' + 'Humans ' + playerWins + ' : ' + 'Machines ' + computerWins);
        } else if (roundWinner === "Terminate") {
          roundWinner = 'Computer';
          computerWins = gameRounds;
        }
    }
    if (roundWinner === 'Player') {
      //Prints "YOU WIN" with game results.//
      console.log(' __   _____  _   _  __      _____ _  _ ');
      console.log(' \\ \\ / / _ \\| | | | \\ \\    / /_ _| \\| |');
      console.log('  \\ V / (_) | |_| |  \\ \\/\\/ / | || .` |');
      console.log('   |_| \\___/ \\___/    \\_/\\_/ |___|_|\\_|');
      console.log('                                       ');
      console.log('You learn kung fu. The machines are defeated.');
    } else if (roundWinner === 'Computer') {
      //Prints "YOU LOSE" with game results.//
      console.log(' __   _____  _   _   _    ___  ___ ___ ');
      console.log(' \\ \\ / / _ \\| | | | | |  / _ \\/ __| __|');
      console.log('  \\ V / (_) | |_| | | |_| (_) \\__ \\ _| ');
      console.log('   |_| \\___/ \\___/  |____\\___/|___/___|');
      console.log('                                       ');
      console.log('Machines superior. Humans inferior.');
    }
    return '*** Final score ' + 'Humans ' + playerWins + ' : ' + 'Machines ' + computerWins + ' ***';
 }
