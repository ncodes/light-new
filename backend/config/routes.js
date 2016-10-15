/**
 * Define routes.
 * models, controllers and services are accessible from here. e.g controllers.user.getUser. Other
 * globally accessible modules are _ (lodash), async, request
 */

var express	= require('express');  

// define your routers
var rootRouter = express.Router();

// define route
rootRouter.get('/', services.helper.static('index.html'));
rootRouter.get('/user', controllers.user.index);
//

// exports routers
module.exports.root = rootRouter;