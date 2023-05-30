var express = require('express');
const loginController = require('../controllers/auth/login');
var router = express.Router();

/* Login user */
router.post('/', loginController);

module.exports = router;
