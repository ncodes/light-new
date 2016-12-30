import validator from 'validator'
import Promise from 'bluebird'
import models from '../models'


/**
 * Validation method for index() action
 * @param req The request body
 * @param doneCb The callback to call when validation is complete
 * @returns Promise
 */
function validateIndexAction(req) {
    return new Promise(async function (resolve, reject) {
        
        var responseType = req.query.response_type
        var clientID = req.query.client_id
        
        if (validator.isEmpty(responseType || "")) {
            return resolve({ field: 'response_type', msg: 'Response type is required' })
        } else if (responseType.toLowerCase() !== "code") {
            return resolve({ field: 'response_type', msg: 'Response type is not valid' })
        } else if (validator.isEmpty(clientID || "")) {
            return resolve({ field: 'response_type', msg: 'Client ID is required' })
        }
        
        // find service by client id
        let service = await models.service.findOneByField("client_id", clientID)
        if (!service) {
            
        }
    })
}

/**
 * Index action
 * @param  {object} req request object
 * @param  {object} res response object
 */
export async function index(req, res) {
    
    // validate request
    let err = await validateIndexAction(req)
    if (err) {
        return res.show('index', { error: err.msg })
    }
    
    return res.show('index')
}
