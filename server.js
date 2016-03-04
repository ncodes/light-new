var Light = require("node-light")

// load light
Light.on(__dirname, function(err, app){

	// handle 404 errors
	app.use(function(req, res, next) {
		light.log.error("Page not found");
		res.notFound();
	});

	// delegate error handling to custom error handler
	app.use(function(err, req, res, next) {
		light.log.error(err);
		res.serverError(err);
	});
});