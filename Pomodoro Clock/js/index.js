//minutes used for clock
var totalMinutes = 25;
var breakLength = 5;
var totalSeconds = totalMinutes * 60;
var displaySeconds = "00";
var play = "Start";

$(document).ready(function(){
  setInitNums();
  
  $("#add-break").click(function(){
    breakLength++;
    setInitNums();
  });
  
  $("#subtract-break").click(function(){
    if(breakLength > 1){
      breakLength--;  
    }    
    setInitNums();
  });
  
    $("#add-session").click(function(){
    totalMinutes++;
    setInitNums();
  });
  
  $("#subtract-session").click(function(){
    if(totalMinutes > 1){
      totalMinutes--;  
    }    
    setInitNums();
  });
  
  /*
  if(totalSeconds > 0){
    setInterval(startTimer, 1000);
  }
  
  */
  
});

//timeer for clock
function startTimer(){
  //get remainder of totalSeconds / 60
  var remainder = totalSeconds % 60;
  
  //subtract a second from totalSeconds
  totalSeconds--;
  
  //if we are at a 59 second mark, subtract a minute
  if(remainder === 59){
    totalMinutes--;
  }
  
  //if remainder is less than 10, add a 0 to the front of the remainder
  if(remainder < 10){
    displaySeconds = "0" + remainder
  }
  //otherwise, use the remainder
  else{
    displaySeconds = remainder;
  }
  
  //update our clock
  $("#time-remaining").text(totalMinutes + ":" + displaySeconds);
}

function setInitNums(){
  $("#sessionnum").text(totalMinutes);
  $("#breaknum").text(breakLength);
  $("#time-remaining").text(totalMinutes + ":" + displaySeconds);
  totalSeconds = totalMinutes * 60;
}