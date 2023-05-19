import React from "react";
import WeatherData from "../WeatherData/WeatherData";
import AirPollutionData from "../AirPollutionData/AirPollutionData";
import HourlyForecast from "../Forecast/Forecast";

import styles from "./OpenWeatherMap.module.css";

function OpenWeetherMap(props) {
  return (
    <div className={styles.root}>
      <WeatherData city={props.city} />
      <div className={styles.row}>
        <AirPollutionData city={props.city} />
        <HourlyForecast city={props.city} />
      </div>
    </div>
  );
}

export default OpenWeetherMap;
