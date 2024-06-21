// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Configure it: GET-request for the URL
xhr.open('GET', 'https://restcountries.com/v3.1/all', true);

// Set up a function to handle the response
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Parse the JSON response
    var data = JSON.parse(xhr.responseText);
    
    // Log the data to the console (or handle it as needed)
    // console.log(data);
    console.log(data[0].flag);
    console.log(data[0].name.common);
    console.log(data[0].region);
    console.log(data[0].subregion);
    console.log(data[0].population);
  } else {
    console.error('Request failed. Returned status of ' + xhr.status);
  }
};

// Set up a function to handle errors
xhr.onerror = function () {
  console.error('Request failed.');
};

// Send the request
xhr.send();