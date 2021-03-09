// Initialize and add the map
var marker;
var cityName = document.getElementById('cityName');
var temperature = document.getElementById('temperature');
var humidity = document.getElementById('humidity');
var windSpeed = document.getElementById('windSpeed');
var uvIndex = document.getElementById('uvIndex');
var savedCities = document.getElementById('savedCities');
var btnClass;
var iconDailyDiv;
var iconDailyAppend;
var savedCitiesArray = JSON.parse(localStorage.getItem("savedCities")) || [];
var weatherBtn = document.getElementById('weatherBtn');


function getLocation() {
    window.navigator.geolocation.getCurrentPosition((location) => {
          console.log(location);
          alert(`your coordinates are ${location.coords.latitude}, ${location.coords.longitude}`);
          console.log(location.timestamp);
          var timestamp = location.timestamp;
          console.log(moment(timestamp, 'x').format('hh:mm a'));
          console.log(location.coords.latitude);
          console.log(location.coords.longitude);
          var latNew = location.coords.latitude;
          var lonNew = location.coords.longitude;
      })
  };

weatherBtn.addEventListener('click', getLocation);