import React, { useEffect, useState } from "react";
import { getWeather } from "../../api/openweathermap";

import styles from "./WeatherData.module.css";

function WeatherData(props) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getWeather().then((data) => {
      setWeatherData(data);
    });
  }, [props.city]);

  if (!weatherData) {
    return null;
  }

  if (weatherData.cod === "404") {
    return null;
  }

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const unixDate = weatherData.dt;
  const curDate = new Date(unixDate * 1000);

  const getRoundedTemp = (temp) => {
    return Math.round(temp);
  };

  const getTime = (UTCDate) => {
    const date = new Date(UTCDate * 1000);

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

  return (
    <div className={styles.root}>
      <div className={styles.currentInfo}>
        <div className={styles.date}>
          {weekday[curDate.getDay()]} {curDate.getDate()}
        </div>
        <div className={styles.time}>{getTime(weatherData.dt)}</div>
        <div className={styles.currentTemp}>
          {getRoundedTemp(weatherData?.main.temp)}
          <div className={styles.celsius}>&#8451;</div>
        </div>
      </div>
      <div className={styles.additionalData}>
        <div className={`${styles.cards_block}`}>
          <div className={`${styles.card} ${styles.top_card}`}>
            <div className={styles.card_label}>Feels like</div>
            <div className={styles.card_value}>
              {getRoundedTemp(weatherData?.main.feels_like)}
            </div>
          </div>
          <div className={styles.cards_pair}>
            <div className={styles.card}>
              <div className={styles.card_label}>Minimum Temperature</div>
              <div className={styles.card_value}>
                {getRoundedTemp(weatherData?.main.temp_min)}
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.card_label}>Maximum Temperature</div>
              <div className={styles.card_value}>
                {getRoundedTemp(weatherData?.main.temp_max)}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cards_pair}>
          <div className={styles.card}>
            <div className={styles.card_label}>Humidity</div>
            <div className={styles.card_value}>
              {getRoundedTemp(weatherData?.main.humidity)}
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_label}>Wind speed</div>
            <div className={styles.card_value}>
              {getRoundedTemp(weatherData?.wind.speed)}
            </div>
          </div>
        </div>

        <div className={styles.cards_pair}>
          <div className={styles.card}>
            <div className={styles.card_label}>Sunrise</div>
            <div className={styles.card_value}>
              {getTime(weatherData?.sys.sunrise)}
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_label}>Sunset</div>
            <div className={styles.card_value}>
              {getTime(weatherData?.sys.sunset)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherData;
