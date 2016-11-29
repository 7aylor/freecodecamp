var lat = navigator.geolocation.getCurrentPosition(getLat);

function getLat(pos){
  return pos.coords.latitude;
}

var long = navigator.geolocation.getCurrentPosition(getLong);
  
function getLong(pos){
  return pos.coords.longitude;
}

console.log(lat);

$('#loc').append(function(){
  
});

var url = "api.openweathermap.org/data/2.5/weather?lat=35&lon=139"