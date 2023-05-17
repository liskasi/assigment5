const apiKey = '12e9c1fe-1429-49a7-82af-0cbac666ac4c';
const endpoint = 'https://api.airvisual.com/v2/nearest_city';

// Build the API request URL with any necessary parameters
const url = new URL(endpoint);
url.searchParams.append('key', apiKey);

// Make the API request
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Process the data received from the API
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occur during the API request
    console.error('Error:', error);
  });
