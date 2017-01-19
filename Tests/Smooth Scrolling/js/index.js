$("document").ready(function(){
  $("#top-btn").click(function(){
    $("html, body").animate({
      scrollTop: $("#middle").offset().top
    }, 1000);
  });
  $("#mid-btn").click(function(){
    $("html, body").animate({
      scrollTop: $("#bottom").offset().top
    }, 1000);
  });
  $("#bot-btn").click(function(){
    $("html, body").animate({
      scrollTop: $("body").offset().top
    }, 2000);
  });
});