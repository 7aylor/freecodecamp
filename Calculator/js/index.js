//configure number of digits using mathjs
math.config({
  number: 'BigNumber',
  precision: 6
});

//let document load before doing anything
$(document).ready(function() {

  //string displayed on screen
  var screenNum = "";
  
  //string used to calculate the answer, uses / and * instead of symbols for those
  var mathExpression = "";
  
  //used to display the expression on the screen, uses special characters for / and *
  var smallScreenExpression = "";
  
  //used for the total of hte expression
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

  //button click functionality for the operators +, -, *, /
  clickOperator("#divide", decodeURI("%C3%B7"));
  clickOperator("#times", decodeURI("%C3%97"));
  clickOperator("#minus", "-");
  clickOperator("#plus", "+");

  //button click functionality for equals
  clickEquals();

  //clears the main variables we used=
  function clearVars() {
    screenNum = "";
    mathExpression = "";
    smallScreenExpression = "";
  }

  //click zero functionality
  $("#zero").click(function() {
    //check if the screen has overflowed
    if(checkScreenLengths()){}
    //put zero on the screen, but not if the number on screen is 0 already
    else{
      if (screenNum !== "") {
        screenNum += "0";
        mathExpression += "0";
        smallScreenExpression += "0";
        writeToScreens(screenNum, smallScreenExpression);
      }
    }
  });

  //click decimal point functionality
  $("#dot").click(function() {
    //check for overflow
    if(checkScreenLengths()){}
    //if no overflow, add . to the screen, but only once and always lead with a zero its the only num on screen
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
    //clear out variables and write 0 just to the big screen
    clearVars();
    total = null;
    writeToScreens("0", "");
  });

  //click clear entry functionality
  $("#ce").click(function() {
    //if there is an operator in our expression string, only remove the most recent num and operator
    if (mathExpression.includes("+") || 
        mathExpression.includes("-") ||
        mathExpression.includes("*") ||
        mathExpression.includes("/")) {
      
      //used to get the last operator in the expression string
      var lastIndex = 0;
      
      //loop through the expression and find the last operator
      for(var i = mathExpression.length - 1; i >= 0; i--){
        //if the string in position i is not a number, we have found the operator so exit the loop
        if(isNaN(Number(mathExpression[i]))){
          lastIndex = i;
          break;
        }
      }
      
      //remove the number and operator from the end of both of our expression strings
      mathExpression = mathExpression.slice(0, lastIndex);
      smallScreenExpression = smallScreenExpression.slice(0, lastIndex);
      
      //reset out screen number
      screenNum = "";
    }
    //if there is no operators left, clear the entire screen
    else {
      clearVars();
      total = null;
    }
    
    //write to the screen after processing
    writeToScreens("0", smallScreenExpression);
  });

  //when a number button is clicked, display it, or print error if screenNum is too long
  function clickNum(selector, value) {
    $(selector).click(function() {
      //check if the screen has overflowed
      if (checkScreenLengths()){
      } 
      //if no overflow
      else {
        //clear total since we shouldn't have a total once a number is clicked
        if(total !== null){
          total = null;
        }
        
        //add the number to each of our strings
        screenNum += value;
        mathExpression += value;
        smallScreenExpression += value;
        
        //write the the new number to the screen
        writeToScreens(screenNum, smallScreenExpression);
      }
    });
  }

  //when equals is clicked
  function clickEquals() {
    $("#equals").click(function() {
      //if the last digit is an operator, do nothing
      if (lastDigitIsOperator()) {
        
        //evaluates mathExpression string using mathjs library
        total = math.eval(mathExpression);
        //check for overflow
        if(checkScreenLengths()){}
        else{
          //write to the screen with the new total
          writeToScreens(total, smallScreenExpression);  
        }
        //clear our variables
        clearVars();
      }

    });
  }

  //operator click functionality
  function clickOperator(selector, operator) {
    $(selector).click(function() {
      //check for overflow
      if(checkScreenLengths()){
      }
      else{
        //if we have a total, add the total to our expressions as a starting number
        if(total !== null){
          mathExpression += total;
          smallScreenExpression += total;
          
          //then clear total
          total = null;
        }
        //make sure the last digit was an operator, then add that operator to our expressions
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
          
          //write the operator and new expression to the screen and clear screenNum
          writeToScreens(operator, smallScreenExpression);
          screenNum = "";
        }
      }
    });
  }

  //helper function to write to the screen
  function writeToScreens(bigScreen, smallScreen) {
    $("#screen").text(bigScreen);
    $("#small-screen").text(smallScreen);
  }
  //helper function to check for overflow on both screens
  function checkScreenLengths(){
    if (screenNum.length > 7 || smallScreenExpression.length > 15) {
        //if there is overflow, clear the vars, write to the screen that we have met a limit and return true
        clearVars();
        writeToScreens("0", "digit limit met");
        return true;
    }
    else{
      return false;
    }
  }

  //helper function to check if the last digit in a string is an operator and the string is not null
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