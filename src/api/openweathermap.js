const {LocationData} = require('./dataShare');

let apiKey = "531af2461f50b8bd82618834fb7e0015";
let url = "";

export async function getWeather() {
  url = `https://api.openweathermap.org/data/2.5/weather?q=${LocationData.city}&appid=${apiKey}&units=metric`;
  return await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return Promise.resolve(data);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

export async function getAirPollution() {
  url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${LocationData.latitude}&lon=${LocationData.longtitude}&appid=${apiKey}`;
  return await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return Promise.resolve(data);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

export async function getForecast() {
  url = `https://api.openweathermap.org/data/2.5/forecast?lat=${LocationData.latitude}&lon=${LocationData.longtitude}&appid=${apiKey}&units=metric`;
  return await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return Promise.resolve(data);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

export async function getCoordinates(cityName) {
  url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;
  return await fetch(url)
    .then((response) => response.json())
    .then(([{ name, lat, lon, local_names, country }]) => {
      LocationData.city = name;
      LocationData.latitude = lat;
      LocationData.longtitude = lon;
      return true;
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}
