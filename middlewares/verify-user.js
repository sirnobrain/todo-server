'use strict'

const verifyJwtoken = require('./../helpers/verify-jwtoken');
const genResponse = require('./../helpers/generate-response');

module.exports = (req, res, next) => {
	const jwtoken = req.headers.jwtoken ? req.headers.jwtoken : null;

	if (jwtoken) {
		verifyJwtoken(jwtoken)
		.then(fbId => {
			req.headers.user_fb_id = fbId;
			next();
		})
		.catch(err => {
			if (err && err.name === 'TokenExpiredError') {
				const resp = genResponse(401, 'token expired', null, err);
				res.status(401).send(resp);
			} else if (err && err.name === 'JsonWebTokenError') {
				const resp = genResponse(403, 'token error', null, err);
				res.status(403).send(resp);
			} else {
				const resp = genResponse(400, 'token error', null, err);
				res.status(400).send(resp);
			}
		});
	} else {
		const resp = genResponse(400, 'have not signed up/signed in', null, 'Authentication error: no token found');
		res.status(400).send(resp);
	}
};