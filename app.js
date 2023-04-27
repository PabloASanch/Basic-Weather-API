const form = document.getElementById("form"); // Gets form from html
const cityInput = document.getElementById("city"); // gets the city input 
const countryInput = document.getElementById("country"); // gets country input

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = cityInput.value; // gets city inputs value
  const country = countryInput.value; // gets country inputs value
  const API_KEY = "6ce5466c3609a7e6848d6668be92b95c"; // your api key
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
  ); // the api
  var data = await response.json(); // waiting for the api
});

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const city = cityInput.value;
    const country = countryInput.value;
    const API_KEY = "6ce5466c3609a7e6848d6668be92b95c";
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await response.json();  // getting data 
    const weather = data.weather[0]; // wheather data
    const weatherContainer = document.createElement("div"); // creates the container to display wheather data
    const first = eval((data.main.temp - 273.15) * 1.8 + 32) // gets weather in F
    const second = Math.round(first) // rounds up F to whole number
    weatherContainer.innerHTML = `
      <h2>Weather in ${city}, ${country}:</h2>
      <p>Description: ${weather.description}</p>
      <p>Temperature: ${second}°F</p>
    `;
    document.body.appendChild(weatherContainer); // apends child
  });
  