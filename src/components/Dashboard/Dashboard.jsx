import React, { useEffect, useState } from "react";
import { getCoordinates } from "../../api/openweathermap";
import OpenWeatherMap from "../OpenWeatherMap/OpenWeatherMap";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const [cityName, setCityName] = useState("");
  const [triggerLocation, setTriggerLocation] = useState(false);
  const [isCity, setIsCity] = useState(false);

  const handleBlur = () => {
    setTriggerLocation(true);
  };

  useEffect(() => {
    if (triggerLocation) {
      getCoordinates(cityName).then((result) => {
        setIsCity(result);
      });
      setTriggerLocation(false);
    }
  }, [triggerLocation]);

  const handleChange = (e) => {
    setIsCity(false);
    setCityName(e.target.value);
  };

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.location}>
          <h3>Your location:</h3>
          <input
            type="text"
            className={styles.input}
            value={cityName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {isCity && <OpenWeatherMap city={cityName} />}
      </div>
    </div>
  );
}

export default Dashboard;
