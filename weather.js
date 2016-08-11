$(document).ready(function() {
  var apiKey1 = "4b1c8017264752f6f90fcc05bafab9a2",
    apiKey2 = "a9b63f948801578d5925caeff50b2058",
    apiKey3 = "1085d275b2bea5470ec7b1358fcec551";
  var apiCall = "http://api.openweathermap.org/data/2.5/weather?";

  $.getJSON("http://ip-api.com/json", function(data) {
    var latitude = data["lat"];

    var longitude = data["lon"];
    $.getJSON(apiCall + "lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey1 + "&units=metric", function(weather) {
      $("#data").html(JSON.stringify(weather));
      $("#name").html(weather.name + ", " + data.country);

      var time = function getTime() {
        var d = new Date();
        var hours = d.getHours();
        var minutes = d.getMinutes();
        if (hours <= 9) {
          hours = "0" + hours
        }
        if (minutes <= 9) {
          minutes = "0" + minutes
        }
        if ((hours <= 5) || (hours >= 20)) {
          $("body").css("background", "radial-gradient(#033d5e 30%, #00111e)").css("color", "white")
        }

        return hours + ":" + minutes
      }
      $("#time").html(time);

      var originalT = weather.main.temp
      $("#temperature").html(originalT);
      $("#fahrenheit").html(originalT * 1.8 + 32);
      $("#temperature").click(function() {
        $("p").toggle();
      });
      $("#fahrenheit").click(function() {
        $("p").toggle();
      });

      $("#wind").html(weather.wind.speed);
      $("#condition").html(weather.weather[0]["description"]);

    });
  });
});




