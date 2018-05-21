webpackHotUpdate(16,{

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(38);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(39);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = __webpack_require__(40);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _mutations;

var _mutaionTypes = __webpack_require__(41);

var types = _interopRequireWildcard(_mutaionTypes);

var _rightQuery = __webpack_require__(482);

var _rightQuery2 = _interopRequireDefault(_rightQuery);

var _roleQuery = __webpack_require__(201);

var _roleQuery2 = _interopRequireDefault(_roleQuery);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
    menuStructure: [],
    fetching: true,
    message: {
        flag: 0,
        err: ''
    }
};

var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, types.FETCH_MENU_RIGHT, function (state, payload) {
    console.log("FETCH_MENUS>>>>" + payload);
    state.fetching = false;
    state.menuStructure = payload;
}), (0, _defineProperty3.default)(_mutations, types.RIGHT_SAVE, function (state, payload) {
    var mes = payload;
    if (mes == "ok") {
        state.message.flag = 1;
    } else {
        state.message.flag = 0;
        state.message.err = mes;
    }
}), _mutations);

var actions = {
    fetchRightMenuList: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2, _ref3) {
            var commit = _ref2.commit;
            var roleId = _ref3.roleId,
                fn = _ref3.fn;
            var menuStructure;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _rightQuery2.default.listByRank(roleId);

                        case 2:
                            menuStructure = _context.sent;

                            commit(types.FETCH_MENU_RIGHT, menuStructure);
                            fn == null ? function () {} : fn(menuStructure);

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function fetchRightMenuList(_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }(),
    rightSave: function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref5, _ref6) {
            var commit = _ref5.commit;
            var roleId = _ref6.roleId,
                menus = _ref6.menus,
                fn = _ref6.fn;
            var message;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return _rightQuery2.default.saveRightMenu(roleId, menus);

                        case 2:
                            message = _context2.sent;

                            commit(types.RIGHT_SAVE, message);
                            fn == null ? function () {} : fn();

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function rightSave(_x3, _x4) {
            return _ref4.apply(this, arguments);
        };
    }()

};
var getters = {
    getRightMenuList: function getRightMenuList(state) {
        return state.menuStructure;
    },
    getRightSaveState: function getRightSaveState(state) {
        return state;
    }
};

module.exports = {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
};

/***/ })

})
//# sourceMappingURL=16.65e7d2a35854dea15ceb.hot-update.js.map