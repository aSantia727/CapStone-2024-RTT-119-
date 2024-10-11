const TitleCard = document.getElementById('appName');

if (TitleCard) {
  // Add class to TitleCard
  TitleCard.classList.add('theName');
}

const buttonAnimation = document.querySelector('.icon');

  if (buttonAnimation) {
    buttonAnimation.addEventListener('mouseover', function() {
      this.style.transition = 'background-image 1.5s ease';
      this.style.backgroundImage = 'url("matrix.gif")'; 
    });

    buttonAnimation.addEventListener('mouseout', function() {
      this.style.transition = '';
      this.style.backgroundImage = '';
    });
  } else {
    console.error('Element with ID "buttonAnimation" not found.');
  }
  const battery = navigator.battery;

  function updateBatteryStatus() {
    const batteryStatusElement = document.getElementById('battery-status');
    batteryStatusElement.textContent = `Charging: ${battery.charging ? 'Yes' : 'No'}
  Level: ${battery.level.toFixed(2) * 100}%
  Charging Time: ${battery.chargingTime ? battery.chargingTime.toFixed(0) + ' seconds' : 'N/A'}
  Discharging Time: ${battery.dischargingTime ? battery.dischargingTime.toFixed(0) + ' seconds' : 'N/A'}`;
  }
  
  // battery.addEventListener('chargingchange', updateBatteryStatus);
  // battery.addEventListener('levelchange', updateBatteryStatus);
  // battery.addEventListener('chargingtimechange', updateBatteryStatus);
  // battery.addEventListener('dischargingtimechange', updateBatteryStatus);   
  
  
  // updateBatteryStatus(); 

  // pop up
  setTimeout(function() {
    document.getElementById('popup').style.display = 'block';

  
    setTimeout(function() {
      document.getElementById('popup').style.display = 'none';
    }, 5000);
  }, 2000);