const apiKey = "12e9c1fe-1429-49a7-82af-0cbac666ac4c";
const endpoint = "https://api.airvisual.com/v2/nearest_city";

const url = new URL(endpoint);
url.searchParams.append("key", apiKey);

export async function getAirVisual() {
  return await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return Promise.resolve(data.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// {
//   "status": "success",
//   "data": {
//       "city": "Riga",
//       "state": "Riga",
//       "country": "Latvia",
//       "location": {
//           "type": "Point",
//           "coordinates": [
//               24.115872000000003,
//               56.950605999509605
//           ]
//       },
//       "current": {
//           "pollution": {
//               "ts": "2023-05-17T15:00:00.000Z", //timestamp
//               "aqius": 29, //AQI value based on US EPA standard
//               "mainus": "p2", //main pollutant for US AQI
//               "aqicn": 10, //AQI value based on China MEP standard
//               "maincn": "p2"  //main pollutant for Chinese AQI
//           },
//           "weather": {
//               "ts": "2023-05-17T16:00:00.000Z",
//               "tp": 13,
//               "pr": 1015,
//               "hu": 56,
//               "ws": 4.63,
//               "wd": 230,
//               "ic": "02d"
//           }
//       }
//   }
// }
