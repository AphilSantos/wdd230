const apiKey = "39cf2d7da439563ce97ddebe20471f88";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Cagayan de Oro,PH&appid=" + apiKey + "&units=metric";

function fetchWeatherData() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(displayResults)
    .catch(error => console.error('Error:', error));
}

function displayResults(weatherData) {
  const locationElement = document.querySelector('.location');
  const temperatureElement = document.querySelector('.temperature');
  const descriptionElement = document.querySelector('.description');
  const windspeedElement = document.querySelector('.windspeed');
  const windchillElement = document.querySelector('.windchill');
  const climateElement = document.querySelector('.climate');
  const weatherIcon = document.querySelector('.climate-logo');

  // Update text content
  locationElement.textContent = weatherData.name + ', ' + weatherData.sys.country;
  temperatureElement.textContent = weatherData.main.temp + '°C';
  descriptionElement.textContent = weatherData.weather[0].description;
  windspeedElement.textContent = 'Wind Speed: ' + weatherData.wind.speed + ' m/s';

  // Calculate wind chill using the current temperature and wind speed
  const windChill = calculateWindChill(weatherData.main.temp, weatherData.wind.speed);
  windchillElement.textContent = 'Wind Chill: ' + windChill + '°C';

  // Update climate condition
  const climateCondition = getClimateCondition(weatherData.weather[0].id, weatherData.weather[0].description);
  climateElement.textContent = 'Climate: ' + climateCondition;

  // Update weather icon
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', weatherData.weather[0].description);
}

function getClimateCondition(weatherId, description) {
  if (weatherId >= 200 && weatherId < 300) {
    return 'Stormy';
  } else if (weatherId >= 300 && weatherId < 600) {
    return 'Rainy';
  } else if (weatherId >= 600 && weatherId < 700) {
    return 'Snowy';
  } else if (weatherId >= 700 && weatherId < 800) {
    return 'Misty';
  } else if (weatherId === 800) {
    return 'Sunny';
  } else if (weatherId > 800 && weatherId < 900) {
    return description.includes('cloud') ? 'Cloudy' : 'Unknown';
  } else {
    return 'Unknown';
  }
}

function calculateWindChill(temp, speed) {
  // Placeholder function for calculating wind chill.
  // Replace with actual formula if necessary.
  return (temp - (speed * 0.1)).toFixed(1);
}

fetchWeatherData();
