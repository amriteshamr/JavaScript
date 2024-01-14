function getWeather() {
    const apiKey = '9904119ecead5b822191a151597b511d' ; // Replace with your OpenWeatherMap API key
    const cityInput = document.getElementById('city-input');
    const weatherInfo = document.getElementById('weather-info');
  
    const city = cityInput.value;
  
    if (!city) {
      alert('Please enter a city name.');
      return;
    }
  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const temperature = data.main.temp;
        const description = data.weather[0].description;
  
        weatherInfo.innerHTML = `<p>Temperature: ${temperature} &#8451;</p><p>Description: ${description}</p>`;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again.</p>';
      });
  }
  