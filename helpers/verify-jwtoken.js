'use strict'

const jwt = require('jsonwebtoken');

module.exports = (jwtoken) => {
	return new Promise((resolve, reject) => {
		jwt.verify(jwtoken, process.env.JWT_SECRET_KEY, (err, fbId) => {
			if (err) reject(err);
			else resolve(fbId);
		});
	});
}