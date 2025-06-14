async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = 'https://google-search74.p.rapidapi.com/?query=Nike&limit=10&related_keywords=true'; // 🔑 Replace with your actual API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found!");
    
    const data = await res.json();
    const weatherDiv = document.getElementById("weatherInfo");
    
    weatherDiv.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
      <p>🌡️ Temperature: ${data.main.temp} °C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } catch (err) {
    document.getElementById("weatherInfo").innerHTML = `<p style="color:red;">${err.message}</p>`;
  }
}
