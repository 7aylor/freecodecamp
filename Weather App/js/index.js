var url = "http://api.openweathermap.org/data/2.5/weather?"
const API_KEY = "&appid=e76968a3086bb53d9a54f6c1b0fb8739"

$(document).ready(function() {
  //get coordinates from ipinfo
  $.getJSON('http://ipinfo.io', function(data) {
    var coords = data.loc;
    var lat = coords.substr(0, coords.indexOf(','));
    var long = coords.substr(coords.indexOf(',') + 1, coords.length);
    var units = "Fahrenheit";
    var icon = "http://openweathermap.org/img/w/"
    //build our url
    url += "lat=" + lat + "&lon=" + long + "&appid" + API_KEY + "&units=imperial";

    //then get the JSON and parse it to use in the webpage
    $.getJSON(url, function(wd) {
      var fahr = wd.main.temp;
      var cels = Math.round((fahr - 32) * (5/9), 2);
      icon += wd.weather[0].icon + ".png";
      $('#city').html(wd.name + ', ' + wd.sys.country);
      $('#temp').html(fahr + "&deg " + units);
      $('#btn').html("Celsius");
      
      $('#btn').click(function(){
        if(units === "Fahrenheit"){
          $('#btn').html("Fahrenheit");
          $('#temp').html(cels + "&deg Celsius");
          units = "Celsius";
        }
        else{
          $('#btn').html("Celsius");
          $('#temp').html(fahr + "&deg Fahrenheit");
          units = "Fahrenheit";
        }
        
      });
      
      $('#type').html(wd.weather[0].main);
      $('#icon').html('<img src=' + icon + ' />');
    });
  });
});