import React, { useEffect, useState } from "react";
import { getAirVisual } from "../../api/airvisual";
import OpenWeatherMap from "../OpenWeatherMap/OpenWeatherMap";

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
    <OpenWeatherMap />
  </div>;
}

export default Dashboard;
