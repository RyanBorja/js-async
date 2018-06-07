import axios from 'axios'; 

// Output
var weather1 = document.getElementById("weather1");
var weather2 = document.getElementById("weather2");
var errorMessage = document.getElementById("errorMessage");
var homeTemp = 0;

var url1 = "http://api.openweathermap.org/data/2.5/weather?zip=40502&us&appid=ef6a94dab254dc386b931af4d5ca58c7";

axios.get(url1)
	.then(function (response) { 
		weather1.innerHTML = "It is " + response.data.main.temp + " degrees Kelvin in " + response.data.name + ".";
	    var url2 = "http://api.openweathermap.org/data/2.5/weather?zip=90210&us&appid=ef6a94dab254dc386b931af4d5ca58c7";
	    if (response.data.main.temp > 310) {
	      url2 = "http://api.openweathermap.org/data/2.5/weather?zip=99723&us&appid=ef6a94dab254dc386b931af4d5ca58c7";
	    }
	    axios.get(url2)
	    	.then(function (response) { 
	    		weather2.innerHTML = "It is " + response.data.main.temp + " degrees Kelvin in " + response.data.name + ".";
	    	} )
	    	.catch(function (error) { console.log("Error with URL2! Boo!") } );
	} )
	.catch(function (error) { console.log("Eeek! Error! "); } );


