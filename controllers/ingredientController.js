const Ingredient = require('../models/Ingredients');

exports.createIngredient = async (req, res) => {
  try {
    const { scientificName, commonName, healthImpact } = req.body;
    
    const ingredient = new Ingredient({ scientificName, commonName, healthImpact });
    await ingredient.save();

    res.status(201).json({ ingredient });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getIngredientDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const ingredient = await Ingredient.findById(id);

    if (!ingredient) return res.status(404).json({ error: 'Ingredient not found' });

    res.status(200).json({ ingredient });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
