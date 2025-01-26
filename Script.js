document.getElementById("getWeather").addEventListener("click", function() {
    const city = document.getElementById("city").value;
    if (city === "") {
      alert("Please enter a city name!");
      return;
    }
  
    const apiKey = "4b6764a10ed48c168fee27f2f7a6c452
"; // Get your API key from OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.cod === "404") {
          alert("City not found!");
          return;
        }
  
        const weatherData = `
          <p><strong>City:</strong> ${data.name}</p>
          <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
          <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
          <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        `;
        document.getElementById("weatherData").innerHTML = weatherData;
      })
      .catch(error => {
        alert("Error fetching data.");
      });
  });
  