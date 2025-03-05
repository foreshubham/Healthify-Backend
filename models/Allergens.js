const mongoose = require('mongoose');

const allergenSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});

const Allergen = mongoose.model('Allergen', allergenSchema);

module.exports = Allergen;
