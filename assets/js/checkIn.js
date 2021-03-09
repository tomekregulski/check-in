// commented out until needed by other functions
// var cityName = document.getElementById('cityName');
// var savedCities = document.getElementById('savedCities');
// var savedCitiesArray = JSON.parse(localStorage.getItem("savedCities")) || [];
var checkInBtn = document.getElementById('checkInBtn');


function getLocation() {
    window.navigator.geolocation.getCurrentPosition((location) => {
          var timestamp = location.timestamp;
          var checkInTime = moment(timestamp, 'x').format('hh:mm a');
          var checkInDate = moment(timestamp, 'x').format('MM/DD/YYYY');
          alert(`Hello! Your coordinates are ${location.coords.latitude}, ${location.coords.longitude}; and you checked in at ${checkInTime} on ${checkInDate}.`);
          // commented out until needed by other functions
          // var latNew = location.coords.latitude;
          // var lonNew = location.coords.longitude;
      })
  };

  checkInBtn.addEventListener('click', getLocation);