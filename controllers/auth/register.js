const User = require('../../models/User');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');

// Register user
const register = asyncHandler(async (req, res, next) => {
	// Extract fields from request
	const { name, email, password } = req.body;

	// Check if any field is missing
	if (!name || !email || !password) {
		res.status(400).send('Please fill in all the required fields');
		return;
	}

	// Check for password validation (apply accordingly, here is example)
	if (password && password.length < 6) {
		res.status(400).send('Password must be atlease 6 character long');
		return;
	}

	// Hash password with bcrypt
	const saltRounds = 10;
	const hashedPassword = await bcrypt.hash(password, saltRounds);

	// Check if user already exists (check with unique field)
	const isUserExists = await User.findOne({ email });
	if (isUserExists) {
		res.status(400).send('User already exists');
		return;
	}

	// Create new user and save into DB
	const user = await User.create({
		name,
		email,
		password: hashedPassword,
	});

	// If user created successfully, send the response
	if (user) {
		res.json({
			email: email,
			message: `Your account has been successfully created. Please verify your account by clicking on the verification link in the email we've just sent you`,
		});
	}
});

module.exports = register;
