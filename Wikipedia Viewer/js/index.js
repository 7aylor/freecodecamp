//our base url
const url = "https://en.wikipedia.org/w/api.php?action=opensearch&prop=revisions&rvprop=content&format=json&callback=?&search=";
var buildUrl = url;

//when enter is pressed
$('#searchbox').keypress(function (e) {
  if (e.which == 13) {
    
    //prevents page from going blank
    e.preventDefault();
    
    //get userinput
    userInput = $('#searchbox').val();

    //replace spaces with %20 so url loads properly
    userInput = userInput.replace(/\s/g, '%20');

    //clears url in case multiple searches are performed
    buildUrl = url;
    buildUrl += userInput;
    
    //gets the JSON from the link and builds the list items from the JSON
    $.getJSON(buildUrl, function(data){
      var searchResultsNames = data[1];
      var searchResultsDetails = data[2];
      var searchResultsUrl = data[3];
      $("#results ul").empty();
      for(var i = 0; i < searchResultsNames.length; i++){
        $('#results ul').append("<a href=\"" + searchResultsUrl[i] + "\"  target=\"_blank\"><li><h3>" + searchResultsNames[i] + "</h3><p>" + searchResultsDetails[i] + "</li></a>");
      }
    });
  }
});