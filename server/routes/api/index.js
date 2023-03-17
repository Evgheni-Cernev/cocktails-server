const express = require('express');
const items = require('./Items');
const cocktails = require('./Cocktails');
const ingridients = require('./Ingridients');

const router = express.Router();

router.use('/item', items);
router.use('/cocktails', cocktails)
router.use('/ingridients', ingridients)

module.exports = router;