const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Import Routes
const productRoutes = require('./routes/productRoutes');
const ingredientRoutes = require('./routes/ingredientRoutes');
const allergenRoutes = require('./routes/allergenRoutes');
const alternativeRoutes = require('./routes/alternativeRoutes');

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/health-product-db', { useNewUrlParser: true, useUnifiedTopology: true });

// Use Routes
app.use('/api/products', productRoutes);
app.use('/api/ingredients', ingredientRoutes);
app.use('/api/allergens', allergenRoutes);
app.use('/api/alternatives', alternativeRoutes);

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
