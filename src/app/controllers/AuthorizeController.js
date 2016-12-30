'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.index = undefined;

/**
 * Index action
 * @param  {object} req request object
 * @param  {object} res response object
 */
var index = exports.index = function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(req, res) {
        var err;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return validateIndexAction(req);

                    case 2:
                        err = _context2.sent;

                        if (!err) {
                            _context2.next = 5;
                            break;
                        }

                        return _context2.abrupt('return', res.show('index', { error: err.msg }));

                    case 5:
                        return _context2.abrupt('return', res.show('index'));

                    case 6:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function index(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _bluebird2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _bluebird2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Validation method for index() action
 * @param req The request body
 * @param doneCb The callback to call when validation is complete
 * @returns Promise
 */
function validateIndexAction(req) {
    return new _bluebird2.default(function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(resolve, reject) {
            var responseType, clientID, service;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            responseType = req.query.response_type;
                            clientID = req.query.client_id;

                            if (!_validator2.default.isEmpty(responseType || "")) {
                                _context.next = 6;
                                break;
                            }

                            return _context.abrupt('return', resolve({ field: 'response_type', msg: 'Response type is required' }));

                        case 6:
                            if (!(responseType.toLowerCase() !== "code")) {
                                _context.next = 10;
                                break;
                            }

                            return _context.abrupt('return', resolve({ field: 'response_type', msg: 'Response type is not valid' }));

                        case 10:
                            if (!_validator2.default.isEmpty(clientID || "")) {
                                _context.next = 12;
                                break;
                            }

                            return _context.abrupt('return', resolve({ field: 'response_type', msg: 'Client ID is required' }));

                        case 12:
                            _context.next = 14;
                            return _models2.default.service.findOneByField("client_id", clientID);

                        case 14:
                            service = _context.sent;

                            console.log(service);

                        case 16:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }());
}
//# sourceMappingURL=AuthorizeController.js.map
