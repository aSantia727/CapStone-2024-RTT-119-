const TitleCard = document.getElementById('appName');

if (TitleCard) {
  TitleCard.classList.add('theName'); 
}

// Battery Status (You can uncomment if you want to use this functionality)
// const battery = navigator.battery;

// function updateBatteryStatus() {
//   const batteryStatusElement = document.getElementById('battery-status');
//   if (batteryStatusElement) {
//     batteryStatusElement.textContent = `Charging: ${battery.charging ? 'Yes' : 'No'}
//     Level: ${battery.level.toFixed(2) * 100}%
//     Charging Time: ${battery.chargingTime ? battery.chargingTime.toFixed(0) + ' seconds' : 'N/A'}
//     Discharging Time: ${battery.dischargingTime ? battery.dischargingTime.toFixed(0) + ' seconds' : 'N/A'}`;
//   }
// }

// battery.addEventListener('chargingchange', updateBatteryStatus);
// battery.addEventListener('levelchange', updateBatteryStatus);
// battery.addEventListener('chargingtimechange', updateBatteryStatus);
// battery.addEventListener('dischargingtimechange', updateBatteryStatus);   


// updateBatteryStatus(); 

// Bootstrap Modal
// var myModal = new bootstrap.Modal(document.getElementById('popup'));
// setTimeout(function() {
//   myModal.show(); 
// }, 2000);


// API CAPSTONE 5

fetch('https://api.weather.gov/points/40.7,-74.0')
.then(response => response.json())
.then(data => {
  const forecastUrl = data.properties.forecast;
  return fetch(forecastUrl);
})
.then(response => response.json())   

.then(forecastData => {
  // Process and display the forecastData in the div
  const weatherInfoDiv = document.getElementById("weatherInfo");

  // Example: Display the current temperature
  const currentTemp = forecastData.properties.periods[0].temperature;
  const currentTempUnit = forecastData.properties.periods[0].temperatureUnit;
  const currentConditions = forecastData.properties.periods[0].shortForecast;

  weatherInfoDiv.innerHTML = `
    <p>Current temperature: ${currentTemp} ${currentTempUnit}</p>
    <p>Conditions: ${currentConditions}</p>
  `; 
})
.catch(error => {
  console.error('Error fetching weather data:', error);
  document.getElementById("weatherInfo").innerHTML = "Error fetching weather data.";   

});


// Call the getWeather function to display the weather on page load
getWeather(); 
    ;
  

  // Call the getWeather function to display the weather on page load
  getWeather(); 
    ;