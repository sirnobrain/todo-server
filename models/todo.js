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
	done: {
		type: Boolean,
		default: false
	}
}, 
{
	timestamps: true
});

module.exports = mongoose.model('Todo', TodoSchema);