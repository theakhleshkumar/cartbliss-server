const mongoose = require('mongoose');

// Discount schema
const discountSchema = new mongoose.Schema({
	type: {
		type: String,
		required: false,
	},
	value: {
		type: Number,
		required: false,
	},
});

// Coupon schema
const couponSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, 'Please add a title'],
		},
		logo: {
			type: String,
			required: false,
		},
		code: {
			type: String,
			required: [true, 'Please add coupon code'],
		},
		startTime: {
			type: Date,
			required: false,
			default: Date.now(),
		},
		endTime: {
			type: Date,
			required: [true, 'Please add coupon expiry'],
		},
		discountType: {
			type: discountSchema,
			required: false,
		},
		minimumAmount: {
			type: Number,
			required: false,
		},
		productType: {
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

// Coupon Model
const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;
