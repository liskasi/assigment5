import React, { useEffect, useState } from "react";
import { getForecast } from "../../api/openweathermap";
import styles from "./Forecast.module.css";

function HourlyForecast(props) {
  const [hourlyForecast, setHourlyForecast] = useState(null);

  useEffect(() => {
    getForecast().then(({ list }) => {
      setHourlyForecast(list);
    });
  }, [props.city]);

  if (!hourlyForecast) {
    return null;
  }

  const getForecastTime = (dt) => {
    const date = new Date(dt * 1000);
    const hours = date.getHours();
    let minutes = date.getMinutes();
    switch (minutes.toString().length) {
      case 1:
        minutes = "0" + date.getMinutes();
        break;
      case 0:
        minutes = "00";
        break;
      default:
    }
    return hours + ":" + minutes;
  };
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const getForecastDate = (dt) => {
    const date = new Date(dt * 1000);

    const day = date.getDay();
    const dd = date.getDate();

    return weekday[day] + " " + dd;
  };

  return (
    <div className={styles.root}>
      <h2>Weather Forecast</h2>
      <div>5 day forecast with 3-hour step</div>
      <div className={styles.wrapper}>
        <div className={styles.shadow}>
          <div className={styles.forecast_cards}>
            {hourlyForecast.map(({ dt, main, weather }, index) => (
              <div key={index} className={styles.forecast_card}>
                <img
                  src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
                  alt="Weather Icon"
                  className={styles.card_image}
                />
                <div className={styles.card_temp}>
                  {Math.round(main.temp)}&#8451;
                </div>
                <div className={styles.card_desc}>{weather[0].description}</div>
                <div className={styles.card_date}>{getForecastDate(dt)}</div>
                <div className={styles.card_time}>{getForecastTime(dt)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HourlyForecast;
