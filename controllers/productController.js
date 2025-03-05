const Product = require('../models/Products');

exports.createProduct = async (req, res) => {
  try {
    const { barcode, name, description, ingredients, allergens, alternatives } = req.body;

    const product = new Product({ barcode, name, description, ingredients, allergens, alternatives });
    await product.save();

    res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProductDetails = async (req, res) => {
  try {
    const { barcode } = req.params;
    const product = await Product.findOne({ barcode }).populate('ingredients allergens alternatives');
    
    if (!product) return res.status(404).json({ error: 'Product not found' });

    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
