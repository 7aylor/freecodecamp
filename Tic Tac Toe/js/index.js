var o = "&#9675";
var x = "&times";
var team;
var turn = "x";
var grid = ["", "", "", "", "", "", "", "", ""];
var winner = "";

window.onload = function() {

  //initial screen to choose x or o
  document.getElementById("x").onclick = function() {
    teamChoiceClicked("x")
  };
  document.getElementById("o").onclick = function() {
    teamChoiceClicked("o")
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
    document.getElementById("player-choice").style.display = "none";
    document.getElementById("container").style.display = "block";
  }

  function clickCell(id) {
    if (document.getElementById(id).innerHTML === "") {
      var index = parseInt(id) - 1;
      if (turn === "x") {
        document.getElementById(id).innerHTML = x;
        turn = "o";
        grid[index] = x;
        document.getElementById(id).style.color = "#14BDAC";
      } else {
        document.getElementById(id).innerHTML = o;
        document.getElementById(id).style.color = "#CDD6EB";
        document.getElementById(id).style.fontWeight = "bold";
        turn = "x";
        grid[index] = o;
      }

      checkWin();
    }
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
    if (grid[3] !== "" && grid[3] === grid[4] && grid[4] === grid[5]) {
      document.getElementById("4").style.backgroundColor = "#D41818";
      document.getElementById("5").style.backgroundColor = "#D41818";
      document.getElementById("6").style.backgroundColor = "#D41818";
      winner = grid[3];
    }
    //across bottom row
    if (grid[6] !== "" && grid[6] === grid[7] && grid[7] === grid[8]) {
      document.getElementById("7").style.backgroundColor = "#D41818";
      document.getElementById("8").style.backgroundColor = "#D41818";
      document.getElementById("9").style.backgroundColor = "#D41818";
      winner = grid[6];
    }
    //vertical first column
    if(grid[0] !== "" && grid[0] === grid[3] && grid[3] === grid[6]){
      document.getElementById("1").style.backgroundColor = "#D41818";
      document.getElementById("4").style.backgroundColor = "#D41818";
      document.getElementById("7").style.backgroundColor = "#D41818";
      winner = grid[0];
    }
    //vertical middle column
    if(grid[1] !== "" && grid[1] === grid[4] && grid[4] === grid[7]){
      document.getElementById("2").style.backgroundColor = "#D41818";
      document.getElementById("5").style.backgroundColor = "#D41818";
      document.getElementById("8").style.backgroundColor = "#D41818";
      winner = grid[1];
    }
    //vertical last columb
    if(grid[2] !== "" && grid[2] === grid[5] && grid[5] === grid[8]){
      document.getElementById("3").style.backgroundColor = "#D41818";
      document.getElementById("6").style.backgroundColor = "#D41818";
      document.getElementById("9").style.backgroundColor = "#D41818";
      winner = grid[2];
    }
    //diagonal left to right, top to bottom
    if(grid[0] !== "" && grid[0] === grid[4] && grid[4] === grid[8]){
      document.getElementById("1").style.backgroundColor = "#D41818";
      document.getElementById("5").style.backgroundColor = "#D41818";
      document.getElementById("9").style.backgroundColor = "#D41818";
      winner = grid[0];
    }
    //diagonal left to right, bottom to top
    if(grid[2] !== "" && grid[2] === grid[4] && grid[4] === grid[6]){
      document.getElementById("3").style.backgroundColor = "#D41818";
      document.getElementById("5").style.backgroundColor = "#D41818";
      document.getElementById("7").style.backgroundColor = "#D41818";
      winner = grid[2];
    }
    
    if(winner !== ""){
      var overlay = document.getElementById("winner-overlay");
      overlay.style.display = "block";

      //show winner by adding new element to first element of overlay
      var winText = document.createElement("p");
      winText.innerHTML = winner + " Wins!<br><br>";
      overlay.insertBefore(winText, overlay.firstChild);
      
      document.getElementById("yes").onclick = function(){
        clearGrid();
      }
      
    }

  }

  function clearGrid() {
    for (var i = 1; i < 10; i++) {
      document.getElementById(i.toString()).innerHTML = "";
      document.getElementById(i.toString()).backgroundColor = "";
    }

    grid = ["", "", "", "", "", "", "", "", ""];
    
    document.getElementById("winner-overlay").style.display = "none";
    var overlay = document.getElementById("winner-overlay");
    //overlay.removeChild(overlay.firstElement);
  }
  
  function gameOver(){
    
  }
}