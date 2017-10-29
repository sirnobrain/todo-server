'use strict'

const genResponse = require('./../helpers/generate-response');

module.exports = (req, res, next) => {
	if (req.body._id) {
		next();
	} else {
		const resp = genResponse(400, 'failed to perform operation', null, 'missing Todo ID');
		res.status(400).send(resp);
	}
};