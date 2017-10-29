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
		type: [{type: String}]
	},
	created_at: {
		type: Date,
		required: true
	},
	done: {
		type: Boolean,
		required: true
	},
	done_at: {
		type: Date
	}
});

module.exports = mongoose.model('Todo', TodoSchema);