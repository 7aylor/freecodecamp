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

  //write to screen
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
    team = choice;
    if (team === "x") {
      computerTeam = "o";
    } else {
      computerTeam = "x";
      computerPlay();
    }
    document.getElementById("player-choice").style.display = "none";
    document.getElementById("container").style.display = "block";
  }

  function clickCell(id) {
    if (document.getElementById(id).innerHTML === "") {
      var index = parseInt(id) - 1;
      /*if (turn === "x") {
        document.getElementById(id).innerHTML = x;
        turn = "o";
        grid[index] = x;
        document.getElementById(id).style.color = "#14BDAC";
      } else {
        document.getElementById(id).innerHTML = o;
        document.getElementById(id).style.color = "#CDD6EB";
        turn = "x";
        grid[index] = o;
      }
      */
      if (team === "x") {
        document.getElementById(id).innerHTML = x;
        document.getElementById(id).style.color = "#14BDAC";
        grid[index] = x;
        if (winner === "") {
          computerPlay();
        }
      } else {
        if(winner === "" && playCount > 0){
          computerPlay();
        }
        document.getElementById(id).innerHTML = o;
        document.getElementById(id).style.color = "#CDD6EB";
        grid[index] = o;
      }

      playCount++;

      if (playCount > 4) {
        checkWin();
      }

      console.log(grid);

    }
  }

  function computerPlay() {

    var cellChoice = Math.floor((Math.random() * 9));
    while (grid[cellChoice] !== "") {
      cellChoice = Math.floor((Math.random() * 9));
    }

    var index = cellChoice + 1;
    
    if (computerTeam === "x") {
      document.getElementById(index.toString()).innerHTML = x;
      document.getElementById(index.toString()).style.color = "#14BDAC";
      grid[cellChoice] = x;
    } else {
      document.getElementById(index).innerHTML = o;
      document.getElementById(index).style.color = "#CDD6EB";
      grid[cellChoice] = o;
    }

    playCount++;

    checkWin();

  }

  function checkWin() {
    //across top row
    if (grid[0] !== "" && grid[0] === grid[1] && grid[1] === grid[2]) {
      document.getElementById("1").style.backgroundColor = "#D41818";
      document.getElementById("2").style.backgroundColor = "#D41818";
      document.getElementById("3").style.backgroundColor = "#D41818";
      winner = grid[0];
    }
    //across middle row
    else if (grid[3] !== "" && grid[3] === grid[4] && grid[4] === grid[5]) {
      document.getElementById("4").style.backgroundColor = "#D41818";
      document.getElementById("5").style.backgroundColor = "#D41818";
      document.getElementById("6").style.backgroundColor = "#D41818";
      winner = grid[3];
    }
    //across bottom row
    else if (grid[6] !== "" && grid[6] === grid[7] && grid[7] === grid[8]) {
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
    else if (grid[1] !== "" && grid[1] === grid[4] && grid[4] === grid[7]) {
      document.getElementById("2").style.backgroundColor = "#D41818";
      document.getElementById("5").style.backgroundColor = "#D41818";
      document.getElementById("8").style.backgroundColor = "#D41818";
      winner = grid[1];
    }
    //vertical last columb
    else if (grid[2] !== "" && grid[2] === grid[5] && grid[5] === grid[8]) {
      document.getElementById("3").style.backgroundColor = "#D41818";
      document.getElementById("6").style.backgroundColor = "#D41818";
      document.getElementById("9").style.backgroundColor = "#D41818";
      winner = grid[2];
    }
    //diagonal left to right, top to bottom
    else if (grid[0] !== "" && grid[0] === grid[4] && grid[4] === grid[8]) {
      document.getElementById("1").style.backgroundColor = "#D41818";
      document.getElementById("5").style.backgroundColor = "#D41818";
      document.getElementById("9").style.backgroundColor = "#D41818";
      winner = grid[0];
    }
    //diagonal left to right, bottom to top
    else if (grid[2] !== "" && grid[2] === grid[4] && grid[4] === grid[6]) {
      document.getElementById("3").style.backgroundColor = "#D41818";
      document.getElementById("5").style.backgroundColor = "#D41818";
      document.getElementById("7").style.backgroundColor = "#D41818";
      winner = grid[2];
    }

    if (winner !== "" || playCount === 9) {

      var overlay = document.getElementById("winner-overlay");
      overlay.style.display = "block";

      if (winner === "") {
        document.getElementById("win-msg").innerHTML = "It's a tie!<br><br>";
      } else {
        document.getElementById("win-msg").innerHTML = winner + " Wins!<br><br>";
      }

      document.getElementById("yes").onclick = function() {
        clearGrid();
      }
      document.getElementById("no").onclick = function() {
        gameOver();
      }
    }

  }

  function clearGrid() {
    for (var i = 1; i < 10; i++) {
      document.getElementById(i.toString()).innerHTML = "";
      document.getElementById(i.toString()).style.backgroundColor = "";
    }

    turn = "x";
    grid = ["", "", "", "", "", "", "", "", ""];
    winner = "";
    playCount = 0;

    document.getElementById("winner-overlay").style.display = "none";
    document.getElementById("win-msg").innerHTML = "";
    
    if(team === "o"){
      computerPlay();
    }
    
  }

  function gameOver() {
    //document.getElementById("winner-overlay").style.opacity = "0";
  }
}