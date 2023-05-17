let apiKey = "531af2461f50b8bd82618834fb7e0015";
let city = "riga";
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
    url = `http://api.openweathermap.org/data/2.5/air_pollution?q=${city}&appid=${apiKey}`;
    return await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return Promise.resolve(data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
}

export async function getHourlyForecast() {
    url = `http://api.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${apiKey}`;
    return await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return Promise.resolve(data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
}

export async function getDailyForecast() {
    url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${apiKey}`;
    return await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return Promise.resolve(data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
}

// {
//     "coord": {
//         "lon": 24.0833,
//         "lat": 57
//     },
//     "weather": [
//         {
//             "id": 801,
//             "main": "Clouds",
//             "description": "few clouds",
//             "icon": "02d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 287.12,
//         "feels_like": 286.03,
//         "temp_min": 286.99,
//         "temp_max": 287.19,
//         "pressure": 1015,
//         "humidity": 56
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 4.63,
//         "deg": 230
//     },
//     "clouds": {
//         "all": 20
//     },
//     "dt": 1684340060,
//     "sys": {
//         "type": 2,
//         "id": 2075320,
//         "country": "LV",
//         "sunrise": 1684288940,
//         "sunset": 1684348678
//     },
//     "timezone": 10800,
//     "id": 456173,
//     "name": "Rīga",
//     "cod": 200
// }
