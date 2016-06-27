"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
exports.profile = profile;


/**
 * Index action
 * @param  {object} req request object
 * @param  {object} res response object
 * @return {undefined}   
 */
function index(req, res) {
  res.send("Hi there");
}

/**
 * Profile action
 * @param  {object} req request object
 * @param  {object} res response object
 * @return {undefined}   
 */
function profile(req, res) {
  console.log("my profile");
}
//# sourceMappingURL=UserController.js.map
