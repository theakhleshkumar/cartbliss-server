const asyncHandler = require('express-async-handler');

// Logout user
const logout = asyncHandler(async (req, res, next) => {
	// Delete the login cookie
	res.cookie('login_token', '', { expires: new Date(0), httpOnly: true });
	res.send('Logout Successfully');
});

module.exports = logout;
