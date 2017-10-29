'use strict'

const models = require('./../models');
const genResponse = require('./../helpers/generate-response');
const genJwtoken = require('./../helpers/generate-jwtoken');

class User {
	static signin(req, res) {
		models.FbUser.getNameAndId(req.headers.fb_token, req.headers.fb_id)
		.then(FbNameAndId => {
			return genJwtoken(FbNameAndId);
		})
		.then(jwtoken => {
			const data = {jwtoken};
			const resp = genResponse(200, 'retireve token from server', data, null);
			res.status(200).send(resp);
		})
		.catch(err => {
			const resp = genResponse(500, 'failed to retrieve token from server', null, err);
			res.status(500).send(resp);
		});
	}
}

module.exports = User;