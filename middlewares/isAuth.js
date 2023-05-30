const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const isAuth = asyncHandler(async (req, res, next) => {
	// Extract login_token cookie from req
	const loginToken = req.cookies.login_token;

	// Check if cookie exists
	if (!loginToken) {
		res.status(401).send('Authentication required. Please log in.');
	}

	// Verify token with JWT
	const userToBeVerified = jwt.verify(loginToken, process.env.JWT_SECRET_KEY);

	// Check if any above user exists in our DB
	const user = await User.findById(userToBeVerified.id);

	if (!user) {
		res.status(401).send('You are not authorized 🚫');
		return;
	}

	// Add user to request object to be used by next middlewares
	req.user = user;

	next();
});

module.exports = isAuth;
