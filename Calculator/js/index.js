$(document).ready(function(){

  //string displayed on screen
  var screenNum = "";
  var mathExpression = "";
  var smallScreenExpression = "";
  
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

  function clearVars(){
    screenNum = "";
    mathExpression = "";
    smallScreenExpression = "";
  }
  
  //click zero functionality
  $("#zero").click(function(){
    if(screenNum !== ""){
      screenNum += 0;
      checkLength();
    }
  });
  
  //click decimal point functionality
  $("#dot").click(function(){
    if(!screenNum.includes(".")){
      if(screenNum == "" || screenNum == "0"){
        screenNum = "0";
        mathExpression += "0";
        smallScreenExpression += "0";
      }
      screenNum += ".";
      mathExpression += ".";
      smallScreenExpression += ".";
      writeToScreens(screenNum, smallScreenExpression);
    }
  });
  
  //click all clear functionality
  $("#ac").click(function(){
    clearVars();
    writeToScreens("0", "");
  });
  
  //click clear entry functionality
  $("#ce").click(function(){
    if(mathExpression[mathExpress.length - 1] !== ""){
      screenNum = "";
    }
    else{
      clearVars();
    }
    
    $("#screen").text("0");
  });
  
  //when a number button is clicked, display it, or print error if screenNum is too long
  function clickNum(selector, value){
    $(selector).click(function(){
      if(screenNum.length > 7){
        clearVars();
        writeToScreens("0", "digit limit met");
      }
      else{
        screenNum += value;
        mathExpression += value;
        smallScreenExpression += value;
        writeToScreens(screenNum, smallScreenExpression);
      }
    });
  }
  
  
  //when equals is clicked
  function clickEquals(){
    
    $("#equals").click(function(){
      
      
    });
  }
  
  //operator click functionality
  function clickOperator(selector, operator){
    $(selector).click(function(){
      if(mathExpression[mathExpression.length - 1] !== "+" &&
         mathExpression[mathExpression.length - 1] !== "-" &&
         mathExpression[mathExpression.length - 1] !== "*" &&
         mathExpression[mathExpression.length - 1] !== "/" &&
         mathExpression !== ""){
        
        if(operator === decodeURI("%C3%B7")){
          mathExpression += "/";
          smallScreenExpression += decodeURI("%C3%B7");
        }
        if(operator === decodeURI("%C3%97")){
          mathExpression += "*";
          smallScreenExpression += decodeURI("%C3%97");
        }
        if(operator === "-"){
          mathExpression += "-";
          smallScreenExpression += "-";
        }
        if(operator === "+"){
          mathExpression += "+";
          smallScreenExpression += "+";
        }
        writeToScreens(operator, smallScreenExpression);
        screenNum = "";
      }
    });
  }  

 /* 
 
  //change colors of buttons on press
  changeButtonColorOnPress(".number", "#353535", "#5F5F5F");
  changeButtonColorOnPress(".symbol", "#5F5F5F", "#353535");
  changeButtonColorOnPress( ".clear", "#ff4d4d", "#D1424E");
  
  //when a button is pressed, change the color. When its release, change back
  function changeButtonColorOnPress(className, downColor, upColor){
    $(className)
    .mousedown(function(){
      $(this).css("background-color", downColor);
    })
    .mouseup(function(){
      $(this).css("background-color", upColor);
    })
    .mouseout(function(){
      $(this).css("background-color", upColor);
    });
  }
*/
  
  function writeToScreens(bigScreen, smallScreen){
    $("#screen").text(bigScreen);
    $("#small-screen").text(smallScreen);
  }

  function lastDigitIsOperator(){
    if(mathExpression[mathExpression.length - 1] === "+" ||
           mathExpression[mathExpression.length - 1] === "-" ||
           mathExpression[mathExpression.length - 1] === decodeURI("%C3%97") ||
           mathExpression[mathExpression.length - 1] === decodeURI("%C3%B7")){
      return true
    }
    else{
      return false;
    }
  }
  
});