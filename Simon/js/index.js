//state of the game, ie on or off
var state = "off";

//strict mode of play, no replay of losing move after losing
var strictMode = "off";

var playCount = 0;

var buttons = [
  {color: 'red', sound: 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3',
  buttonId: '#red-btn'},
  {color: 'green', sound: 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3',
  buttonId: '#green-btn'},
  {color: 'yellow', sound: 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3',
  buttonId: '#yellow-btn'},
  {color: 'blue', sound: 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3',
  buttonId: '#blue-btn'}
];

var buttonOrder = [];

$(document).ready(function(){
  
  //by clicking the switch to, turn the game on or off
  $("#switch-btn").click(function(){
    
    //if off, set state to on, animate switch to on, and call gameOn()
    if(state === "off"){
      state = "on";
      $("#switch-btn").animate({left: '+=1.5em'});
      buttons.forEach(function(btn){
        $(btn.buttonId).css("opacity", "0.8");
      })
      gameOn();
    }
    //if on, set state to off, animate switch to off, and call gameOff()
    else{
      state = "off";
      $("#switch-btn").animate({left: '-=1.5em'});
      buttons.forEach(function(btn){
        $(btn.buttonId).css("opacity", "0.5");
      })
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
      playGame();
    });
    
  }//end of gameOn
  
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
    playCount = 0;
  }//end of gameOff
  
  function playGame(){
    var lost = false;
    while(lost !== true && playCount <= 1){
      var btnChoice = Math.floor((Math.random() * 4));
    
      //btnChoice = 0;
      if(btnChoice === 0){
        buttonOrder.push(buttons[0]);
      }
      else if(btnChoice === 1){
        buttonOrder.push(buttons[1]);
      }
      else if(btnChoice === 2){
        buttonOrder.push(buttons[2]);
      }
      else if(btnChoice === 3){
        buttonOrder.push(buttons[3]);
      }
      
      playCount++;
      playButtonOrder();
    }
  }//end of playGame
  
  function playButtonOrder(){

    var currItem = 0;
    var interval;
    //////lots of work needed here on timing
    for(var i = 0; i < buttonOrder.length; i++){
      var currSound = new Audio(buttonOrder[i].sound);
        currSound.playbackRate = 0.5;
        currSound.play();
      
      $(buttonOrder[i].buttonId).css("opacity", "1");
      
      setTimeout(function(){
        
        $(buttonOrder[i].buttonId).css("opacity", "0.8");
        
      }, 1000);
      
    }

  }//end of playButtonOrder

  
});