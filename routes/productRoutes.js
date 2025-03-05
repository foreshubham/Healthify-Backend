const express = require('express');
const { createProduct, getProductDetails } = require('../controllers/productController');

const router = express.Router();

router.post('/', createProduct);
router.get('/:barcode', getProductDetails);

module.exports = router;
