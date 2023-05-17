import React, { useEffect, useState } from "react";
import { getWeather } from "../../api/openweathermap";

function WeatherData() {
    const [openWeatherMapData, setOpenWeatherMapData] = useState(null);

    useEffect(() => {
        getWeather().then(
            (data) => {
                setOpenWeatherMapData(data);
            }
        );  
    }, []);

  if (!openWeatherMapData) {
    return null;
  }

  console.log(openWeatherMapData);

  return <div>dash</div>;
}

export default WeatherData;
