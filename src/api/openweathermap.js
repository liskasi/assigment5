let apiKey = "531af2461f50b8bd82618834fb7e0015";
let city = "riga";
let latitude = 57;
let longtitude = 24.0833;
// let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
let url = "";

export async function getWeather() {
  url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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
  url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longtitude}&appid=${apiKey}`;
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
  url = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;
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
  url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;
  return await fetch(url)
    .then((response) => response.json())
    .then(([{ name, lat, lon }]) => {
      console.log(city, name, lat, lon);
      city = name;
      latitude = lat;
      longtitude = lon;
      return true;
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}
