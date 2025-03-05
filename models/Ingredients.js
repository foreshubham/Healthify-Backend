const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  scientificName: { type: String, required: true },
  commonName: { type: String, required: true },
  healthImpact: { type: String, enum: ['Good', 'Bad', 'Neutral'] }, // Good for health, bad for health, or neutral
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;
