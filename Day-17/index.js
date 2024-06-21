// script.js

// Function to fetch data from the API
function fetchData() {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      // Handle the data (here we assume data is an array of objects)
      console.log(data);

      // Get reference to data container
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
                                <button type="button" class="btn btn-outline-light text-light my-4">click for Weather</button>
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
