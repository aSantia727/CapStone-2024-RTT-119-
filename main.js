const TitleCard = document.getElementById('appName');

if (TitleCard) {
  TitleCard.classList.add('theName'); 
}

// Battery Status (You can uncomment if you want to use this functionality)
const battery = navigator.battery;

function updateBatteryStatus() {
  const batteryStatusElement = document.getElementById('battery-status');
  if (batteryStatusElement) {
    batteryStatusElement.textContent = `Charging: ${battery.charging ? 'Yes' : 'No'}
    Level: ${battery.level.toFixed(2) * 100}%
    Charging Time: ${battery.chargingTime ? battery.chargingTime.toFixed(0) + ' seconds' : 'N/A'}
    Discharging Time: ${battery.dischargingTime ? battery.dischargingTime.toFixed(0) + ' seconds' : 'N/A'}`;
  }
}

// battery.addEventListener('chargingchange', updateBatteryStatus);
// battery.addEventListener('levelchange', updateBatteryStatus);
// battery.addEventListener('chargingtimechange', updateBatteryStatus);
// battery.addEventListener('dischargingtimechange', updateBatteryStatus);   


// updateBatteryStatus(); 

// Bootstrap Modal
var myModal = new bootstrap.Modal(document.getElementById('popup'));
setTimeout(function() {
  myModal.show(); 
}, 2000);