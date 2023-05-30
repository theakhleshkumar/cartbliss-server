var express = require('express');
const registerController = require('../controllers/auth/register');
var router = express.Router();

/* Register user */
router.post('/', registerController);

module.exports = router;
