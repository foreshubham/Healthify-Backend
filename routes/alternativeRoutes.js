const express = require('express');
const { createAlternative } = require('../controllers/alternativeController');

const router = express.Router();

router.post('/', createAlternative);

module.exports = router;
