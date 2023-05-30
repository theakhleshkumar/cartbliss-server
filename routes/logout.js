var express = require('express');
const logoutController = require('../controllers/auth/logout');
var router = express.Router();

/* Logout user */
router.post('/', logoutController);

module.exports = router;
