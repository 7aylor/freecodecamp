const channelUrl = "https://wind-bow.gomix.me/twitch-api/channels/";
const streamUrl = "https://wind-bow.gomix.me/twitch-api/streams/"

var allChannels = [
  "freecodecamp",
  "qazitv",
  "esl_csgo",
  "pro_dota2_tv"
];

var onlineChannels = [];
var offlineChannels = [];

var callBackString = "?callback=?"

$(document).ready(function() {
    //go through each element in allChannels and put them in corresponding array
    //depending on their online stats
    allChannels.forEach(function(channel) {
    var thisChannelUrl = channelUrl + channel + callBackString;
    var thisStreamUrl = streamUrl + channel + callBackString;
    $.getJSON(thisStreamUrl, function(stream) {
      if (stream.stream !== null) {
        onlineChannels.push(channel);
      } 
      else {
        offlineChannels.push(channel);
      }
    });
  });
  
  //if All is click, show all channels. This is the default when page loads
  $("#toggle-all").click(function(){
    $("#container-body").empty();
    $("#toggle-all").css("color", "white");
    $("#toggle-online").css("color", "black");
    $("#toggle-offline").css("color", "black");
    
    //loop through all channels, then add the html to container-body
    allChannels.forEach(function(channel){
      var thisChannelUrl = channelUrl + channel + callBackString;
      var thisStreamUrl = streamUrl + channel + callBackString;
      $.getJSON(thisStreamUrl, function(stream) {
        if (stream.stream !== null) {
          addHtml(" online\"> Online", thisChannelUrl, "online");
        } 
        else {
          addHtml(" offline\"> Offine", thisChannelUrl, "offline");
        }
      });
    });
  });
  
  //if Online is click, show only online channels.
  $("#toggle-online").click(function(){
    $("#container-body").empty();
    $("#toggle-all").css("color", "black");
    $("#toggle-online").css("color", "white");
    $("#toggle-offline").css("color", "black");
    
    //loop through online channels, then add the html to container-body
    onlineChannels.forEach(function(channel){
      var thisChannelUrl = channelUrl + channel + callBackString;
      var thisStreamUrl = streamUrl + channel + callBackString;
      $.getJSON(thisStreamUrl, function(stream) {
        addHtml(" online\"> Online", thisChannelUrl, "online");
      });
    });
  });
  //if Offline is click, show only offline channels.
  $("#toggle-offline").click(function(){
    $("#container-body").empty();
    $("#toggle-all").css("color", "black");
    $("#toggle-online").css("color", "black");
    $("#toggle-offline").css("color", "white");
    
    //loop through offline channels, then add the html to container-body
    offlineChannels.forEach(function(channel){
      var thisChannelUrl = channelUrl + channel + callBackString;
      var thisStreamUrl = streamUrl + channel + callBackString;
      $.getJSON(thisStreamUrl, function(stream) {
        addHtml(" offline\"> Offine", thisChannelUrl, "offline");
      });
    });
  });
    
  //adds the html to the container-body element. Makes sure online shows up first
  function addHtml(status, thisChannelUrl, stream) {      
    $.getJSON(thisChannelUrl, function(item) {
      var name = item.display_name;
      var logoUrl = item.logo;
      var itemUrl = item.url;
      var html = "<div class=\"list-item\"><img src=\"" + logoUrl +
        "\" class=\"streamer-img\"><h3 class=\"name\">" +
        "<a href=\"" + itemUrl + "\"target=\"_blank\">" + name +
        "</a></h3><h3 class=\"status" + status + "</h3></div>";
      if(stream === "online"){
        $('#container-body').prepend(html);
      }
      else{
        $('#container-body').append(html);
      }
    });
  }
  
  //trigger a click event on toggle-all so that all streams show up when page loads
  $("#toggle-all").trigger("click");
  
});