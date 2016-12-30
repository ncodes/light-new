'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _service = require('./service');

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Connect to mongo database
 * 
 * @export
 * @returns Promise
 */
function connectToMongo() {
    return new _bluebird2.default(function (resolve, reject) {
        _mongoose2.default.connect(light.config.database.MONGO_URL);
        _mongoose2.default.connection.on('error', function (err) {
            return reject(err);
        });
        _mongoose2.default.connection.on('connected', function () {
            return resolve(reject);
        });
    });
}

exports.default = {
    connectToMongo: connectToMongo,
    service: _service2.default
};
//# sourceMappingURL=index.js.map
