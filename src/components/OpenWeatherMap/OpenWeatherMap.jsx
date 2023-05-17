import React from "react";
import WeatherData from "../WeatherData/WeatherData";
import AirPollutionData from "../AirPollutionData/AirPollutionData";
import HourlyForecast from "../Forecast/Forecast";

function OpenWeetherMap() {

  return (
    <div>
      {/* <WeatherData />
      <AirPollutionData /> */}
      <HourlyForecast />
    </div>
  );
}

export default OpenWeetherMap;
