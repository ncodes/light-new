'use strict';

/**
 * Extracted from sails.js
 *
 * 500 (Server Error) Response
 */
module.exports = function serverError(data, options) {

    // Get access to `req`, `res`
    var req = light._req;
    var res = light._res;

    res.status(500);

    if (!data && !options) {
        return res.show('errors/500');
    }

    // log error
    light.log.error(data);

    // if error is Error()
    if (data instanceof Error) {

        if (req.headers['content-type'] == "application/json") {
            return res.json({
                type: "api_error",
                message: "something went wrong at our end"
            });
        }

        return res.show('errors/500');
    }

    // error: json
    if (_.isPlainObject(data)) {
        return res.json(data);
    }
};
//# sourceMappingURL=serverError.js.map
