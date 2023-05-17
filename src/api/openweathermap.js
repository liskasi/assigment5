let apiKey = "531af2461f50b8bd82618834fb7e0015";
let city = "riga";
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
