// Function to fetch data from the API
function fetchData() {
  fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
          // Get reference to data container
          console.log(data);
          const dataContainer = document.getElementById("container");

          // Loop through each data item and create a card
          data.forEach((item) => {
              // Create card HTML structure
              const card = `
                  <div class="col-md-4 mb-4 mt-4" style="border-radius:100px">
                      <div class="card h-100">
                          <div class="card-body text-center p-0" style="background:linear-gradient(to right, #d6c5a0, #435554)">
                            <div class="mb-4 py-3 text-center border-bottom bg-dark">
                             <h5 class="card-title text-light">${item.name.common}</h5>
                            </div>
                              <div class='py-3'>
                              <img class='w-50 mb-5 h-20' src=${item.flags.svg} alt="">
                              <p class="card-text text-light">Capital: ${item.capital}</p>
                              <p class="card-text text-light">Region: ${item.region}</p>
                              <p class="card-text text-light">Country code: ${item.flag}</p></div>
                              <button type="button" class="btn btn-outline-light text-light my-4" onclick='fetchWeatherData(${JSON.stringify(item.latlng)})'>Click for Weather</button>
                          </div>
                      </div>
                  </div>
              `;

              // Append card to data container
              dataContainer.innerHTML += card;
          });
      })
      .catch((error) => {
          console.error("Error fetching data:", error);
      });
}

// Call the function to fetch data when the script loads
fetchData();

function fetchWeatherData(latlng) {
  const [lat, lon] = latlng;
  console.log(latlng);
  const apiKey = `df918a42070ff488016a1b0cd7ca08d2`;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
          if (data.cod === "404") {
              alert("City not found");
              return;
          }

          console.log(data);

          const cityName = data.name;
          const description = data.weather[0].description;
          const temperature = data.main.temp;

          document.getElementById("cityName").innerText = `City: ${cityName}`;
          document.getElementById("description").innerText = `Weather: ${description}`;
          document.getElementById("temperature").innerText = `Temperature: ${temperature}°C`;

          const weatherModal = new bootstrap.Modal(document.getElementById('weatherModal'));
          weatherModal.show();
      })
      .catch((error) => {
          console.error("Error fetching weather data:", error);
          alert("An error occurred while fetching the weather data.");
      });
}