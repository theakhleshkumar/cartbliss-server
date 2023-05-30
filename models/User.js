const mongoose = require('mongoose');

// User schema
const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please add a name'],
		},
		email: {
			type: String,
			unique: true,
			required: [true, 'Please add an email'],
			lowercase: true,
			match: [
				/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
				'Please enter a valid email address',
			],
		},
		password: {
			type: String,
			required: [true, 'Please add a password'],
		},
		phone: {
			type: String,
			required: false,
		},
		image: {
			type: String,
			required: false,
		},
		address: {
			type: String,
			required: false,
		},
		status: {
			type: String,
			required: false,
			default: 'Active',
			enum: ['Active', 'Inactive'],
		},
		role: {
			type: String,
			required: true,
			default: 'Admin',
			enum: [
				'Super Admin',
				'Admin',
				'Director',
				'CEO',
				'Manager',
				'Accountant',
			],
		},
		joiningDate: {
			type: Date,
			required: false,
		},
	},
	{
		timestamps: true,
	},
);

// User Model
const User = mongoose.model('User', userSchema);

module.exports = User;
