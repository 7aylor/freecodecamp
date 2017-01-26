var o = "&#9675";
var x = "&times";
var team;

window.onload = function(){
  
  document.getElementById("x").onclick = function() {teamChoiceClicked("x")};
  document.getElementById("o").onclick = function() {teamChoiceClicked("o")};
  
  //set the team and hide choice screen, show tic tac toe board
  function teamChoiceClicked(choice){
    team = choice;
    document.getElementById("player-choice").style.display = "none";
    document.getElementById("container").style.display = "block";
  }

}