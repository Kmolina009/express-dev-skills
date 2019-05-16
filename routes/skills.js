var express = require('express');
var router = express.Router();
var skillCntrl = require('../controllers/skills')

/* GET users listing. */
router.get('/', skillCntrl.index);
router.get('/:id', skillCntrl.show);

module.exports = router;
