var Light = require("node-light"),
	path  = require("path"),
	polyfill = require('babel-polyfill'),
	sourceMap = require('source-map-support/register'),
	yargs = require("yargs").argv;

// load light
Light.on(path.join(__dirname, "src"), function(err, app){

	// set port
	var port = yargs.port || light.config.PORT || 1337; 

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

	// start server
	app.listen(port);
	console.log('Server started on port:' + port);
});