'use strict'

const models = require('./../models');
const genResponse = require('./../helpers/generate-response');

class User {
	static signin(req, res) {
		models.FbUser.getNameAndId(req.headers.fb_token, req.headers.fb_id)
		.then(nameAndId => {
			const resp = genResponse(200, 'get fb user name and id', nameAndId, null);
			res.status(200).send(resp);
		})
		.catch(err => {
			const resp = genResponse(500, 'failed to get fb user name and id', null, err);
			res.status(500).send(resp);
		});
	}
}

module.exports = User;