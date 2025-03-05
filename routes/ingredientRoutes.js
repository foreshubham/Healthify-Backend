const express = require('express');
const { createIngredient, getIngredientDetails } = require('../controllers/ingredientController');

const router = express.Router();

router.post('/', createIngredient);
router.get('/:id', getIngredientDetails);

module.exports = router;
