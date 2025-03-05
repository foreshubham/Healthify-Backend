const express = require('express');
const { createAllergen } = require('../controllers/allergenceController');

const router = express.Router();

router.post('/', createAllergen);

module.exports = router;
