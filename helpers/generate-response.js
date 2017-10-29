'use strict'

module.exports = (status, message, data, err) => {
	return {
		status: status,
		message: status === 200 ? `Success: ${message}.` : `Error: ${message}.`,
		data: data,
		err: err 
	}
};