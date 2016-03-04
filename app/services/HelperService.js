/**
 * Helper functions
 */

module.exports = {

	// render a static view file
 	static: function(viewName, data) {
 		var data = data || {}
	 	return function(req, res) {
	 		return res.show(viewName, {})
	 	}
	}
}