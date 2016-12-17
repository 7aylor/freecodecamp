var userInput = "";
const url = "https://en.wikipedia.org/w/api.php?action=opensearch&prop=revisions&rvprop=content&format=json&callback=?&search=";
var buildUrl = url;

$('#searchbox').keypress(function (e) {
  if (e.which == 13) {
    e.preventDefault();
    //get userinput
    userInput = $('#searchbox').val();

    //replace spaces with %20 so url loads properly
    userInput = userInput.replace(/\s/g, '%20');

    //clears url in case multiple searches are performed
    buildUrl = url;
    buildUrl += userInput;

    $.getJSON(buildUrl, function(data){
      var searchResultsNames = data[1];
      var searchResultsDetails = data[2];
      var searchResultsURL = data[3];
      $("#results ul").empty();
      for(var i = 0; i < searchResultsNames.length; i++){
        $('#results ul').append("<a href=\"" + searchResultsURL[i] + "\"  target=\"_blank\"><li><h3>" + searchResultsNames[i] + "</h3><p>" + searchResultsDetails[i] + "</li></a>");
      }

    });
  }
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