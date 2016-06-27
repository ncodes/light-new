"use strict";

/**
 * Helper functions
 */

module.exports = {

	// render a static view file
	static: function _static(viewName, data) {
		var data = data || {};
		return function (req, res) {
			return res.show(viewName, {});
		};
	}
};
//# sourceMappingURL=HelperService.js.map
