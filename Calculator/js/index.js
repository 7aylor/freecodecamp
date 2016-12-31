$(document).ready(function(){

  //string displayed on screen
  var screenNum = "";
  
  //numbers used for arithmetic
  var num1 = "";
  var num2 = "";
  var result = "";
  
  //store the operator being used
  var operator = "";
  
  //function to clear number values
  function clearVars(){
    num1 = "";
    num2 = "";
    result = "";
    screenNum = "";
    operator = "";
  }
  
  //button click functionality for numbers
  clickNum(  "#one", "1");
  clickNum(  "#two", "2");
  clickNum("#three", "3");
  clickNum( "#four", "4");
  clickNum( "#five", "5");
  clickNum(  "#six", "6");
  clickNum("#seven", "7");
  clickNum("#eight", "8");
  clickNum( "#nine", "9");
  
  clickOperator("#divide", decodeURI("%C3%B7"));
  clickOperator("#times", decodeURI("%C3%97"));
  clickOperator("#minus", "-");
  clickOperator("#plus", "+");
  
  clickEquals();
  
  //change colors of buttons on press
  changeButtonColorOnPress(".number", "#353535", "#5F5F5F");
  changeButtonColorOnPress(".symbol", "#5F5F5F", "#353535");
  changeButtonColorOnPress( ".clear", "#ff4d4d", "#D1424E");

  //click zero functionality
  $("#zero").click(function(){
    if(!screenNum == ""){
      screenNum += "0";
      checkLength();
    }
  });
  
  //click decimal point functionality
  $("#dot").click(function(){
    if(!screenNum.includes(".")){
      if(screenNum == "" || screenNum == "0"){
        screenNum = "0";
      }
      screenNum += ".";
      $("#screen").text(screenNum);
    }
  });
  
  //click all clear functionality
  $("#ac").click(function(){
    clearVars();
    $("#screen").text("0");
    $("#small-screen").text("");
  });
  
  //click clear entry functionality
  $("#ce").click(function(){
    if(operator !== ""){
      num2 = "";
      screenNum = "";
    }
    else{
      clearVars();
    }
    $("#screen").text("0");
  });
  
  //when a number button is clicked, display it, or print error if screenNum is too long
  function clickNum(selector, value){
    console.log("Number clicked");
    $(selector).click(function(){
      screenNum += value;
      checkLength();
    });
  }
  
  //operator click functionality
  function clickOperator(selector, value){
    $(selector).click(function(){
      console.log("Operator clicked");
      if(num2 === "" && num1 === ""){
        operator = value;
        num1 = Number(screenNum);
        if(screenNum === ""){
          screenNum = "0 " + operator;
        }
        else{
          screenNum = screenNum + " " + operator; 
        }
        $("#small-screen").text(screenNum);
        screenNum = "";  
      }
      else{
        operator = value;
        num2 = Number(screenNum);
        clickEquals();
        screenNum = result + " " + operator;
        $("#small-screen").text(screenNum);
        num1 = result;
        num2 = "";
        screenNum = "";
      }
    });
  }

  //when equals is clicked
  function clickEquals(){
    
    $("#equals").click(function(){
      if(num2 === ""){
        num2 = Number(screenNum);
      }
      console.log(operator);
      console.log("Num1: " + num1);
      console.log("Num2: " + num2);
      if(operator === decodeURI("%C3%B7")){
        result = num1 / num2;
      }
      if(operator === decodeURI("%C3%97")){
        result = num1 * num2;
      }
      if(operator === "-"){
        result = num1 - num2;
      }
      if(operator === "+"){
        result = num1 + num2; 
      }
      console.log(result);
      $("#screen").text(result);
      $("#small-screen").text(num1 + " " + operator + " " + num2);
      clearVars();
    });
  }
  

  //check the length of screenNum, print error if its too long
  function checkLength(){
    if(screenNum.length > 7){
      screenNum = "";
      $("#screen").text("ERROR");
    }
    else{
      $("#screen").text(screenNum);
    }
  }
  
  //when a button is pressed, change the color. When its release, change back
  function changeButtonColorOnPress(className, downColor, upColor){
    $(className)
    .mousedown(function(){
      $(this).css("background-color", downColor);
    })
    .mouseup(function(){
      $(this).css("background-color", upColor);
    });
  }
});