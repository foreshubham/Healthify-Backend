const Allergen = require('../models/Allergens');

exports.createAllergen = async (req, res) => {
  try {
    const { name, description } = req.body;

    const allergen = new Allergen({ name, description });
    await allergen.save();

    res.status(201).json({ allergen });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
