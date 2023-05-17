const endpoint = "https://overpass-api.de/api/interpreter";
const query = `
[out:json];
area[name="Rīga"]->.searchArea;
(
  node(area.searchArea)["amenity"="recycling"];
  node(area.searchArea)["amenity"="bicycle_rental"];
  node(area.searchArea)["amenity"="car_sharing"];
  node(area.searchArea)["amenity"="electric_car_charging"];
  node(area.searchArea)["amenity"="charging_station"];
  node(area.searchArea)["amenity"="community_centre"];
  node(area.searchArea)["amenity"="library"];
  node(area.searchArea)["amenity"="park"];
  node(area.searchArea)["amenity"="garden"];
  node(area.searchArea)["amenity"="restaurant"]["diet:vegan"="yes"];
  node(area.searchArea)["amenity"="restaurant"]["diet:vegetarian"="yes"];
  node(area.searchArea)["amenity"="restaurant"]["organic"="yes"];
  node(area.searchArea)["shop"="organic"];
  node(area.searchArea)["shop"="farm"];
);
out center;
`;

// Make the API request
fetch(endpoint, {
  method: "POST",
  body: query,
})
  .then((response) => response.json())
  .then((data) => {
    // Process the data received from the API
    console.log(data);
  })
  .catch((error) => {
    // Handle any errors that occur during the API request
    console.error("Error:", error);
  });
