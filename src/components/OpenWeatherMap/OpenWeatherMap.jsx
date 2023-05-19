import React from "react";
import WeatherData from "../WeatherData/WeatherData";
import AirPollutionData from "../AirPollutionData/AirPollutionData";
import HourlyForecast from "../Forecast/Forecast";

import styles from "./OpenWeatherMap.module.css";

function OpenWeetherMap() {
  return (
    <div className={styles.root}>
      <WeatherData />
      <div className={styles.row}>
        <AirPollutionData />
        <HourlyForecast />
      </div>
    </div>
  );
}

export default OpenWeetherMap;
