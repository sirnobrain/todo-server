'use strict'

const mongoose = require('mongoose');

let TodoSchema = new mongoose.Schema({
	fb_id: {
		type: String,
		required: true
	},
	text: {
		type: String,
		required: true
	},
	tags: {
		type: [String]
	},
	created_at: {
		type: Date,
		default: Date.now
	},
	done: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('Todo', TodoSchema);