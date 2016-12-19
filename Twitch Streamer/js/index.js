const channelUrl = "https://wind-bow.gomix.me/twitch-api/channels/";
const streamUrl = "https://wind-bow.gomix.me/twitch-api/streams/"

var channels = [
  "freecodecamp",
  "esl_sc2",
  "OgamingSC2",
  "cretetion",
  "pro_dota2_tv"
];

channels.sort();

var callBackString = "?callback=?"

$(document).ready(function() {
  channels.forEach(function(channel) {
    var thisChannelUrl = channelUrl + channel + callBackString;
    var thisStreamUrl = streamUrl + channel + callBackString;
    $.getJSON(thisStreamUrl, function(stream) {
      console.log(stream.stream);
      if (stream.stream !== null) {
        addHtml(" online\"> Online");
      } else {
        addHtml(" offline\"> Offine");
      }
    });

    function addHtml(status) {
      $.getJSON(thisChannelUrl, function(item) {
        var name = item.display_name;
        var logoUrl = item.logo;
        var itemUrl = item.url;
        $('#container-body').append(
          "<div class=\"list-item\"><img src=\"" + logoUrl +
          "\" class=\"streamer-img\"><h3 class=\"name\">" +
          "<a href=\"" + itemUrl + "\"target=\"_blank\">" + name +
          "</a></h3><h3 class=\"status" + status + "</h3></div>");
      });
    }
  });
});