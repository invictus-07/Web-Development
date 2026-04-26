const apiKey = "0432c1f058865df644a39302d8c2db58";

    function showError(message) {
      document.getElementById("errorMsg").innerText = message;
    }

    function clearError() {
      document.getElementById("errorMsg").innerText = "";
    }

    function displayWeather(data) {
      clearError();

      if (parseInt(data.cod) !== 200) {
        showError(data.message || "Failed to get weather data");
        return;
      }

      const weatherDiv = document.getElementById("weatherResult");
      weatherDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Condition: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
    }

    function getWeatherByCity() {
      const city = document.getElementById("cityInput").value.trim();

      if (!city) {
        showError("Please enter a city name.");
        return;
      }

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => displayWeather(data))
        .catch(err => {
          showError("Network error. Use Live Server.");
          console.error(err);
        });
    }

    function getWeatherByLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
            .then(res => res.json())
            .then(data => displayWeather(data))
            .catch(err => {
              showError("Failed to fetch location weather.");
              console.error(err);
            });
        }, () => {
          showError("Location permission denied.");
        });
      } else {
        showError("Geolocation not supported.");
      }
    }