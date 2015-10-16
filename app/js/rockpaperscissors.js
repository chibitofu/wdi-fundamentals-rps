////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
function getPlayerMove(move){
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove==="rock" && computerMove==="scissors") {
        winner="Player";
    }
    else if (playerMove==="paper" && computerMove==="rock") {
        winner = "Player";
    }
    else if (playerMove==="scissors" && computerMove==="paper") {
      winner="Player";
    }
    else if (playerMove==="rock" && computerMove==="paper") {
        winner = "Computer";
    }
    else if (playerMove==="paper" && computerMove==="scissors") {
        winner = "Computer";
    }
    else if (playerMove==="scissors" && computerMove==="rock") {
      winner="Computer";
    }
    else {
      winner="Tie";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
      var playerMove = getPlayerMove();
      console.log('You Chose ' + playerMove + '.');
      var computerMove = getComputerMove();
      console.log('Computer chooses ' + computerMove + '.');
      var roundWinner = getWinner(playerMove,computerMove);
    if (roundWinner==="Player" && playerWins < 5) {
      playerWins+=1;
      console.log('Humankind is victorious because ' + playerMove + ' triumphs over ' + computerMove + '!');
      console.log('Current score ' + 'Humans ' + playerWins + ' : ' + 'Machines ' + computerWins);
    }
    else if (roundWinner==="Computer" && computerWins < 5) {
      computerWins+=1;
      console.log('Machines are superior because ' + computerMove + ' overrides ' + playerMove + '. Silly Human.');
      console.log('Current score ' + 'Humans ' + playerWins + ' : ' + 'Machines ' + computerWins);
    }
    else if (roundWinner==="Tie") {
      console.log('It\'s a tie. Bow ties are cool.');
      console.log('Current score ' + 'Humans ' + playerWins + ' : ' + 'Machines ' + computerWins);
    }
    }
    if (roundWinner==='Player' && playerWins===5) {
      console.log(' __   _____  _   _  __      _____ _  _ ');
      console.log(' \\ \\ / / _ \\| | | | \\ \\    / /_ _| \\| |');
      console.log('  \\ V / (_) | |_| |  \\ \\/\\/ / | || .` |');
      console.log('   |_| \\___/ \\___/    \\_/\\_/ |___|_|\\_|');
      console.log('                                       ');
      console.log('You learn kung fu. The machines are defeated.');
      console.log('Final score ' + 'Humans ' + playerWins + ' : ' + 'Machines ' + computerWins);
    }
    else if (roundWinner==='Computer' && computerWins===5) {
      console.log(' __   _____  _   _   _    ___  ___ ___ ');
      console.log(' \\ \\ / / _ \\| | | | | |  / _ \\/ __| __|');
      console.log('  \\ V / (_) | |_| | | |_| (_) \\__ \\ _| ');
      console.log('   |_| \\___/ \\___/  |____\\___/|___/___|');
      console.log('                                       ');
      console.log('Machines reign supreme. \"You\'re a 100 years too early to take me on.\"');
      console.log('Final score ' + 'Humans ' + playerWins + ' : ' + 'Machines ' + computerWins);
    }
    return [playerWins, computerWins];
 }
