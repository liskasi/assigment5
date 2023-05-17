import React, { useEffect, useState } from "react";
import { getWeather } from "../../api/openweathermap";

function WeatherData() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getWeather().then((data) => {
      setWeatherData(data);
    });
  }, []);

  if (!weatherData) {
    return null;
  }

//   console.log(weatherData);
  return (
    <div>
      <div>Temperature: {weatherData?.main.temp}</div>
      <div>Feels like: {weatherData?.main.feels_like}</div>
      <div>Temperature Min: {weatherData?.main.temp_min}</div>
      <div>Temperature Max: {weatherData?.main.temp_max}</div>
      <div>Wind Speed: {weatherData?.wind.speed}</div>
    </div>
  );
}

export default WeatherData;
