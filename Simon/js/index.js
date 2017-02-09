var state = "off";
var strictMode = "off";

var soundUrls = [
  'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3',
  'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3',
  'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3', 
  'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'
];


$(document).ready(function(){
  
  //by clicking the switch to, turn the game on or off
  $("#switch-btn").click(function(){
    
    //if off, set state to on, animate switch to on, and call gameOn()
    if(state === "off"){
      state = "on";
      $("#switch-btn").animate({left: '+=1.5em'});
      gameOn();
    }
    //if on, set state to off, animate switch to off, and call gameOff()
    else{
      state = "off";
      $("#switch-btn").animate({left: '-=1.5em'});
      gameOff();
    }
  });
  
  //controls flow of the game when on
  function gameOn(){
    $("#count").css("color", "red");
    $("#start-btn").css("cursor", "pointer");
    $("#strict-btn").css("cursor", "pointer");
    $("#green-btn").css("cursor", "pointer");
    $("#red-btn").css("cursor", "pointer");
    $("#yellow-btn").css("cursor", "pointer");
    $("#blue-btn").css("cursor", "pointer");
    
    $("#strict-btn").click(function(){
      if(strictMode === "off"){
        strictMode = "on";
        $("#strict-light-inner").css("background-color","red");
      }
      else{
        strictMode = "off";
        $("#strict-light-inner").css("background-color","#32050C");
      }
    });
  }
  
  //Sets the settings back to default when off
  function gameOff(){
    $("#count").css("color", "black").text("- -");
    $("#start-btn").css("cursor", "auto");
    $("#strict-btn").css("cursor", "auto");
    $("#green-btn").css("cursor", "auto");
    $("#red-btn").css("cursor", "auto");
    $("#yellow-btn").css("cursor", "auto");
    $("#blue-btn").css("cursor", "auto");
    $("#strict-light-inner").css("background-color","#32050C");
  }
});