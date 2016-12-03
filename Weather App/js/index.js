var url = "http://api.openweathermap.org/data/2.5/weather?"
const API_KEY = "&appid=e76968a3086bb53d9a54f6c1b0fb8739"

$(function() {
  //get coordinates from ipinfo
  $.getJSON('http://ipinfo.io', function(data) {
    var coords = data.loc;
    var lat = coords.substr(0, coords.indexOf(','));
    var long = coords.substr(coords.indexOf(',') + 1, coords.length);
    
    //build our url
    url += "lat=" + lat + "&lon=" + long + "&appid" + API_KEY + "&units=imperial";
    
    //then get the JSON and parse it to use in the webpage
    $.getJSON(url, function(wd){
      console.log(wd);
      $('#loc').html(wd.main.temp);
    });
  });
});