webpackJsonp([14],{

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_login_vue__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_login_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_login_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_login_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_login_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a49090ce_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_login_vue__ = __webpack_require__(570);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(568)
}
var normalizeComponent = __webpack_require__(210)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_login_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a49090ce_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_login_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/login/login.vue"

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(140)
  hotAPI.install(__webpack_require__(44), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a49090ce", Component.options)
  } else {
    hotAPI.reload("data-v-a49090ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(522);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(523), __esModule: true };

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(524);
module.exports = __webpack_require__(18).Object.assign;


/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(45);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(525) });


/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(73);
var gOPS = __webpack_require__(143);
var pIE = __webpack_require__(96);
var toObject = __webpack_require__(142);
var IObject = __webpack_require__(211);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(67)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(74);
exports = module.exports = __webpack_require__(60)(true);
// imports


// module
exports.push([module.i, "\nbody {\n    background: url(" + escape(__webpack_require__(569)) + ") no-repeat center;\n    background-size: cover;\n    width: 100%;\n}\n.login-bg {\n    width: 500px;\n    background: rgba(255, 255, 255, .4);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-left: -250px;\n    margin-top: -150px;\n}\n.login-bg h2 {\n    font-size: 26px;\n    color: #FFF;\n    margin-top: 30px;\n    text-align: center;\n}\n.input-area {\n    margin-top: 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    align-item: center;\n}\n.login-input {\n    border-radius: 5px;\n    padding: 14px 10px;\n    font-size: 14px;\n    outline: none;\n    border-width: 0;\n    display: block;\n    margin: 10px 80px;\n}\n.rem-area {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    margin: 10px 80px;\n}\n.rem-area a {\n    color: #FFF;\n    font-size: 14px;\n    text-decoration: none;\n}\n.btn-area {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin: 20px 10px 34px;\n}\n.login-btn {\n    padding: 12px 120px;\n    font-size: 14px;\n    border: 0px solid #ccc;\n    outline: none;\n    color: #FFF;\n    background: #ff561b;\n    border-radius: 5px;\n}\n.el-checkbox {\n    margin-left: 4px;\n    color: #FFF;\n}\n.el-input__inner{\n    width: 80%;\n    height: 48px;\n}\n\n/*.loadding {*/\n    /*width: 0%;*/\n    /*height: 2px;*/\n    /*border-radius: 10px;*/\n    /*background: #ff561b;*/\n    /*position: absolute;*/\n    /*top: 0;*/\n    /*left: 0;*/\n    /*transition: 1s width;*/\n/*}*/\n", "", {"version":3,"sources":["/Users/hotread/work/learn/MyBlog_Admin/src/views/login/src/views/login/login.vue"],"names":[],"mappings":";AA4BA;IACA,2DAAA;IACA,uBAAA;IACA,YAAA;CACA;AAEA;IACA,aAAA;IACA,oCAAA;IACA,mBAAA;IACA,SAAA;IACA,UAAA;IACA,oBAAA;IACA,mBAAA;CACA;AAEA;IACA,gBAAA;IACA,YAAA;IACA,iBAAA;IACA,mBAAA;CACA;AAEA;IACA,iBAAA;IACA,qBAAA;IAAA,qBAAA;IAAA,cAAA;IACA,6BAAA;IAAA,8BAAA;QAAA,2BAAA;YAAA,uBAAA;IACA,mBAAA;CACA;AAEA;IACA,mBAAA;IACA,mBAAA;IACA,gBAAA;IACA,cAAA;IACA,gBAAA;IACA,eAAA;IACA,kBAAA;CACA;AAEA;IACA,qBAAA;IAAA,qBAAA;IAAA,cAAA;IACA,0BAAA;QAAA,uBAAA;YAAA,+BAAA;IACA,kBAAA;CACA;AAEA;IACA,YAAA;IACA,gBAAA;IACA,sBAAA;CACA;AAEA;IACA,qBAAA;IAAA,qBAAA;IAAA,cAAA;IACA,yBAAA;QAAA,sBAAA;YAAA,wBAAA;IACA,uBAAA;CACA;AAEA;IACA,oBAAA;IACA,gBAAA;IACA,uBAAA;IACA,cAAA;IACA,YAAA;IACA,oBAAA;IACA,mBAAA;CACA;AAEA;IACA,iBAAA;IACA,YAAA;CACA;AACA;IACA,WAAA;IACA,aAAA;CACA;;AAEA,eAAA;IACA,cAAA;IACA,gBAAA;IACA,wBAAA;IACA,wBAAA;IACA,uBAAA;IACA,WAAA;IACA,YAAA;IACA,yBAAA;AACA,KAAA","file":"login.vue","sourcesContent":["<template>\n    <main :style=\"{height:h+'px'}\">\n        <el-form ref=\"form\" :rules=\"rules\" :model=\"user\" label-width=\"80px\">\n            <div class=\"login-bg\">\n                <h2>用户登录</h2>\n                <div class=\"input-area\">\n                    <el-form-item prop=\"userName\">\n                        <el-input v-model=\"user.userName\"  placeholder=\"请输入您的用户名\"></el-input>\n                    </el-form-item>\n                    <el-form-item prop=\"password\">\n                         <!--{{user.password}}-->\n                        <el-input v-model=\"user.password\"  type=\"password\" placeholder=\"请输入您的密码\"></el-input>\n                    </el-form-item>\n                </div>\n                <div class=\"rem-area\">\n                    <el-checkbox v-model=\"checked\">记住账号</el-checkbox>\n                    <a href=\"#\">忘记密码?</a>\n                </div>\n                <div class=\"btn-area\">\n                    <button  @click=\"login\" class=\"login-btn\">登录</button>\n                </div>\n                <!--<div class=\"loadding\" :style=\"{width:w+'%'}\"></div>-->\n            </div>\n        </el-form>\n        <!--<el-button :plain=\"true\" @click=\"open4\">错误</el-button>-->\n    </main>\n</template>\n<style>\n    body {\n        background: url(\"../../../assets/images/bg2.jpg\") no-repeat center;\n        background-size: cover;\n        width: 100%;\n    }\n\n    .login-bg {\n        width: 500px;\n        background: rgba(255, 255, 255, .4);\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-left: -250px;\n        margin-top: -150px;\n    }\n\n    .login-bg h2 {\n        font-size: 26px;\n        color: #FFF;\n        margin-top: 30px;\n        text-align: center;\n    }\n\n    .input-area {\n        margin-top: 20px;\n        display: flex;\n        flex-direction: column;\n        align-item: center;\n    }\n\n    .login-input {\n        border-radius: 5px;\n        padding: 14px 10px;\n        font-size: 14px;\n        outline: none;\n        border-width: 0;\n        display: block;\n        margin: 10px 80px;\n    }\n\n    .rem-area {\n        display: flex;\n        justify-content: space-between;\n        margin: 10px 80px;\n    }\n\n    .rem-area a {\n        color: #FFF;\n        font-size: 14px;\n        text-decoration: none;\n    }\n\n    .btn-area {\n        display: flex;\n        justify-content: center;\n        margin: 20px 10px 34px;\n    }\n\n    .login-btn {\n        padding: 12px 120px;\n        font-size: 14px;\n        border: 0px solid #ccc;\n        outline: none;\n        color: #FFF;\n        background: #ff561b;\n        border-radius: 5px;\n    }\n\n    .el-checkbox {\n        margin-left: 4px;\n        color: #FFF;\n    }\n    .el-input__inner{\n        width: 80%;\n        height: 48px;\n    }\n\n    /*.loadding {*/\n        /*width: 0%;*/\n        /*height: 2px;*/\n        /*border-radius: 10px;*/\n        /*background: #ff561b;*/\n        /*position: absolute;*/\n        /*top: 0;*/\n        /*left: 0;*/\n        /*transition: 1s width;*/\n    /*}*/\n</style>\n<script>\n    import {mapActions,mapGetters} from 'vuex';\n    export default {\n        data() {\n            return {\n                h: 762,\n                checked: false,\n                // w: 0,\n                user: {\n                    userName: '',\n                    password: ''\n                },\n                rules: {\n                    userName: [\n                        { required: true, message: '请输入用户名', trigger: 'blur' }\n                    ],\n                    password: [\n                        { required: true, message: '请输入密码', trigger: 'blur' }\n                    ]\n                }\n            }\n        },\n        mounted() {\n            let winHeight = document.documentElement.clientHeight;\n            // document.body.height=winHeight+\"px\";\n            this.h = winHeight;\n        },\n        computed:{\n            ...mapGetters({\n                loginState:'getLoginState',\n            })\n        },\n        methods: {\n            ...mapActions(['fetchLogin']),\n            login(e) {\n                e.preventDefault();\n                let {userName, password} = this.user;\n                this.$refs['form'].validate((valid)=>{\n                    if(valid) {\n                        this.fetchLogin({name:userName,pwd:password,fn:(data)=>{\n                                // this.w = 100;\n                                console.dir(data);\n                                if(data==false){\n                                    this.$message.error('用户名或密码错误，请稍候重试');\n                                }else{\n\n                                   window.location.replace(\"/channel\");\n                                }\n                            }});\n                    }\n                });\n            }\n        }\n\n    }\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(520);

var _extends3 = _interopRequireDefault(_extends2);

var _vuex = __webpack_require__(141);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            h: 762,
            checked: false,
            // w: 0,
            user: {
                userName: '',
                password: ''
            },
            rules: {
                userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            }
        };
    },
    mounted: function mounted() {
        var winHeight = document.documentElement.clientHeight;
        // document.body.height=winHeight+"px";
        this.h = winHeight;
    },

    computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)({
        loginState: 'getLoginState'
    })),
    methods: (0, _extends3.default)({}, (0, _vuex.mapActions)(['fetchLogin']), {
        login: function login(e) {
            var _this = this;

            e.preventDefault();
            var _user = this.user,
                userName = _user.userName,
                password = _user.password;

            this.$refs['form'].validate(function (valid) {
                if (valid) {
                    _this.fetchLogin({ name: userName, pwd: password, fn: function fn(data) {
                            // this.w = 100;
                            console.dir(data);
                            if (data == false) {
                                _this.$message.error('用户名或密码错误，请稍候重试');
                            } else {

                                window.location.replace("/channel");
                            }
                        } });
                }
            });
        }
    })

}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(532);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(61)("9f9c34a0", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(532, function() {
     var newContent = __webpack_require__(532);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/bg2.jpg";

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "main",
    { style: { height: _vm.h + "px" } },
    [
      _c(
        "el-form",
        {
          ref: "form",
          attrs: { rules: _vm.rules, model: _vm.user, "label-width": "80px" }
        },
        [
          _c("div", { staticClass: "login-bg" }, [
            _c("h2", [_vm._v("用户登录")]),
            _c(
              "div",
              { staticClass: "input-area" },
              [
                _c(
                  "el-form-item",
                  { attrs: { prop: "userName" } },
                  [
                    _c("el-input", {
                      attrs: { placeholder: "请输入您的用户名" },
                      model: {
                        value: _vm.user.userName,
                        callback: function($$v) {
                          _vm.$set(_vm.user, "userName", $$v)
                        },
                        expression: "user.userName"
                      }
                    })
                  ],
                  1
                ),
                _c(
                  "el-form-item",
                  { attrs: { prop: "password" } },
                  [
                    _c("el-input", {
                      attrs: {
                        type: "password",
                        placeholder: "请输入您的密码"
                      },
                      model: {
                        value: _vm.user.password,
                        callback: function($$v) {
                          _vm.$set(_vm.user, "password", $$v)
                        },
                        expression: "user.password"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _c(
              "div",
              { staticClass: "rem-area" },
              [
                _c(
                  "el-checkbox",
                  {
                    model: {
                      value: _vm.checked,
                      callback: function($$v) {
                        _vm.checked = $$v
                      },
                      expression: "checked"
                    }
                  },
                  [_vm._v("记住账号")]
                ),
                _c("a", { attrs: { href: "#" } }, [_vm._v("忘记密码?")])
              ],
              1
            ),
            _c("div", { staticClass: "btn-area" }, [
              _c(
                "button",
                { staticClass: "login-btn", on: { click: _vm.login } },
                [_vm._v("登录")]
              )
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(140)      .rerender("data-v-a49090ce", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=14.1aa30ed3b3ab17457d55.js.map