'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _bluebird2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _bluebird2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // Service.js defines a service model


var ServiceSchema = new _mongoose2.default.Schema({
    User: _mongoose2.default.Schema.Types.ObjectId,
    Name: String,
    Type: String,
    Description: String,
    RedirectURL: String,
    EventURL: String,
    ClientID: String,
    ClientSecret: String,
    CreatedAt: Date,
    UpdatedAt: Date
});

/**
 * findOneByField will find a service by a single field
 * 
 * @param field String the field name
 * @param value String the field value
 * @return Promise
 */
ServiceSchema.statics.findOneByField = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(field, value) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        return _context.abrupt('return', new _bluebird2.default(function (resolve, reject) {
                            var q = {};
                            q[field] = value;
                            _this.findOne(q, function (err, service) {
                                if (err) return reject(err);
                                return resolve(service);
                            });
                        }));

                    case 1:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    function findByField(_x, _x2) {
        return _ref.apply(this, arguments);
    }

    return findByField;
}();

exports.default = _mongoose2.default.model('Service', ServiceSchema);
//# sourceMappingURL=service.js.map
