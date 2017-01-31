var o = "&#9675";
var x = "&times";
var team;
var computerTeam;
var turn = "x";
var grid = ["", "", "", "", "", "", "", "", ""];
var winner = "";
var playCount = 0;

window.onload = function() {

  //initial screen to choose x or o
  document.getElementById("x").onclick = function() {
    teamChoiceClicked("x");
  };
  document.getElementById("o").onclick = function() {
    teamChoiceClicked("o");
  };

  //write to x and o to screen on clicks
  document.getElementById("1").onclick = function() {
    clickCell("1")
  };
  document.getElementById("2").onclick = function() {
    clickCell("2")
  };
  document.getElementById("3").onclick = function() {
    clickCell("3")
  };
  document.getElementById("4").onclick = function() {
    clickCell("4")
  };
  document.getElementById("5").onclick = function() {
    clickCell("5")
  };
  document.getElementById("6").onclick = function() {
    clickCell("6")
  };
  document.getElementById("7").onclick = function() {
    clickCell("7")
  };
  document.getElementById("8").onclick = function() {
    clickCell("8")
  };
  document.getElementById("9").onclick = function() {
    clickCell("9")
  };

  //set the team and hide choice screen, show tic tac toe board
  function teamChoiceClicked(choice) {
    
    //player's team
    team = choice;
    
    //if team is x, computer is o
    if (team === "x") {
      computerTeam = "o";
    } 
    //otherwise, computer is x and they go first
    else {
      computerTeam = "x";
      computerPlay();
    }
    
    //hide choice and show grid
    document.getElementById("player-choice").style.display = "none";
    document.getElementById("container").style.display = "block";
  }

  //play of the game by clicking
  function clickCell(id) {
    //only allow click on an empty cell
    if (document.getElementById(id).innerHTML === "") {
      
      //get the index of the cell
      var index = parseInt(id) - 1;
      
      //if team is x
      if (team === "x") {
        //display x in the clicked cell, increase playCount and check for a winner
        document.getElementById(id).innerHTML = x;
        document.getElementById(id).style.color = "#14BDAC";
        grid[index] = "x";
        playCount++;
        checkWin();
        
        //if there is no winner, computer gets to play
        if (winner === "" && playCount < 9) {
          computerPlay();
        }
      } 
      //if team is o
      else {
        //display o in the clicked cell, increase playCount and check for a winner
        document.getElementById(id).innerHTML = o;
        document.getElementById(id).style.color = "#CDD6EB";
        grid[index] = "o";
        playCount++;
        checkWin();
        
        //if there is no winner, computer gets to play
        if(winner === ""){
          computerPlay();
        }
      }
    }
  }

  //computer plays in a random location
  function computerPlay() {
    
    //while the cellChoice is not empty and is taken by the player, choose a new cell
    while (grid[cellChoice] !== "" || grid[cellChoice] === team) {
      var cellChoice = Math.floor((Math.random() * 9));
    }
    
    //get the index of the cell, used for displaying on screen
    var index = cellChoice + 1;
    
    //if computer is x, display x
    if (computerTeam === "x") {
      document.getElementById(index.toString()).innerHTML = x;
      document.getElementById(index.toString()).style.color = "#14BDAC";
      grid[cellChoice] = "x";
    }
    //otherwise display o
    else {
      document.getElementById(index).innerHTML = o;
      document.getElementById(index).style.color = "#CDD6EB";
      grid[cellChoice] = "o";
    }

    //increase playCount and check if there is winner
    playCount++;
    checkWin();

  }

  function checkWin() {
    //across top row
    if (grid[0] !== "" && grid[0] === grid[1] && grid[0] === grid[2]) {
      document.getElementById("1").style.backgroundColor = "#D41818";
      document.getElementById("2").style.backgroundColor = "#D41818";
      document.getElementById("3").style.backgroundColor = "#D41818";
      winner = grid[0];
    }
    //across middle row
    else if (grid[3] !== "" && grid[3] === grid[4] && grid[3] === grid[5]) {
      document.getElementById("4").style.backgroundColor = "#D41818";
      document.getElementById("5").style.backgroundColor = "#D41818";
      document.getElementById("6").style.backgroundColor = "#D41818";
      winner = grid[3];
    }
    //across bottom row
    else if (grid[6] !== "" && grid[6] === grid[7] && grid[6] === grid[8]) {
      document.getElementById("7").style.backgroundColor = "#D41818";
      document.getElementById("8").style.backgroundColor = "#D41818";
      document.getElementById("9").style.backgroundColor = "#D41818";
      winner = grid[6];
    }
    //vertical first column
    else if (grid[0] !== "" && grid[0] === grid[3] && grid[3] === grid[6]) {
      document.getElementById("1").style.backgroundColor = "#D41818";
      document.getElementById("4").style.backgroundColor = "#D41818";
      document.getElementById("7").style.backgroundColor = "#D41818";
      winner = grid[0];
    }
    //vertical middle column
    else if (grid[1] !== "" && grid[1] === grid[4] && grid[1] === grid[7]) {
      document.getElementById("2").style.backgroundColor = "#D41818";
      document.getElementById("5").style.backgroundColor = "#D41818";
      document.getElementById("8").style.backgroundColor = "#D41818";
      winner = grid[1];
    }
    //vertical last column
    else if (grid[2] !== "" && grid[2] === grid[5] && grid[2] === grid[8]) {
      document.getElementById("3").style.backgroundColor = "#D41818";
      document.getElementById("6").style.backgroundColor = "#D41818";
      document.getElementById("9").style.backgroundColor = "#D41818";
      winner = grid[2];
    }
    //diagonal left to right, top to bottom
    else if (grid[0] !== "" && grid[0] === grid[4] && grid[0] === grid[8]) {
      document.getElementById("1").style.backgroundColor = "#D41818";
      document.getElementById("5").style.backgroundColor = "#D41818";
      document.getElementById("9").style.backgroundColor = "#D41818";
      winner = grid[0];
    }
    //diagonal left to right, bottom to top
    else if (grid[2] !== "" && grid[2] === grid[4] && grid[2] === grid[6]) {
      document.getElementById("3").style.backgroundColor = "#D41818";
      document.getElementById("5").style.backgroundColor = "#D41818";
      document.getElementById("7").style.backgroundColor = "#D41818";
      winner = grid[2];
    }

    //display the winner
    if (winner !== "" || playCount === 9) {
      
      //unhide winner overlay
      var overlay = document.getElementById("winner-overlay");
      overlay.style.display = "block";

      //if there is no winner, display that it's a tie
      if (winner === "") {
        document.getElementById("win-msg").innerHTML = "It's a tie!<br><br>";
      } 
      //otherwise, display the winner
      else {
        document.getElementById("win-msg").innerHTML = winner + " Wins!<br><br>";
      }
      
      //if the player wants to play again, clear the grid and start over
      document.getElementById("yes").onclick = function() {
        clearGrid();
      }
      //otherwise, the game is over and we stay here.
      document.getElementById("no").onclick = function() {
        gameOver();
      }
    }

  }

  //clear the grid to play again
  function clearGrid() {
    //loop through grid and clear onscreen elements
    for (var i = 1; i < 10; i++) {
      document.getElementById(i.toString()).innerHTML = "";
      document.getElementById(i.toString()).style.backgroundColor = "";
    }

    //set vars back to default
    turn = "x";
    grid = ["", "", "", "", "", "", "", "", ""];
    winner = "";
    playCount = 0;
    
    //hide menus
    document.getElementById("winner-overlay").style.display = "none";
    document.getElementById("win-msg").innerHTML = "";
    
    //if team is o, computer plays first
    if(team === "o"){
      computerPlay();
    }
    
  }

  function gameOver() {
    //hide the winner overlay without disabling it
    document.getElementById("winner-overlay").style.opacity = "0";
  }
}