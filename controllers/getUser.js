const User = require('../models/User');
const asyncHandler = require('express-async-handler');

// Get user details
const getUser = asyncHandler(async (req, res, next) => {
	// Fetch user from DB
	const user = await User.findById(req.user._id);

	// Check if user exists
	if (!user) {
		res.status(404).send('User not found.');
	}

	// Send response
	const { name, email } = user;
	res.json({
		name,
		email,
	});
});

module.exports = getUser;
