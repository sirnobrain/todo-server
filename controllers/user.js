'use strict'

const models = require('./../models');

class User {
	static signin(req, res) {
		models.FbUser.getNameAndId(req.headers.fb_token, req.headers.fb_id)
		.then(nameAndId => {
			res.status(200).send(nameAndId);
		})
		.catch(err => {
			res.status(500).send(err);
		});
	}
}

module.exports = User;