//variables for timer
var totalMinutes = 25;
var chosenMinutes = totalMinutes;
var totalSeconds = totalMinutes * 60;
var displaySeconds = "00";
var start = "Start";
var interval;

//used for the alarm sound
var alarmString = "http://res.cloudinary.com/buchheitt/video/upload/v1484605417/AlarmSound.mp3";
var alarm = new Audio(alarmString);

  //create progress bar around circle using progressbar.js
  var bar = new ProgressBar.Circle(clock, {
  strokeWidth: 6,
  color: '#eee',
  trailColor: '#1F2021',
  trailWidth: 2,
  svgStyle: null
  });


$(document).ready(function(){
  
  //when doc loads, initialize numbers
  setInitNums();
  
  //adding a second to the session length
  $("#add-session").click(function(){
    $("#reset").trigger("click");
    displaySeconds = "00";
    totalMinutes++;
    chosenMinutes = totalMinutes;
    setInitNums();
  });
  
  //subrtracting a second from the session length
  $("#subtract-session").click(function(){
    $("#reset").trigger("click");
    displaySeconds = "00";
    if(totalMinutes > 1){
      totalMinutes--;
      chosenMinutes = totalMinutes;
    }
    setInitNums();
  });
  
  //when the start is clicked
  $("#start").click(function(){
    
    //if text is start, begin timer and progress bar, button text set to stop
    if(start == "Start"){
      bar.animate(1, {
        duration: totalSeconds * 1000
      });
      start = "Stop";
      $("#start").toggleClass("stop");
      $("#start").toggleClass("start");
      if(totalSeconds > 0){
        interval = setInterval(startTimer, 1000);
      }
    }
    //otherwise, stop timer and set button text to start
    else{
      bar.stop();
      start = "Start";
      $("#start").toggleClass("stop");
      $("#start").toggleClass("start");
      clearInterval(interval);
    }
    $("#start").text(start);
  });
  
  //reset timer, button, and progress
  $("#reset").click(function(){
    start = "Start";
    $("#start").removeClass("stop start");
    $("#start").addClass("start");
    clearInterval(interval);
    bar.set(0);
    totalMinutes = chosenMinutes;
    displaySeconds = "00";
    setInitNums();
  });
  
});

//timeer for clock
function startTimer(){

  //if we are at zero, reset button
  if(totalSeconds === 0){
    clearInterval(interval);
    start = "Start";
    $("#start").toggleClass("stop");
    $("#start").toggleClass("start");
    $("#start").text(start);
    totalMinutes = chosenMinutes;
    totalSeconds = totalMinutes * 60;
    alarm.play();
    bar.set(0);
    return;
  }
  //subtract a second from totalSeconds
  totalSeconds--;
  
  //get remainder of totalSeconds / 60
  var remainder = totalSeconds % 60;

  //if we are at a 59 second mark, subtract a minute
  if(remainder === 59){
    totalMinutes--;
  }

  //if remainder is less than 10, add a 0 to the front of the remainder
  if(remainder < 10){
    displaySeconds = "0" + remainder;
  }
  //otherwise, use the remainder
  else{
    displaySeconds = remainder;
  }
  //update our clock
  $("#time-remaining").text(totalMinutes + ":" + displaySeconds);
}

//sets the initial numbers
function setInitNums(){
  $("#sessionnum").text(totalMinutes);
  $("#time-remaining").text(totalMinutes + ":" + displaySeconds);
  $("#start").text(start);
  totalSeconds = totalMinutes * 60;
}