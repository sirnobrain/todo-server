'use strict'

const FB = require('fb');

const fb = new FB.Facebook({
	appId: '167628840487134',
	appSecret: process.env.FB_APP_SECRET,
	version: 'v2.10'
});

class FbUser {
	static getNameAndId(fbToken, fbId) {
		return new Promise((resolve, reject) => {
			FB.api('me', {fields: ['id', 'name'], access_token: fbToken }, nameAndId => {
				if (nameAndId.id === fbId) resolve(nameAndId);
				else reject('Token and Id Do Not Match');
			});
		});
	}
}


module.exports = FbUser;