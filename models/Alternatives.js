const mongoose = require('mongoose');

const alternativeSchema = new mongoose.Schema({
  originalIngredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient', required: true },
  alternativeIngredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient', required: true },
});

const Alternative = mongoose.model('Alternative', alternativeSchema);

module.exports = Alternative;
