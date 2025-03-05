const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  barcode: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }],
  allergens: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Allergen' }],
  alternatives: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Alternative' }],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
