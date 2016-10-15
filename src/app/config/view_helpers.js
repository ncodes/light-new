'use strict';

/**
 * View helper functions
 */

module.exports = {

	// expose app config to view
	appConfig: function appConfig() {
		return light.config;
	},

	// log debug message
	log: function log(m) {
		light.log.debug(m);
	},

	// extracts the first error message from form validation error object using its parameter name
	// example error object: [ { param: 'email', msg: 'Please provide your email.', value: '' } ]
	getFieldErrMsg: function getFieldErrMsg(errors, param) {
		var errObj = _.findWhere(errors, { 'param': param });
		var msg = _.result(errObj, 'msg');
		return msg ? msg : '';
	},

	// http helper
	http: {
		getReq: function getReq() {
			return light._req;
		}
	},

	// session helper (only read-only access)
	session: {

		// get session data by key
		get: function get(key) {
			return light._req.session[key];
		},

		// get flash data by key
		getFlash: function getFlash(key) {
			if (light._req.flash == undefined) throw new Error("flash module not installed");
			return light._req.flash(key);
		}
	}
};
//# sourceMappingURL=view_helpers.js.map
