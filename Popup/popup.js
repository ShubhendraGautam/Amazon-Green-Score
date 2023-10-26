


const data = 'Your string data here';
const requestOptions = {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json', // Set the Content-Type header if your API expects JSON
    },
    body: JSON.stringify({ data }), // Convert your string data to JSON if needed
  };



// popup.js
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.data) {
      console.log(message.data); // This will log "Data from File1"
    }
  });
  

fetch("http://localhost:3000/product", requestOptions)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        // Update your HTML elements with the received data
        // document.getElementById('product-name').textContent = data.name;
        // document.getElementById('carbon-emission').textContent = data.carbonEmission;
        // document.getElementById('water-consumption').textContent = data.waterConsumption;
        // document.getElementById('sustainable-packaging').textContent = data.sustainablePackaging;
        // document.getElementById('eco-score').textContent = data.ecoScore;
        console.log("Done")
    })
    .catch((error) => {
        console.error('Error fetching data from the API', error);
    });
