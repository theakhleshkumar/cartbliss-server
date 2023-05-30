var express = require('express');
const indexController = require('../controllers');
var router = express.Router();

/* GET home page. */
router.get('/', indexController);

module.exports = router;
