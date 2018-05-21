webpackHotUpdate(16,{

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(11);

var _promise2 = _interopRequireDefault(_promise);

var _fetch = __webpack_require__(23);

var _fetch2 = _interopRequireDefault(_fetch);

var _config = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 用户查询API
 * User: heliang
 * Date: 2018/2/27.
 */
var userQuery = {
    //查询
    list: function list(_ref) {
        var cur = _ref.cur,
            params = _ref.params;

        cur = cur == null ? 1 : cur;
        return new _promise2.default(function (resolve, reject) {
            _fetch2.default.post(_config.conf.base + '/api/user/list', {
                page: cur,
                params: params
            }).then(function (response) {
                var data = response.data;

                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    getSingle: function getSingle(uuid) {
        return new _promise2.default(function (resolve, reject) {
            _fetch2.default.get(_config.conf.base + '/api/user/single/' + uuid).then(function (response) {
                var data = response.data;

                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    getUserInfo: function getUserInfo(uuid) {
        return new _promise2.default(function (resolve, reject) {
            _fetch2.default.post(_config.conf.base + '/api/user/getUserInfo', {
                uuid: uuid
            }).then(function (response) {
                var data = response.data;

                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    //保存
    save: function save(user) {
        return new _promise2.default(function (resolve, reject) {
            _fetch2.default.post(_config.conf.base + '/api/user/save', user).then(function (response) {
                var data = response.data;

                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    del: function del(uuid) {
        return new _promise2.default(function (resolve, reject) {
            // console.log("del.....")
            _fetch2.default.get(_config.conf.base + '/api/user/delete/' + uuid).then(function (response) {
                var data = response.data;

                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    checkToken: function checkToken(token) {
        return new _promise2.default(function (resolve, reject) {
            _fetch2.default.post(_config.conf.base + '/api/checkToken', { token: token }).then(function (response) {
                var data = response.data;

                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    }
};

module.exports = userQuery;

/***/ })

})
//# sourceMappingURL=16.90c069abf7a2e7b3f6ca.hot-update.js.map