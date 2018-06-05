// Output
var weather1 = document.getElementById("weather1");
var weather2 = document.getElementById("weather2");
var errorMessage = document.getElementById("errorMessage");
var apiRequest1;
var apiRequest2;
var homeTemp = 0;

// Fetch weather data from API endpoint when user clicks
// the submit button
function getWeather1() {
  var url = "http://api.openweathermap.org/data/2.5/weather?zip=40502&us&appid=ef6a94dab254dc386b931af4d5ca58c7";
  apiRequest1 = new XMLHttpRequest();
  apiRequest1.onload = function() {
    if (apiRequest1.statusText === "OK") {
      results = JSON.parse(this.responseText);
      var city = results.name;
      var tempK = results.main.temp;
      homeTemp = tempK;
      weather1.innerHTML = "It's " + tempK + " degrees Kelvin in " + city + '.';
      getWeather2();
    } else {
      errorMessage.innerHTML = JSON.parse(this.responseText).message;
    }
  };
  apiRequest1.onerror = httpRequestOnError;
  apiRequest1.open('get', url, true);
  apiRequest1.send();
}

function getWeather2() {

  var zip = 90210;
  if (homeTemp > 300) {
    zip = 99723;
  }

  var url = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&us&appid=ef6a94dab254dc386b931af4d5ca58c7";
  apiRequest2 = new XMLHttpRequest();
  apiRequest2.onload = function() {
    if (apiRequest2.statusText === "OK") {
      results = JSON.parse(this.responseText);
      var city = results.name;
      var tempK = results.main.temp;
      weather2.innerHTML = "It's " + tempK + " degrees Kelvin in " + city + '.';
    } else {
      errorMessage.innerHTML = JSON.parse(this.responseText).message;
    }
  };
  apiRequest2.onerror = httpRequestOnError;
  apiRequest2.open('get', url, true);
  apiRequest2.send();
}

// Show error message
function httpRequestOnError() {
  alert("Request Error: Try using Http instead of Https. Ex: http://codepen.io");
}

getWeather1();

// setTimeout(getWeather2, 2000);

