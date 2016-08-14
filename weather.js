$(document).ready(function() {
  var apiKey1 = "4b1c8017264752f6f90fcc05bafab9a2",
    apiKey2 = "a9b63f948801578d5925caeff50b2058",
    apiKey3 = "1085d275b2bea5470ec7b1358fcec551";
  var apiCall = "http://cors.io/?u=http://api.openweathermap.org/data/2.5/weather?";

  $.getJSON("http://cors.io/?u=http://ip-api.com/json", function(data) {
    var latitude = data["lat"];

    var longitude = data["lon"];
    $.getJSON(apiCall + "lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey1 + "&units=metric", function(weather) {

      $("#name").html(weather.name + ", " + data.country);

      function getTime() {
        var d = new Date();
        var hours = d.getHours();
        if ((hours <= 5) || (hours >= 20)) {
          $("body").css("background", "radial-gradient(#033d5e 30%, #00111e)").css("color", "white")
        }
        if ((hours >= 6) && (hours <= 19))
          $("body").css("background", "radial-gradient(ellipse at center, #fff 0, #d3eff8 100%)").css("color", "#45565c")
      }
      getTime();

      var originalT = weather.main.temp
      $("#temperature").html(Math.round(originalT) + "℃");
      $("#fahrenheit").html(Math.round(originalT * 1.8 + 32) + "℉");
      $("#temperature").click(function() {
        $("p").toggle();
      });
      $("#fahrenheit").click(function() {
        $("p").toggle();
      });

      $("#wind").html(weather.wind.speed);
      $("#condition").html(weather.weather[0]["description"]);
      var d = new Date();
      var hours = d.getHours();

      switch (weather.weather[0]["description"]) {
        case "few clouds":
        case "overcast clouds":
        case "scattered clouds":
        case "broken clouds":
          if ((hours <= 5) || (hours >= 20)) {
            $("#weathericon").load("https://raw.githubusercontent.com/korshunad/weatherapp/master/few-clouds-night.html")
          } else {
            $("#weathericon").load("https://raw.githubusercontent.com/korshunad/weatherapp/master/few-clouds-day.html")
          };
          break;
        case "clear sky":
          if ((hours <= 5) || (hours >= 20)) {
            $("#weathericon").load("https://raw.githubusercontent.com/korshunad/weatherapp/master/clearer-night.html");
          }
          if ((hours >= 6) && (hours <= 19)) {
            $("#weathericon").load("https://raw.githubusercontent.com/korshunad/weatherapp/master/clearer-day.html")
          };
          break;
        case "thunderstorm with light rain":
        case "thunderstorm with rain":
        case "thunderstorm with heavy rain":
        case "light thunderstorm":
        case "thunderstorm":
        case "heavy thunderstorm":
        case "ragged thunderstorm":
        case "thunderstorm with light drizzle":
        case "thunderstorm with drizzle":
        case "thunderstorm with heavy drizzle":

          if ((hours <= 5) || (hours >= 20)) {
            $("#weathericon").load("https://raw.githubusercontent.com/korshunad/weatherapp/master/thunderstorm-night.html");
          }
          if ((hours >= 6) && (hours <= 19)) {
            $("#weathericon").load("https://raw.githubusercontent.com/korshunad/weatherapp/master/thunder-day.html")
          };
          break;
        case "light snow":
        case "snow":
        case "heavy snow":
        case "sleet":
        case "shower sleet":
        case "light rain and snow":
        case "rain and snow":
        case "light shower snow":
        case "shower snow":
        case "heavy shower snow":

          if ((hours <= 5) || (hours >= 20)) {
            $("#weathericon").load("https://raw.githubusercontent.com/korshunad/weatherapp/master/snow-night.html");
          }
          if ((hours >= 6) && (hours <= 19)) {
            $("#weathericon").load("https://raw.githubusercontent.com/korshunad/weatherapp/master/snow-day.html")
          };
          break;
        case "mist":
        case "smoke":
        case "haze":
        case "sand, dust whirls":
        case "fog":
        case "sand":
        case "dust":
        case "volcanic ash":

          if ((hours <= 5) || (hours >= 20)) {
            $("#weathericon").load("https://raw.githubusercontent.com/korshunad/weatherapp/master/fog-night.html");
          }
          if ((hours >= 6) && (hours <= 19)) {
            $("#weathericon").load("https://raw.githubusercontent.com/korshunad/weatherapp/master/fog-day.html")
          };
          break;
        case "squalls":
        case "tornado":
        case "tropical storm":
        case "hurricane":
        case "windy":
        case "strong breeze":
        case "high wind, near gale":
        case "gale":
        case "severe gale":
        case "storm":
        case "violent storm":

          if ((hours <= 5) || (hours >= 20)) {
            $("#weathericon").load("https://raw.githubusercontent.com/korshunad/weatherapp/master/wind-strong-night.html");
          }
          if ((hours >= 6) && (hours <= 19)) {
            $("#weathericon").load("https://raw.githubusercontent.com/korshunad/weatherapp/master/wind-strong-day.html")
          };
          break;
        case "calm":
        case "light breeze":
        case "gentle breeze":
        case "moderate breeze":
        case "fresh breeze":
          if ((hours <= 5) || (hours >= 20)) {
            $("#weathericon").load("https://raw.githubusercontent.com/korshunad/weatherapp/master/wind-light-night.html");
          }
          if ((hours >= 6) && (hours <= 19)) {
            $("#weathericon").load("https://raw.githubusercontent.com/korshunad/weatherapp/master/wind-light-day.html")
          };
          break;
        case "cold":
          $("#weathericon").load("https://raw.githubusercontent.com/korshunad/weatherapp/master/cold.html");
          break;
        case "hot":
          $("#weathericon").load("https://raw.githubusercontent.com/korshunad/weatherapp/master/hot.html");
          break;
        case "hail":
          $("#weathericon").load("https://raw.githubusercontent.com/korshunad/weatherapp/master/hail.html");
          break;
        default:
          if ((hours <= 5) || (hours >= 20)) {
            $("#weathericon").load("https://raw.githubusercontent.com/korshunad/weatherapp/master/rain-night.html");
          }
          if ((hours >= 6) && (hours <= 19)) {
            $("#weathericon").load("https://raw.githubusercontent.com/korshunad/weatherapp/master/rain-day.html")
          };

      };
    });
  });
});


