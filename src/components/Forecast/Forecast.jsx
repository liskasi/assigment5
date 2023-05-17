import React, { useEffect, useState } from "react";
import { getForecast } from "../../api/openweathermap";

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
    <div>
      {hourlyForecast.map(({ dt_txt, main }, index) => (
        <div key={index}>
          <div>{main.temp}</div>
          <div>{dt_txt}</div>
          <br />
        </div>
      ))}
    </div>
  );
}

export default HourlyForecast;
