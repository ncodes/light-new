"use strict"

var Light = require("node-light"),
	path  = require("path"),
	polyfill = require('babel-polyfill'),
	sourceMap = require('source-map-support/register'),
	models = require('./src/app/models').default,
	express = require('express'),
	yargs = require("yargs").argv;


// load light
Light.on(path.join(__dirname, "src"),  function(err, app){

	// set port
	var port = yargs.port || light.config.PORT || 1337; 

	app.use('/bower_components',  express.static(__dirname + '/bower_components'));
	app.use('/node_modules',  express.static(__dirname + '/node_modules'));

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
	
	models.connectToMongo().then(function(){
		light.log.info('Server started on port:' + port);
		app.listen(port);	
	}).catch(function(err){
		light.log.error("failed to connect to mongo", err);
		process.exit(-1)
	})
});