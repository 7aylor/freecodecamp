var totalMinutes = 25;
var totalSeconds = totalMinutes * 60;
var displaySeconds = "00";

$(document).ready(function(){
  startTimer();
  function startTimer(){
    while(totalSeconds > 0){
      $("#time-remaining").text(totalMinutes + ":" + displaySeconds);
      setInterval(1000);
      console.log(totalSeconds);
      totalSeconds--;
      totalMinutes--;
    }
  }
  
});