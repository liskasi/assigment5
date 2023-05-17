import React, { useEffect, useState } from "react";
import { getAirVisual } from "../../api/airvisual";
import WeatherData from "../WeatherData/WeatherData";

function Dashboard() {
    const [airVisualData, setAirVisualData] = useState(null);

    useEffect(() => {
        getAirVisual().then(
            (data) => {
                setAirVisualData(data);
            }
        )
    }, []);

  return <div>
    <WeatherData />
  </div>;
}

export default Dashboard;
