const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Connect to a MongoDB database using Mongoose
mongoose.connect('mongodb://localhost/your_database_name', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to the MongoDB database');
});

// Create a schema and model for your product data
const productSchema = new mongoose.Schema({
    name: String,
    carbonEmission: String,
    waterConsumption: String,
    sustainablePackaging: String,
    ecoScore: String,
});

const Product = mongoose.model('Product', productSchema);

// Define CORS settings
const cors = require('cors');
app.use(cors());

// API route to get product metrics
app.get('/product/:productName', (req, res) => {
    const productName = req.params.productName;

    // Query the database for the product
    Product.findOne({ name: productName }, (err, product) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json(product);
    });
});

app.listen(port, () => {
    console.log(`API server is running on port ${port}`);
});
