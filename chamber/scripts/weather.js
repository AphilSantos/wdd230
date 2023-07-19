const apiKey = "39cf2d7da439563ce97ddebe20471f88";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Cagayan de Oro,PH&appid=39cf2d7da439563ce97ddebe20471f88&units=metric";

function fetchWeatherData() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const locationElement = document.querySelector('.location');
      const temperatureElement = document.querySelector('.temperature');
      const descriptionElement = document.querySelector('.description');
      const windspeedElement = document.querySelector('.windspeed');
      const windchillElement = document.querySelector('.windchill');
      const climateElement = document.querySelector('.climate'); // New element

      locationElement.textContent = data.name + ', ' + data.sys.country;
      temperatureElement.textContent = data.main.temp + '°C';
      descriptionElement.textContent = data.weather[0].description;
      windspeedElement.textContent = 'Wind Speed: ' + data.wind.speed + ' m/s';

      // Calculate wind chill using the current temperature and wind speed
      const windChill = calculateWindChill(data.main.temp, data.wind.speed);
      windchillElement.textContent = 'Wind Chill: ' + windChill + '°C';

      // Update climate condition
      const climateCondition = getClimateCondition(data.weather[0].id);
      climateElement.textContent = 'Climate: ' + climateCondition;
    })
    .catch(error => console.log(error));
}

function getClimateCondition(weatherId) {
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
    return 'Cloudy';
  } else {
    return 'Unknown';
  }
}

fetchWeatherData();
