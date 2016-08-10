var apiKey1="4b1c8017264752f6f90fcc05bafab9a2", apiKey2="a9b63f948801578d5925caeff50b2058", apiKey3="1085d275b2bea5470ec7b1358fcec551";
var apiCall="https://api.openweathermap.org/data/2.5/weather?";
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;  $.getJSON(apiCall+"lat="+latitude+"&lon="+longitude+"&appid="+apiKey1+"&units=metric", function(weather) {
      $("#data").html(latitude+"<br>"+longitude+"<br>"+JSON.stringify(weather));
      $("#name").html(weather.name);
      var originalT=weather.main.temp
      $("#temperature").html(originalT);
      $("#fahrenheit").html(originalT*1.8+32);
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
}


