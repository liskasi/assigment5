import React, { useEffect, useState } from "react";
import { getOpenWeatherMap } from "../../api/openweathermap";

function WeatherData() {
    const [openWeatherMapData, setOpenWeatherMapData] = useState(null);

    useEffect(() => {
        getOpenWeatherMap().then(
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
