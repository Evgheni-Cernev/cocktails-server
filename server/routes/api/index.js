const express = require('express');
const items = require('./Items');
const cocktails = require('./Cocktails');
const ingridients = require('./Ingridients');
const auth = require('./Auth')
const user = require('./User')

const router = express.Router();

router.use('/item', items);
router.use('/cocktails', cocktails)
router.use('/ingridients', ingridients)
router.use('/auth', auth)
router.use('/user', user)

module.exports = router;