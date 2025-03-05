const Alternative = require('../models/Alternatives');

exports.createAlternative = async (req, res) => {
  try {
    const { originalIngredient, alternativeIngredient } = req.body;

    const alternative = new Alternative({ originalIngredient, alternativeIngredient });
    await alternative.save();

    res.status(201).json({ alternative });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
