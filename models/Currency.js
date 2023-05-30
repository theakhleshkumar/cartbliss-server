const mongoose = require('mongoose');

// Currency schema
const currencySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please add currency name'],
		},
		symbol: {
			type: String,
			required: false,
		},
		status: {
			type: String,
			required: false,
			lowercase: true,
			default: 'show',
			enum: ['show', 'hide'],
		},
	},
	{
		timestamps: true,
	},
);

// Currency Model
const Currency = mongoose.model('Currency', currencySchema);

module.exports = Currency;
