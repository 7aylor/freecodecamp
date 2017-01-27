var o = "&#9675";
var x = "&times";
var team;
var turn = "x";
var grid = ["", "", "", "", "", "", "", "", ""];

window.onload = function(){
  
  //initial screen to choose x or o
  document.getElementById("x").onclick = function() {teamChoiceClicked("x")};
  document.getElementById("o").onclick = function() {teamChoiceClicked("o")};
  
  //write to screen
  document.getElementById("1").onclick = function() {clickCell("1")};
  document.getElementById("2").onclick = function() {clickCell("2")};
  document.getElementById("3").onclick = function() {clickCell("3")};
  document.getElementById("4").onclick = function() {clickCell("4")};
  document.getElementById("5").onclick = function() {clickCell("5")};
  document.getElementById("6").onclick = function() {clickCell("6")};
  document.getElementById("7").onclick = function() {clickCell("7")};
  document.getElementById("8").onclick = function() {clickCell("8")};
  document.getElementById("9").onclick = function() {clickCell("9")};
  
  
  //set the team and hide choice screen, show tic tac toe board
  function teamChoiceClicked(choice){
    team = choice;
    document.getElementById("player-choice").style.display = "none";
    document.getElementById("container").style.display = "block";
  }
  
  function clickCell(id){
    if(document.getElementById(id).innerHTML === ""){
      var index = parseInt(id) - 1;
      if(turn === "x"){
        document.getElementById(id).innerHTML = x;
        turn = "o";
        grid[index] = "x";
        document.getElementById(id).style.color = "#14BDAC";
      }
      else{
        document.getElementById(id).innerHTML = o;
        document.getElementById(id).style.color = "#CDD6EB";
        document.getElementById(id).style.fontWeight = "bold";
        turn = "x";
        grid[index] = "o";
      }
      
      checkWin();
    }
  }
    
    function checkWin(){
      if((grid[0] !== "" && grid[0] === grid[1] && grid[1] === grid[2]) ||
         (grid[3] !== "" && grid[3] === grid[4] && grid[4] === grid[5]) ||
         (grid[6] !== "" && grid[6] === grid[7] && grid[7] === grid[8]) ||
         (grid[0] !== "" && grid[0] === grid[3] && grid[3] === grid[6]) ||
         (grid[1] !== "" && grid[1] === grid[4] && grid[4] === grid[8]) ||
         (grid[2] !== "" && grid[2] === grid[5] && grid[5] === grid[8]) ||
         (grid[0] !== "" && grid[0] === grid[4] && grid[4] === grid[8]) ||
         (grid[2] !== "" && grid[2] === grid[4] && grid[4] === grid[6])
        ){
           document.getElementById("footer").innerHTML = "Winner!";
      }
    }
    
    function clearGrid(){
      grid = ["", "", "", "", "", "", "", "", ""];
    }
}