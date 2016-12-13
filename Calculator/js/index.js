var screenNum = "";


$("#one").click(function(){
  screenNum += "1";
  $("#screen").text(screenNum);
});
$("#two").click(function(){
  screenNum += "2";
  $("#screen").text(screenNum);
});
$("#three").click(function(){
  screenNum += "3";
  $("#screen").text(screenNum);
});
$("#four").click(function(){
  screenNum += "4";
  $("#screen").text(screenNum);
});
$("#five").click(function(){
  screenNum += "5";
  $("#screen").text(screenNum);
});
$("#six").click(function(){
  screenNum += "6";
  $("#screen").text(screenNum);
});
$("#seven").click(function(){
  screenNum += "7";
  $("#screen").text(screenNum);
});
$("#eight").click(function(){
  screenNum += "8";
  $("#screen").text(screenNum);
});
$("#nine").click(function(){
  screenNum += "9";
  $("#screen").text(screenNum);
});
$("#zero").click(function(){
  screenNum += "0";
  $("#screen").text(screenNum);
});
$("#dot").click(function(){
  screenNum += ".";
  $("#screen").text(screenNum);
});

$(".number")
  .mousedown(function(){
    $(this).css("background-color", "#353535");
  })
  .mouseup(function(){
    $(this).css("background-color", "#5F5F5F");
  });

$(".symbol")
  .mousedown(function(){
    $(this).css("background-color", "#5F5F5F");
  })
  .mouseup(function(){
    $(this).css("background-color", "#353535");
  });

$(".clear")
  .mousedown(function(){
    $(this).css("background-color", "#ff4d4d");
  })
  .mouseup(function(){
    $(this).css("background-color", "#D1424E");
  });