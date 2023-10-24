// Define the product name (you can replace this with the actual product name)
const productName = 'Product_Name';

fetch(`http://localhost:3000/product/${productName}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        // Update your HTML elements with the received data
        document.getElementById('product-name').textContent = data.name;
        document.getElementById('carbon-emission').textContent = data.carbonEmission;
        document.getElementById('water-consumption').textContent = data.waterConsumption;
        document.getElementById('sustainable-packaging').textContent = data.sustainablePackaging;
        document.getElementById('eco-score').textContent = data.ecoScore;
    })
    .catch((error) => {
        console.error('Error fetching data from the API', error);
    });
