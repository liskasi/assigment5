import React, { useEffect, useState } from "react";
import { getAirVisual } from "../../api/airvisual";
import OpenWeatherMap from "../OpenWeatherMap/OpenWeatherMap";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const [airVisualData, setAirVisualData] = useState(null);

  useEffect(() => {
    getAirVisual().then((data) => {
      setAirVisualData(data);
    });
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h3>Your location: Riga</h3>
        <OpenWeatherMap />
      </div>
    </div>
  );
}

export default Dashboard;
