math.config({
  number: 'BigNumber',
  precision: 7
});

$(document).ready(function() {

  //string displayed on screen
  var screenNum = "";
  var mathExpression = "";
  var smallScreenExpression = "";
  var total = null;

  //button click functionality for numbers
  clickNum("#one", "1");
  clickNum("#two", "2");
  clickNum("#three", "3");
  clickNum("#four", "4");
  clickNum("#five", "5");
  clickNum("#six", "6");
  clickNum("#seven", "7");
  clickNum("#eight", "8");
  clickNum("#nine", "9");

  clickOperator("#divide", decodeURI("%C3%B7"));
  clickOperator("#times", decodeURI("%C3%97"));
  clickOperator("#minus", "-");
  clickOperator("#plus", "+");

  clickEquals();

  function clearVars() {
    screenNum = "";
    mathExpression = "";
    smallScreenExpression = "";
  }

  //click zero functionality
  $("#zero").click(function() {
    if(checkScreenLengths()){}
    else{
      if (screenNum !== "") {
        screenNum += 0;
      }
    }
  });

  //click decimal point functionality
  $("#dot").click(function() {
    if(checkScreenLengths()){}
    else{
      if (!screenNum.includes(".")) {
        if (screenNum == "" || screenNum == "0") {
          screenNum = "0";
          mathExpression += "0";
          smallScreenExpression += "0";
        }
        screenNum += ".";
        mathExpression += ".";
        smallScreenExpression += ".";
        writeToScreens(screenNum, smallScreenExpression);
      }
    }
  });

  //click all clear functionality
  $("#ac").click(function() {
    clearVars();
    writeToScreens("0", "");
  });

  //click clear entry functionality
  $("#ce").click(function() {
    if (mathExpression.includes("+") || 
        mathExpression.includes("-") ||
        mathExpression.includes("*") ||
        mathExpression.includes("/")) {
      
      var lastIndex = 0;
      
      for(var i = mathExpression.length - 1; i >= 0; i--){
        if(isNaN(Number(mathExpression[i]))){
          console.log(i);
          lastIndex = i;
          break;
        }
      }

      console.log("before: " + smallScreenExpression);
      mathExpression = mathExpression.slice(0, lastIndex);
      smallScreenExpression = smallScreenExpression.slice(0, lastIndex);
      console.log(mathExpression);
      console.log(smallScreenExpression);
      screenNum = "";
    } else {
      clearVars();
    }

    writeToScreens("0", smallScreenExpression);
  });

  //when a number button is clicked, display it, or print error if screenNum is too long
  function clickNum(selector, value) {
    $(selector).click(function() {
      if (checkScreenLengths()){
      } else {
        screenNum += value;
        mathExpression += value;
        smallScreenExpression += value;
        writeToScreens(screenNum, smallScreenExpression);
      }
    });
  }

  //when equals is clicked
  function clickEquals() {
    $("#equals").click(function() {
      if (lastDigitIsOperator()) {
        //evaluetes mathExpress string using mathjs library
        total = math.eval(mathExpression);
        var endString = smallScreenExpression + "=" + total;
        if(checkScreenLengths()){}
        else{
          writeToScreens(total, smallScreenExpression);  
        }
        clearVars();
        
      }

    });
  }

  //operator click functionality
  function clickOperator(selector, operator) {
    $(selector).click(function() {
      if(checkScreenLengths()){
      }
        else{
        if (lastDigitIsOperator()) {

          if (operator === decodeURI("%C3%B7")) {
            mathExpression += "/";
            smallScreenExpression += decodeURI("%C3%B7");
          }
          if (operator === decodeURI("%C3%97")) {
            mathExpression += "*";
            smallScreenExpression += decodeURI("%C3%97");
          }
          if (operator === "-") {
            mathExpression += "-";
            smallScreenExpression += "-";
          }
          if (operator === "+") {
            mathExpression += "+";
            smallScreenExpression += "+";
          }
          writeToScreens(operator, smallScreenExpression);
          screenNum = "";
        }
      }
    });
  }

  function writeToScreens(bigScreen, smallScreen) {
    $("#screen").text(bigScreen);
    $("#small-screen").text(smallScreen);
  }
  
  function checkScreenLengths(){
    if (screenNum.length > 7 || smallScreenExpression.length > 15) {
        clearVars();
        writeToScreens("0", "digit limit met");
        return true;
    }
    else{
      return false;
    }
  }

  function lastDigitIsOperator() {
    if (mathExpression[mathExpression.length - 1] !== "+" &&
      mathExpression[mathExpression.length - 1] !== "-" &&
      mathExpression[mathExpression.length - 1] !== "*" &&
      mathExpression[mathExpression.length - 1] !== "/" &&
      mathExpression !== "") {
      return true
    } else {
      return false;
    }
  }

});