import React, { useEffect, useState } from "react";
import { getForecast } from "../../api/openweathermap";
import styles from "./Forecast.module.css";

function HourlyForecast() {
  const [hourlyForecast, setHourlyForecast] = useState(null);

  useEffect(() => {
    getForecast().then(({ list }) => {
      // const [data] = list;
      setHourlyForecast(list);
    });
  }, []);

  if (!hourlyForecast) {
    return null;
  }

  console.log(hourlyForecast);

  return (
    <div className={styles.root}>
      <h2>Weather Forecast</h2>
      <div className={styles.wrapper}>
        <div className={styles.shadow}>
        <div className={styles.forecast_cards}>
          {hourlyForecast.map(({ dt_txt, main, weather }, index) => (
            <div key={index} className={styles.forecast_card}>
              <img
                src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
                alt="Weather Icon"
              />
              <div>{Math.round(main.temp)}</div>
              <div>{dt_txt}</div>
              <br />
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export default HourlyForecast;
