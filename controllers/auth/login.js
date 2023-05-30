const User = require('../../models/User');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Login user
const login = asyncHandler(async (req, res, next) => {
	// Extract email and password from request
	const { email, password } = req.body;

	// Check if any field is missing
	if (!email || !password) {
		res.status(400).send('Please fill in all the required fields');
		return;
	}

	// Check if user exists
	const user = await User.findOne({ email });
	if (!user) {
		res.status(404).send('User not found');
		return;
	}

	// Check if password matched
	const isPassMatched = await bcrypt.compare(password, user.password);

	if (!isPassMatched) {
		res.status(400).send('Inavlid email or password');
		return;
	}

	// Generate JWT token
	const loginToken = jwt.sign(
		{ id: user._id, name: user.name, email: user.email },
		process.env.JWT_SECRET_KEY,
	);

	// Send token with HTTP-only cookie
	res.cookie('login_token', loginToken, { httpOnly: true });

	// Send response
	if (user && isPassMatched) {
		const { _id, name, email } = user;
		res.json({
			_id,
			name,
			email,
		});
	}
});

module.exports = login;
