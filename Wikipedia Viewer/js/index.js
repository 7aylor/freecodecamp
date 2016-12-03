var userInput = "";
const url = "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&callback=?&titles=";
var buildUrl = url;
$('#searchbtn').click(function() {
  userInput = $('#searchbox').val();
  userInput = userInput.replace(/\s/g, '%20');
  buildUrl = url;
  buildUrl += userInput;
  console.log(buildUrl);
  $.getJSON(buildUrl, function(wd){
    $('results').html(wd.query);
  });
  
});

/*
$('#searchbox').keypress(function (e) {
  if (e.which == 13) {
    userInput = $('#searchbox').val();
  userInput = userInput.replace(/\s/g, '%20');
  buildUrl = url;
  buildUrl += userInput;
  console.log(buildUrl);
  $.getJSON(buildUrl, function(wd){
    $('results').html(wd.query);
  });
    return false;    //<---- Add this line
  }
});
*/