var cityName = document.getElementById('cityName');
var savedCities = document.getElementById('savedCities');
var savedCitiesArray = JSON.parse(localStorage.getItem("savedCities")) || [];
var checkInBtn = document.getElementById('checkInBtn');


function getLocation() {
    window.navigator.geolocation.getCurrentPosition((location) => {
          console.log(location);
          console.log(location.timestamp);
          var timestamp = location.timestamp;
          console.log(moment(timestamp, 'x').format('hh:mm a'));
          var checkInTime = moment(timestamp, 'x').format('hh:mm a');
          alert(`your coordinates are ${location.coords.latitude}, ${location.coords.longitude}; and you checked in at ${checkInTime}`);
          console.log(location.coords.latitude);
          console.log(location.coords.longitude);
          var latNew = location.coords.latitude;
          var lonNew = location.coords.longitude;
      })
  };

  checkInBtn.addEventListener('click', getLocation);