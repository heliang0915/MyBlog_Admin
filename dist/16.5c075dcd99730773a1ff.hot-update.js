webpackHotUpdate(16,{

/***/ 200:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (39:0)\n\n\u001b[0m \u001b[90m 37 | \u001b[39m                uuid\n \u001b[90m 38 | \u001b[39m            })\u001b[33m.\u001b[39mthen((response)\u001b[33m=>\u001b[39m{\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 39 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\n \u001b[90m    | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 40 | \u001b[39m\n \u001b[90m 41 | \u001b[39m\u001b[33m===\u001b[39m\u001b[33m===\u001b[39m\u001b[33m=\u001b[39m\n \u001b[90m 42 | \u001b[39m\u001b[33m>>>\u001b[39m\u001b[33m>>>\u001b[39m\u001b[33m>\u001b[39m dfde3b1142cbec06c5d1f8f4f54dd5c040c6f7ce\u001b[0m\n");

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(11);

var _promise2 = _interopRequireDefault(_promise);

var _fetch = __webpack_require__(23);

var _fetch2 = _interopRequireDefault(_fetch);

var _config = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 角色查询API
 * User: heliang
 * Date: 2018/2/27.
 */
var roleQuery = {
    //查询
    list: function list(_ref) {
        var cur = _ref.cur,
            params = _ref.params;

        cur = cur == null ? 1 : cur;
        return new _promise2.default(function (resolve, reject) {
            _fetch2.default.post(_config.conf.base + '/api/role/list', {
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
            _fetch2.default.get(_config.conf.base + '/api/role/single/' + uuid).then(function (response) {
                var data = response.data;

                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    //保存
    save: function save(role) {
        return new _promise2.default(function (resolve, reject) {
            _fetch2.default.post(_config.conf.base + '/api/role/save', role).then(function (response) {
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
            _fetch2.default.get(_config.conf.base + '/api/role/delete/' + uuid).then(function (response) {
                var data = response.data;

                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    }
};

module.exports = roleQuery;

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(237);

var _index2 = _interopRequireDefault(_index);

var _lib = __webpack_require__(241);

var _lib2 = _interopRequireDefault(_lib);

exports.createApp = createApp;

var _vue = __webpack_require__(44);

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__(244);

var _App2 = _interopRequireDefault(_App);

var _router = __webpack_require__(251);

var _store = __webpack_require__(258);

var _store2 = _interopRequireDefault(_store);

var _config = __webpack_require__(22);

var _userQuery = __webpack_require__(200);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createApp() {
    _vue2.default.use(_lib2.default);
    _vue2.default.config.errorHandler = function (err, vm) {
        console.log('Vue出现错误%s', err);
    };
    var router = (0, _router.createRouter)();
    router.beforeEach(function (to, from, next) {
        if (_config.isServer == false) {
            var token = "";
            var cookieAry = document.cookie.split(";");
            if (cookieAry.length) {
                cookieAry.forEach(function (cookie) {
                    var info = cookie.split("=");
                    if (info[0].trim().toString() == "token") {
                        token = info[1];
                    }
                });
            }
            if (to.path == "/login") {
                next();
            } else {
                (0, _userQuery.checkToken)(token).then(function (data) {
                    if (data == true) {
                        next();
                    } else {
                        //跳转登录
                        next({
                            name: 'login'
                        });
                    }
                });
            }
        } else {
            next();
        }
        // console.log("isServer>>>>"+isServer);
    });
    var app = new _vue2.default({
        router: router,
        store: _store2.default,
        render: function render(h) {
            return h(_App2.default);
        }
    });
    return { app: app, router: router, store: _store2.default };
} /*
   * 客户端下入口文件
   * */

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * vue客户端路由会映射到服务器端 动态路由
 */
if (false) require.ensure = function (d, c) {
    c(require);
};
// //首页路由
var indexComponent = function indexComponent(r) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return r(__webpack_require__(502));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var indexEditComponent = function indexEditComponent(r) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return r(__webpack_require__(503));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

//频道
var channelListComponent = function channelListComponent(r) {
    return __webpack_require__.e/* require.ensure */(12).then((function () {
        return r(__webpack_require__(504));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var channelSaveComponent = function channelSaveComponent(r) {
    return __webpack_require__.e/* require.ensure */(11).then((function () {
        return r(__webpack_require__(505));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

//文章
var articleListComponent = function articleListComponent(r) {
    return __webpack_require__.e/* require.ensure */(13).then((function () {
        return r(__webpack_require__(506));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var articleSaveComponent = function articleSaveComponent(r) {
    return __webpack_require__.e/* require.ensure */(2).then((function () {
        return r(__webpack_require__(507));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

//用户
var userListComponent = function userListComponent(r) {
    return __webpack_require__.e/* require.ensure */(4).then((function () {
        return r(__webpack_require__(508));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var userSaveComponent = function userSaveComponent(r) {
    return __webpack_require__.e/* require.ensure */(3).then((function () {
        return r(__webpack_require__(509));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

//角色
var roleListComponent = function roleListComponent(r) {
    return __webpack_require__.e/* require.ensure */(6).then((function () {
        return r(__webpack_require__(510));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var roleSaveComponent = function roleSaveComponent(r) {
    return __webpack_require__.e/* require.ensure */(5).then((function () {
        return r(__webpack_require__(511));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

//菜单
var menuListComponent = function menuListComponent(r) {
    return __webpack_require__.e/* require.ensure */(8).then((function () {
        return r(__webpack_require__(512));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var menuSaveComponent = function menuSaveComponent(r) {
    return __webpack_require__.e/* require.ensure */(7).then((function () {
        return r(__webpack_require__(513));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

//权限
var rightComponent = function rightComponent(r) {
    return __webpack_require__.e/* require.ensure */(1).then((function () {
        return r(__webpack_require__(514));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

//评论
var commentComponent = function commentComponent(r) {
    return __webpack_require__.e/* require.ensure */(10).then((function () {
        return r(__webpack_require__(515));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var replyComponent = function replyComponent(r) {
    return __webpack_require__.e/* require.ensure */(9).then((function () {
        return r(__webpack_require__(516));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

//404
var notFoundComponent = function notFoundComponent(r) {
    return __webpack_require__.e/* require.ensure */(15).then((function () {
        return r(__webpack_require__(517));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var loginComponent = function loginComponent(r) {
    return __webpack_require__.e/* require.ensure */(14).then((function () {
        return r(__webpack_require__(518));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

exports.default = {
    indexComponent: indexComponent,
    indexEditComponent: indexEditComponent,
    channelListComponent: channelListComponent,
    channelSaveComponent: channelSaveComponent,
    articleListComponent: articleListComponent,
    articleSaveComponent: articleSaveComponent,
    userListComponent: userListComponent,
    userSaveComponent: userSaveComponent,
    roleListComponent: roleListComponent,
    roleSaveComponent: roleSaveComponent,
    menuListComponent: menuListComponent,
    menuSaveComponent: menuSaveComponent,
    rightComponent: rightComponent,
    commentComponent: commentComponent,
    replyComponent: replyComponent,
    loginComponent: loginComponent,
    notFoundComponent: notFoundComponent

};

/***/ }),

/***/ 470:
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

var _channelQuery = __webpack_require__(471);

var _channelQuery2 = _interopRequireDefault(_channelQuery);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
    channels: [],
    fetching: true,
    total: 0,
    pageSize: 0,
    channel: {
        name: '',
        note: '',
        uuid: ''
    },
    message: {
        flag: 0,
        err: ''
    }
};

var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, types.FETCH_CHANNEL_LIST, function (state, payload) {
    state.fetching = false;
    state.channels = payload.models;
    state.total = payload.total;
    state.pageSize = payload.pageSize;
}), (0, _defineProperty3.default)(_mutations, types.CHANNEL_SAVE, function (state, payload) {
    var mes = payload;
    if (mes == "ok") {
        state.message.flag = 1;
    } else {
        state.message.flag = 0;
        state.message.err = mes;
    }
}), (0, _defineProperty3.default)(_mutations, types.FETCH_CHANNEL_SINGLE, function (state, payload) {
    state.channel = payload;
}), (0, _defineProperty3.default)(_mutations, types.RESET_CHANNEL, function (state, payload) {
    state.channel = {
        name: '',
        note: '',
        uuid: ''
    };
}), (0, _defineProperty3.default)(_mutations, types.DELETE_CHANNEL, function (state, payload) {

    var mes = payload;
    if (mes == "ok") {
        state.message.flag = 1;
    } else {
        state.message.flag = 0;
        state.message.err = mes;
    }
}), _mutations);

var actions = {
    fetchChannelList: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2, cur) {
            var commit = _ref2.commit;
            var pageInfo;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _channelQuery2.default.list(cur);

                        case 2:
                            pageInfo = _context.sent;

                            commit(types.FETCH_CHANNEL_LIST, pageInfo);

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function fetchChannelList(_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }(),
    channelSave: function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref4, _ref5) {
            var commit = _ref4.commit;
            var channel = _ref5.channel,
                fn = _ref5.fn;
            var message;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return _channelQuery2.default.save(channel);

                        case 2:
                            message = _context2.sent;

                            commit(types.CHANNEL_SAVE, message);
                            fn == null ? function () {} : fn();

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function channelSave(_x3, _x4) {
            return _ref3.apply(this, arguments);
        };
    }(),
    fetchChannel: function () {
        var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(_ref7, uuid) {
            var commit = _ref7.commit;
            var channel;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return _channelQuery2.default.getSingle(uuid);

                        case 2:
                            channel = _context3.sent;

                            commit(types.FETCH_CHANNEL_SINGLE, channel);

                        case 4:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        }));

        return function fetchChannel(_x5, _x6) {
            return _ref6.apply(this, arguments);
        };
    }(),
    resetForm: function resetForm(_ref8) {
        var commit = _ref8.commit;

        commit(types.RESET_CHANNEL);
    },
    fetchChannelDel: function () {
        var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(_ref10, _ref11) {
            var commit = _ref10.commit;
            var uuid = _ref11.uuid,
                fn = _ref11.fn;
            var message;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return _channelQuery2.default.del(uuid);

                        case 2:
                            message = _context4.sent;

                            commit(types.DELETE_CHANNEL, message);
                            fn == null ? function () {} : fn();

                        case 5:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, undefined);
        }));

        return function fetchChannelDel(_x7, _x8) {
            return _ref9.apply(this, arguments);
        };
    }()

};
var getters = {
    getChannelList: function getChannelList(state) {
        return state;
    },
    getSaveState: function getSaveState(state) {
        return state;
    },
    getSingle: function getSingle(state) {
        return state.channel;
    },
    getDelMsg: function getDelMsg(state) {
        return state.message;
    }
};

module.exports = {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
};

/***/ }),

/***/ 472:
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

var _articleQuery = __webpack_require__(473);

var _articleQuery2 = _interopRequireDefault(_articleQuery);

var _editorQuery = __webpack_require__(474);

var _editorQuery2 = _interopRequireDefault(_editorQuery);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
    articles: [],
    innerChannels: [],
    fetching: true,
    total: 0,
    pageSize: 0,
    article: {
        title: '',
        content: '',
        tag: '',
        uuid: ''
    },
    message: {
        flag: 0,
        err: ''
    },
    editorConfig: {}
};

var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, types.FETCH_ARTICLE_LIST, function (state, payload) {
    state.fetching = false;
    state.articles = payload.models;
    state.total = payload.total;
    state.pageSize = payload.pageSize;
    state.innerChannels = payload.channels;
}), (0, _defineProperty3.default)(_mutations, types.ARTICLE_SAVE, function (state, payload) {
    var mes = payload;
    if (mes == "ok") {
        state.message.flag = 1;
    } else {
        state.message.flag = 0;
        state.message.err = mes;
    }
}), (0, _defineProperty3.default)(_mutations, types.FETCH_ARTICLE_SINGLE, function (state, payload) {
    state.article = payload.module;
    state.innerChannels = payload.channels;
}), (0, _defineProperty3.default)(_mutations, types.RESET_ARTICLE, function (state, payload) {
    state.article = {
        name: '',
        note: '',
        uuid: ''
    };
}), (0, _defineProperty3.default)(_mutations, types.DELETE_ARTICLE, function (state, payload) {

    var mes = payload;
    if (mes == "ok") {
        state.message.flag = 1;
    } else {
        state.message.flag = 0;
        state.message.err = mes;
    }
}), (0, _defineProperty3.default)(_mutations, types.EDITOR_CFG, function (state, payload) {
    state.editorConfig = payload;
}), _mutations);

var actions = {
    fetchArticleList: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2, _ref3) {
            var commit = _ref2.commit;
            var cur = _ref3.cur,
                params = _ref3.params;
            var pageInfo;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _articleQuery2.default.list({ cur: cur, params: params });

                        case 2:
                            pageInfo = _context.sent;

                            commit(types.FETCH_ARTICLE_LIST, pageInfo);

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function fetchArticleList(_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }(),
    articleSave: function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref5, _ref6) {
            var commit = _ref5.commit;
            var article = _ref6.article,
                fn = _ref6.fn;
            var message;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return _articleQuery2.default.save(article);

                        case 2:
                            message = _context2.sent;

                            commit(types.ARTICLE_SAVE, message);
                            fn == null ? function () {} : fn();

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function articleSave(_x3, _x4) {
            return _ref4.apply(this, arguments);
        };
    }(),
    fetchArticle: function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(_ref8, uuid) {
            var commit = _ref8.commit;
            var article;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return _articleQuery2.default.getSingle(uuid);

                        case 2:
                            article = _context3.sent;

                            commit(types.FETCH_ARTICLE_SINGLE, article);

                        case 4:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        }));

        return function fetchArticle(_x5, _x6) {
            return _ref7.apply(this, arguments);
        };
    }(),
    resetForm: function resetForm(_ref9) {
        var commit = _ref9.commit;

        commit(types.RESET_ARTICLE);
    },
    fetchArticleDel: function () {
        var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(_ref11, _ref12) {
            var commit = _ref11.commit;
            var uuid = _ref12.uuid,
                fn = _ref12.fn;
            var message;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return _articleQuery2.default.del(uuid);

                        case 2:
                            message = _context4.sent;

                            commit(types.DELETE_ARTICLE, message);
                            fn == null ? function () {} : fn();

                        case 5:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, undefined);
        }));

        return function fetchArticleDel(_x7, _x8) {
            return _ref10.apply(this, arguments);
        };
    }(),
    fetchEditorCfg: function () {
        var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(_ref14) {
            var commit = _ref14.commit;
            var editorCfg;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            console.log("fetchEditorCfg>>>>>>>>>>");
                            _context5.next = 3;
                            return _editorQuery2.default.getEditorCfg();

                        case 3:
                            editorCfg = _context5.sent;

                            // console.log("editorCfg>>>>>"+editorCfg);
                            commit(types.EDITOR_CFG, editorCfg);

                        case 5:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, undefined);
        }));

        return function fetchEditorCfg(_x9) {
            return _ref13.apply(this, arguments);
        };
    }()

};
var getters = {
    getArticleList: function getArticleList(state) {
        return state;
    },
    getArticleSaveState: function getArticleSaveState(state) {
        return state;
    },
    getArticleSingle: function getArticleSingle(state) {
        return state;
    },
    getArticleDelMsg: function getArticleDelMsg(state) {
        return state.message;
    },
    getEditor: function getEditor(state) {
        return state.editorConfig;
    }
};

module.exports = {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
};

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(11);

var _promise2 = _interopRequireDefault(_promise);

var _fetch = __webpack_require__(23);

var _fetch2 = _interopRequireDefault(_fetch);

var _config = __webpack_require__(22);

var _common = __webpack_require__(199);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var articleQuery = {
    //查询
    list: function list(_ref) {
        var cur = _ref.cur,
            params = _ref.params;

        cur = cur == null ? 1 : cur;
        return new _promise2.default(function (resolve, reject) {
            _fetch2.default.post(_config.conf.base + '/api/article/list', {
                page: cur,
                params: params
            }).then(function (response) {
                var data = response.data;
                // console.log(data);

                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    getSingle: function getSingle(uuid) {
        return new _promise2.default(function (resolve, reject) {
            _fetch2.default.get(_config.conf.base + '/api/article/single/' + uuid).then(function (response) {
                var data = response.data;

                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    //保存
    save: function save(article) {
        return new _promise2.default(function (resolve, reject) {
            _fetch2.default.post(_config.conf.base + '/api/article/save', article).then(function (response) {
                var data = response.data;

                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    del: function del(uuid) {
        return new _promise2.default(function (resolve, reject) {
            console.log("del.....");
            _fetch2.default.get(_config.conf.base + '/api/article/delete/' + uuid).then(function (response) {
                var data = response.data;

                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    }
}; /**
    * 文章查询API
    * User: heliang
    * Date: 2018/2/27.
    */


module.exports = articleQuery;

/***/ }),

/***/ 475:
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

var _userQuery = __webpack_require__(200);

var _userQuery2 = _interopRequireDefault(_userQuery);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
    users: [],
    fetching: true,
    total: 0,
    pageSize: 0,
    loginUser: {},
    user: {
        name: '',
        pwd: '',
        phone: '',
        loginTime: '',
        loginType: '',
        uuid: ''
    },
    message: {
        flag: 0,
        err: ''
    }
};

var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, types.FETCH_USER_LIST, function (state, payload) {
    state.fetching = false;
    state.users = payload.models;
    state.total = payload.total;
    state.pageSize = payload.pageSize;
    state.innerChannels = payload.channels;
}), (0, _defineProperty3.default)(_mutations, types.USER_SAVE, function (state, payload) {
    var mes = payload;
    if (mes == "ok") {
        state.message.flag = 1;
    } else {
        state.message.flag = 0;
        state.message.err = mes;
    }
}), (0, _defineProperty3.default)(_mutations, types.FETCH_USER_SINGLE, function (state, payload) {
    state.user = payload;
    // state.innerChannels=payload.channels
}), (0, _defineProperty3.default)(_mutations, types.RESET_USER, function (state, payload) {
    state.user = {
        name: '',
        pwd: '',
        phone: '',
        loginTime: '',
        loginType: '',
        uuid: ''
    };
}), (0, _defineProperty3.default)(_mutations, types.USER_INFO, function (state, payload) {
    state.loginUser = payload;
}), (0, _defineProperty3.default)(_mutations, types.DELETE_USER, function (state, payload) {
    var mes = payload;
    if (mes == "ok") {
        state.message.flag = 1;
    } else {
        state.message.flag = 0;
        state.message.err = mes;
    }
}), _mutations);

var actions = {
    fetchUserList: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2, _ref3) {
            var commit = _ref2.commit;
            var cur = _ref3.cur,
                params = _ref3.params;
            var pageInfo;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _userQuery2.default.list({ cur: cur, params: params });

                        case 2:
                            pageInfo = _context.sent;

                            commit(types.FETCH_USER_LIST, pageInfo);

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function fetchUserList(_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }(),
    userSave: function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref5, _ref6) {
            var commit = _ref5.commit;
            var user = _ref6.user,
                fn = _ref6.fn;
            var message;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return _userQuery2.default.save(user);

                        case 2:
                            message = _context2.sent;

                            commit(types.USER_SAVE, message);
                            fn == null ? function () {} : fn();

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function userSave(_x3, _x4) {
            return _ref4.apply(this, arguments);
        };
    }(),
    fetchUser: function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(_ref8, uuid) {
            var commit = _ref8.commit;
            var user;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return _userQuery2.default.getSingle(uuid);

                        case 2:
                            user = _context3.sent;

                            commit(types.FETCH_USER_SINGLE, user);

                        case 4:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        }));

        return function fetchUser(_x5, _x6) {
            return _ref7.apply(this, arguments);
        };
    }(),
    fetchUserInfo: function () {
        var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(_ref10, _ref11) {
            var commit = _ref10.commit;
            var uuid = _ref11.uuid,
                fn = _ref11.fn;
            var user;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return _userQuery2.default.getUserInfo(uuid);

                        case 2:
                            user = _context4.sent;

                            commit(types.USER_INFO, user);
                            fn == null ? function () {} : fn(user);

                        case 5:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, undefined);
        }));

        return function fetchUserInfo(_x7, _x8) {
            return _ref9.apply(this, arguments);
        };
    }(),
    resetUserForm: function resetUserForm(_ref12) {
        var commit = _ref12.commit;

        commit(types.RESET_USER);
    },
    fetchUserDel: function () {
        var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(_ref14, _ref15) {
            var commit = _ref14.commit;
            var uuid = _ref15.uuid,
                fn = _ref15.fn;
            var message;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return _userQuery2.default.del(uuid);

                        case 2:
                            message = _context5.sent;

                            commit(types.DELETE_USER, message);
                            fn == null ? function () {} : fn();

                        case 5:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, undefined);
        }));

        return function fetchUserDel(_x9, _x10) {
            return _ref13.apply(this, arguments);
        };
    }()

};
var getters = {
    getUserList: function getUserList(state) {
        return state;
    },
    getUserSaveState: function getUserSaveState(state) {
        return state;
    },
    getUserSingle: function getUserSingle(state) {
        return state.user;
    },
    getUserInfo: function getUserInfo(state) {
        return state.loginUser;
    },
    getUserDelMsg: function getUserDelMsg(state) {
        return state.message;
    }
};

module.exports = {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
};

/***/ }),

/***/ 476:
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

var _roleQuery = __webpack_require__(201);

var _roleQuery2 = _interopRequireDefault(_roleQuery);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
    roles: [],
    fetching: true,
    total: 0,
    pageSize: 0,
    role: {
        name: '',
        uuid: ''
    },
    message: {
        flag: 0,
        err: ''
    }
};

var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, types.FETCH_ROLE_LIST, function (state, payload) {
    state.fetching = false;
    state.roles = payload.models;
    state.total = payload.total;
    state.pageSize = payload.pageSize;
    state.innerChannels = payload.channels;
}), (0, _defineProperty3.default)(_mutations, types.ROLE_SAVE, function (state, payload) {
    var mes = payload;
    if (mes == "ok") {
        state.message.flag = 1;
    } else {
        state.message.flag = 0;
        state.message.err = mes;
    }
}), (0, _defineProperty3.default)(_mutations, types.FETCH_ROLE_SINGLE, function (state, payload) {
    state.role = payload == "" ? {} : payload;
}), (0, _defineProperty3.default)(_mutations, types.RESET_ROLE, function (state, payload) {
    state.role = {
        name: '',
        uuid: ''
    };
}), (0, _defineProperty3.default)(_mutations, types.DELETE_ROLE, function (state, payload) {
    var mes = payload;
    if (mes == "ok") {
        state.message.flag = 1;
    } else {
        state.message.flag = 0;
        state.message.err = mes;
    }
}), _mutations);

var actions = {
    fetchRoleList: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2, _ref3) {
            var commit = _ref2.commit;
            var cur = _ref3.cur,
                params = _ref3.params;
            var pageInfo;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _roleQuery2.default.list({ cur: cur, params: params });

                        case 2:
                            pageInfo = _context.sent;

                            commit(types.FETCH_ROLE_LIST, pageInfo);

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function fetchRoleList(_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }(),
    roleSave: function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref5, _ref6) {
            var commit = _ref5.commit;
            var role = _ref6.role,
                fn = _ref6.fn;
            var message;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return _roleQuery2.default.save(role);

                        case 2:
                            message = _context2.sent;

                            commit(types.ROLE_SAVE, message);
                            fn == null ? function () {} : fn();

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function roleSave(_x3, _x4) {
            return _ref4.apply(this, arguments);
        };
    }(),
    fetchRole: function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(_ref8, uuid) {
            var commit = _ref8.commit;
            var role;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return _roleQuery2.default.getSingle(uuid);

                        case 2:
                            role = _context3.sent;

                            commit(types.FETCH_ROLE_SINGLE, role);

                        case 4:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        }));

        return function fetchRole(_x5, _x6) {
            return _ref7.apply(this, arguments);
        };
    }(),
    resetRoleForm: function resetRoleForm(_ref9) {
        var commit = _ref9.commit;

        commit(types.RESET_ROLE);
    },
    fetchRoleDel: function () {
        var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(_ref11, _ref12) {
            var commit = _ref11.commit;
            var uuid = _ref12.uuid,
                fn = _ref12.fn;
            var message;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return _roleQuery2.default.del(uuid);

                        case 2:
                            message = _context4.sent;

                            commit(types.DELETE_ROLE, message);
                            fn == null ? function () {} : fn();

                        case 5:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, undefined);
        }));

        return function fetchRoleDel(_x7, _x8) {
            return _ref10.apply(this, arguments);
        };
    }()

};
var getters = {
    getRoleList: function getRoleList(state) {
        return state;
    },
    getRoleSaveState: function getRoleSaveState(state) {
        return state;
    },
    getRoleSingle: function getRoleSingle(state) {
        return state.role;
    },
    getRoleDelMsg: function getRoleDelMsg(state) {
        return state.message;
    }
};

module.exports = {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
};

/***/ }),

/***/ 477:
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

var _menuQuery = __webpack_require__(478);

var _menuQuery2 = _interopRequireDefault(_menuQuery);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
    menus: [],
    menuStruct: [],
    fetching: true,
    total: 0,
    pageSize: 0,
    menu: {
        name: '',
        url: '', //菜单地址
        rank: '', //菜单等级 1级菜单 2级菜单 3级菜单
        parentId: '', //菜单上级
        uuid: ''
    },
    message: {
        flag: 0,
        err: ''
    }
};

var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, types.FETCH_MENU_LIST, function (state, payload) {
    console.log(payload);
    state.fetching = false;
    state.menus = payload.models;
    state.total = payload.total;
    state.pageSize = payload.pageSize;
    state.innerChannels = payload.channels;
}), (0, _defineProperty3.default)(_mutations, types.FETCH_MENUS, function (state, payload) {
    // console.log("FETCH_MENUS>>>>"+payload);
    state.fetching = false;
    state.menuStruct = payload;
}), (0, _defineProperty3.default)(_mutations, types.MENU_SAVE, function (state, payload) {
    var mes = payload;
    if (mes == "ok") {
        state.message.flag = 1;
    } else {
        state.message.flag = 0;
        state.message.err = mes;
    }
}), (0, _defineProperty3.default)(_mutations, types.FETCH_MENU_SINGLE, function (state, payload) {
    state.menu = payload.menu;
    state.menus = payload.menus;
}), (0, _defineProperty3.default)(_mutations, types.RESET_MENU, function (state, payload) {
    state.menu = {
        name: '',
        url: '', //菜单地址
        rank: '', //菜单等级 1级菜单 2级菜单 3级菜单
        parentId: '', //菜单上级
        uuid: ''
    };
}), (0, _defineProperty3.default)(_mutations, types.DELETE_MENU, function (state, payload) {
    var mes = payload;
    if (mes == "ok") {
        state.message.flag = 1;
    } else {
        state.message.flag = 0;
        state.message.err = mes;
    }
}), _mutations);

var actions = {
    fetchMenuList: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2, _ref3) {
            var commit = _ref2.commit;
            var cur = _ref3.cur,
                params = _ref3.params;
            var pageInfo;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _menuQuery2.default.list({ cur: cur, params: params });

                        case 2:
                            pageInfo = _context.sent;

                            commit(types.FETCH_MENU_LIST, pageInfo);

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function fetchMenuList(_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }(),

    fetchMenus: function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref5, uuid) {
            var commit = _ref5.commit;
            var menus;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return _menuQuery2.default.getChildMenu(uuid);

                        case 2:
                            menus = _context2.sent;

                            // console.log("menus>>>"+menus);
                            commit(types.FETCH_MENUS, menus);

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function fetchMenus(_x3, _x4) {
            return _ref4.apply(this, arguments);
        };
    }(),

    menuSave: function () {
        var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(_ref7, _ref8) {
            var commit = _ref7.commit;
            var menu = _ref8.menu,
                fn = _ref8.fn;
            var message;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return _menuQuery2.default.save(menu);

                        case 2:
                            message = _context3.sent;

                            commit(types.MENU_SAVE, message);
                            fn == null ? function () {} : fn();

                        case 5:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        }));

        return function menuSave(_x5, _x6) {
            return _ref6.apply(this, arguments);
        };
    }(),
    fetchMenu: function () {
        var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(_ref10, uuid) {
            var commit = _ref10.commit;
            var menu;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return _menuQuery2.default.getSingle(uuid);

                        case 2:
                            menu = _context4.sent;

                            commit(types.FETCH_MENU_SINGLE, menu);

                        case 4:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, undefined);
        }));

        return function fetchMenu(_x7, _x8) {
            return _ref9.apply(this, arguments);
        };
    }(),
    resetMenuForm: function resetMenuForm(_ref11) {
        var commit = _ref11.commit;

        commit(types.RESET_MENU);
    },
    fetchMenuDel: function () {
        var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(_ref13, _ref14) {
            var commit = _ref13.commit;
            var uuid = _ref14.uuid,
                fn = _ref14.fn;
            var message;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return _menuQuery2.default.del(uuid);

                        case 2:
                            message = _context5.sent;

                            commit(types.DELETE_MENU, message);
                            fn == null ? function () {} : fn();

                        case 5:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, undefined);
        }));

        return function fetchMenuDel(_x9, _x10) {
            return _ref12.apply(this, arguments);
        };
    }()

};
var getters = {
    getMenuList: function getMenuList(state) {
        return state;
    },
    getMenus: function getMenus(state) {
        return state.menuStruct;
    },
    getMenuSaveState: function getMenuSaveState(state) {
        return state;
    },
    getMenuSingle: function getMenuSingle(state) {
        return state.menu;
    },
    getMenuDelMsg: function getMenuDelMsg(state) {
        return state.message;
    }
};

module.exports = {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
};

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(11);

var _promise2 = _interopRequireDefault(_promise);

var _fetch = __webpack_require__(23);

var _fetch2 = _interopRequireDefault(_fetch);

var _config = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 菜单查询API
 * User: heliang
 * Date: 2018/2/27.
 */
var menuQuery = {
    //查询
    list: function list(_ref) {
        var cur = _ref.cur,
            params = _ref.params;

        cur = cur == null ? 1 : cur;
        return new _promise2.default(function (resolve, reject) {
            _fetch2.default.post(_config.conf.base + '/api/menu/list', {
                page: cur,
                params: params,
                sort: 'rank'
            }).then(function (response) {
                var data = response.data;
                // console.log(data);

                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    //根据等级查询
    listByRank: function listByRank(rank) {
        return new _promise2.default(function (resolve, reject) {
            _fetch2.default.post(_config.conf.base + '/api/menu/listByRank/' + rank).then(function (response) {
                var data = response.data;
                // console.log(data);

                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    },

    //查询指定菜单的子菜单
    getChildMenu: function getChildMenu(uuid) {
        return new _promise2.default(function (resolve, reject) {
            _fetch2.default.get(_config.conf.base + '/api/menu/getChildMenu/' + uuid).then(function (response) {
                var data = response.data;
                // console.log(data);

                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    },

    getSingle: function getSingle(uuid) {
        return new _promise2.default(function (resolve, reject) {
            _fetch2.default.get(_config.conf.base + '/api/menu/single/' + uuid).then(function (response) {
                var data = response.data;

                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    //保存
    save: function save(menu) {
        return new _promise2.default(function (resolve, reject) {
            _fetch2.default.post(_config.conf.base + '/api/menu/save', menu).then(function (response) {
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
            _fetch2.default.get(_config.conf.base + '/api/menu/delete/' + uuid).then(function (response) {
                var data = response.data;

                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    }
};

module.exports = menuQuery;

/***/ }),

/***/ 479:
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

var _commentQuery = __webpack_require__(480);

var _commentQuery2 = _interopRequireDefault(_commentQuery);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
    comments: [],
    fetching: true,
    total: 0,
    pageSize: 0,
    comment: {
        uuid: '',
        userId: '', //用户ID
        blogId: '', //博客ID
        content: '', //内容
        date: '', // 评论时间
        type: '' //是评
    },
    message: {
        flag: 0,
        err: ''
    }
};

var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, types.FETCH_COMMENT_LIST, function (state, payload) {
    state.fetching = false;
    state.comments = payload.models;
    state.total = payload.total;
    state.pageSize = payload.pageSize;
    state.innerChannels = payload.channels;
}), (0, _defineProperty3.default)(_mutations, types.COMMENT_SAVE, function (state, payload) {
    var mes = payload;
    if (mes == "ok") {
        state.message.flag = 1;
    } else {
        state.message.flag = 0;
        state.message.err = mes;
    }
}), (0, _defineProperty3.default)(_mutations, types.FETCH_COMMENT_SINGLE, function (state, payload) {
    state.comment = payload;
    // state.innerChannels=payload.channels
}), (0, _defineProperty3.default)(_mutations, types.RESET_COMMENT, function (state, payload) {
    state.comment = {
        name: '',
        pwd: '',
        phone: '',
        loginTime: '',
        loginType: '',
        uuid: ''
    };
}), (0, _defineProperty3.default)(_mutations, types.DELETE_COMMENT, function (state, payload) {
    var mes = payload;
    if (mes == "ok") {
        state.message.flag = 1;
    } else {
        state.message.flag = 0;
        state.message.err = mes;
    }
}), _mutations);

var actions = {
    fetchCommentList: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2, _ref3) {
            var commit = _ref2.commit;
            var cur = _ref3.cur,
                params = _ref3.params;
            var pageInfo;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _commentQuery2.default.list({ cur: cur, params: params });

                        case 2:
                            pageInfo = _context.sent;

                            commit(types.FETCH_COMMENT_LIST, pageInfo);

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function fetchCommentList(_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }(),
    commentSave: function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref5, _ref6) {
            var commit = _ref5.commit;
            var comment = _ref6.comment,
                fn = _ref6.fn;
            var message;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return _commentQuery2.default.save(comment);

                        case 2:
                            message = _context2.sent;

                            commit(types.COMMENT_SAVE, message);
                            fn == null ? function () {} : fn();

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function commentSave(_x3, _x4) {
            return _ref4.apply(this, arguments);
        };
    }(),
    fetchComment: function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(_ref8, uuid) {
            var commit = _ref8.commit;
            var comment;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return _commentQuery2.default.getSingle(uuid);

                        case 2:
                            comment = _context3.sent;

                            commit(types.FETCH_COMMENT_SINGLE, comment);

                        case 4:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        }));

        return function fetchComment(_x5, _x6) {
            return _ref7.apply(this, arguments);
        };
    }(),
    fetchCommentInfo: function () {
        var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(_ref10, uuid) {
            var commit = _ref10.commit;
            var comment;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return _commentQuery2.default.getCommentInfo(uuid);

                        case 2:
                            comment = _context4.sent;

                            commit(types.COMMENT_INFO, comment);

                        case 4:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, undefined);
        }));

        return function fetchCommentInfo(_x7, _x8) {
            return _ref9.apply(this, arguments);
        };
    }(),
    resetCommentForm: function resetCommentForm(_ref11) {
        var commit = _ref11.commit;

        commit(types.RESET_COMMENT);
    },
    fetchCommentDel: function () {
        var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(_ref13, _ref14) {
            var commit = _ref13.commit;
            var uuid = _ref14.uuid,
                fn = _ref14.fn;
            var message;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return _commentQuery2.default.del(uuid);

                        case 2:
                            message = _context5.sent;

                            commit(types.DELETE_COMMENT, message);
                            fn == null ? function () {} : fn();

                        case 5:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, undefined);
        }));

        return function fetchCommentDel(_x9, _x10) {
            return _ref12.apply(this, arguments);
        };
    }()

};
var getters = {
    getCommentList: function getCommentList(state) {
        return state;
    },
    getCommentSaveState: function getCommentSaveState(state) {
        return state;
    },
    getCommentSingle: function getCommentSingle(state) {
        return state.comment;
    },
    getCommentDelMsg: function getCommentDelMsg(state) {
        return state.message;
    }
};

module.exports = {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
};

/***/ }),

/***/ 480:
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
var commentQuery = {
    //查询
    list: function list(_ref) {
        var cur = _ref.cur,
            params = _ref.params;

        cur = cur == null ? 1 : cur;
        return new _promise2.default(function (resolve, reject) {
            _fetch2.default.post(_config.conf.base + '/api/comment/list', {
                page: cur,
                params: params,
                sort: "date"
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
            _fetch2.default.get(_config.conf.base + '/api/comment/single/' + uuid).then(function (response) {
                var data = response.data;

                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    //保存
    save: function save(comment) {
        return new _promise2.default(function (resolve, reject) {
            _fetch2.default.post(_config.conf.base + '/api/comment/save', comment).then(function (response) {
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
            _fetch2.default.get(_config.conf.base + '/api/comment/delete/' + uuid).then(function (response) {
                var data = response.data;

                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    }
};

module.exports = commentQuery;

/***/ }),

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
    // console.log("FETCH_MENUS>>>>"+payload);
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
//# sourceMappingURL=16.5c075dcd99730773a1ff.hot-update.js.map