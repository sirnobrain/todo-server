'use strict'

const jwt = require('jsonwebtoken');

module.exports = data => {
	return new Promise((resolve, reject) => {
		jwt.sign(data, process.env.JWT_SECRET_KEY, (err, token) => {
			if (err) reject(err);
			else resolve(token);
		});
	});
}