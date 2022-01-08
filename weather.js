const axios = require('axios').default;
require('dotenv').config()

console.log("This is the Api Key directly declared in the file")
const apiKey = '971d8e29a43bf74e2aabf6e71fd23ea6'
console.log(apiKey)

console.log("This is the Api Key taken from the ENV file")
const apiKeyEnv = process.env.API_KEY
console.log(apiKeyEnv)

console.log("Are they the same?")
console.log(apiKey === apiKeyEnv)

class Weather {

  constructor () {
    this.apiKey = process.env.API_KEY;
  }

  fetchWeatherData = (city, callback) => {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKeyEnv}`;
    axios.get(apiUrl).then((response) => {
    let weatherData = response;
    callback(weatherData);
    });
  }
}

weather = new Weather();
weather.fetchWeatherData("London", (data) => {
  console.log(data) } )

module.exports = Weather;


