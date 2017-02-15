//state of the game, ie on or off
var state = "off";

//strict mode of play, no replay of losing move after losing
var strictMode = "off";

var playCount = 0;

var lost = false;

var buttonOrder = [];

$(document).ready(function(){
  
  //by clicking the switch to, turn the game on or off
  $("#switch-btn").click(function(){
    
    //if off, set state to on, animate switch to on, and call gameOn()
    if(state === "off"){
      state = "on";
      $("#switch-btn").animate({left: '+=1.5em'});
      $("#green-btn").css("opacity", "0.75");
      $("#red-btn").css("opacity", "0.75");
      $("#yellow-btn").css("opacity", "0.75");
      $("#blue-btn").css("opacity", "0.75");
      gameOn();
    }
    //if on, set state to off, animate switch to off, and call gameOff()
    else{
      state = "off";
      $("#switch-btn").animate({left: '-=1.5em'});
      $("#green-btn").css("opacity", "0.5");
      $("#red-btn").css("opacity", "0.5");
      $("#yellow-btn").css("opacity", "0.5");
      $("#blue-btn").css("opacity", "0.5");
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
    
    $("#start-btn").click(function(){
      $("#count").text("00");
      playGame();
    });
    
  }//end of gameOn
  
  //Sets the settings back to default when off
  function gameOff(){
    $("#count").css("color", "black").text("--");
    $("#start-btn").css("cursor", "auto");
    $("#strict-btn").css("cursor", "auto");
    $("#green-btn").css("cursor", "auto");
    $("#red-btn").css("cursor", "auto");
    $("#yellow-btn").css("cursor", "auto");
    $("#blue-btn").css("cursor", "auto");
    $("#strict-light-inner").css("background-color","#32050C");
    playCount = 0;
  }//end of gameOff
  
  function playGame(){
    (function gameLoop(numTurns){
      computerPlay();
      //playButtonOrder();
      //playerPlay();
      //checkTurn();
      
      if(numTurns < 20 && lost !== true){
        gameLoop(playCount);
      }
      
    })(playCount);

  }//end of playGame
  
  function playButtonOrder(){
    console.log("buttonOrder length: " + buttonOrder.length);
    
    //////lots of work needed here on timing
      (function playButtonOrder (i) {
        
        setTimeout(function (i) {
          playSound(buttonOrder[i]);
          if (i < buttonOrder.length) {
            playButtonOrder(i);
          }
        }, 1000);
        
      })(0);

  }//end of playButtonOrder

  function computerPlay(){
    var btnChoice = Math.floor((Math.random() * 4));

    console.log(btnChoice);
    if(btnChoice === 0){
      buttonOrder.push("red");
    }
    else if(btnChoice === 1){
      buttonOrder.push("green");
    }
    else if(btnChoice === 2){
      buttonOrder.push("yellow");
    }
    else if(btnChoice === 3){
      buttonOrder.push("blue");
    }
    
    playCount++;
    
    if(playCount < 10){
      $("#count").text("0" + playCount);
    }
    else{
      $("#count").text(playCount);
    }
  }//end of computerPlay
  
  function playSound(btnChoice){
    var currSound;

    if(btnChoice === "red"){
      currSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
    }
    else if(btnChoice === "green"){
      currSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
    }
    else if(btnChoice === "yellow"){
      currSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
    }
    else if(btnChoice === "blue"){
      currSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
    }
    currSound.playbackRate = 0.5;
    currSound.play();
    currSound = null;
  }
  
});