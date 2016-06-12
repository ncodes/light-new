

/**
 * Index action
 * @param  {object} req request object
 * @param  {object} res response object
 * @return {undefined}   
 */
export function index(req, res) {
	res.send("Hi there")
}


/**
 * Profile action
 * @param  {object} req request object
 * @param  {object} res response object
 * @return {undefined}   
 */
export function profile(req, res) {
	console.log("my profile")
}

