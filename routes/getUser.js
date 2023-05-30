var express = require('express');
const getUserController = require('../controllers/getUser');
var router = express.Router();

/* Get user details */
router.get('/', getUserController);

module.exports = router;
