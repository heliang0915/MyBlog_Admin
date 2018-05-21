webpackHotUpdate(14,{

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(74);
exports = module.exports = __webpack_require__(60)(true);
// imports


// module
exports.push([module.i, "\nbody {\n    background: url(" + escape(__webpack_require__(569)) + ") no-repeat center;\n    background-size: cover;\n    width: 100%;\n}\n.login-bg {\n    width: 500px;\n    background: rgba(255, 255, 255, .4);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-left: -250px;\n    margin-top: -150px;\n}\n.login-bg h2 {\n    font-size: 26px;\n    color: #FFF;\n    margin-top: 30px;\n    text-align: center;\n}\n.input-area {\n    margin-top: 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    align-item: center;\n}\n.login-input {\n    border-radius: 5px;\n    padding: 14px 10px;\n    font-size: 14px;\n    outline: none;\n    border-width: 0;\n    display: block;\n    margin: 10px 80px;\n}\n.rem-area {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    margin: 10px 80px;\n}\n.rem-area a {\n    color: #FFF;\n    font-size: 14px;\n    text-decoration: none;\n}\n.btn-area {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin: 20px 10px 34px;\n}\n.login-btn {\n    padding: 12px 120px;\n    font-size: 14px;\n    border: 0px solid #ccc;\n    outline: none;\n    color: #FFF;\n    background: #ff561b;\n    border-radius: 5px;\n}\n.el-checkbox {\n    margin-left: 4px;\n    color: #FFF;\n}\n.el-input__inner{\n    width: 80%;\n    height: 48px;\n}\n\n/*.loadding {*/\n    /*width: 0%;*/\n    /*height: 2px;*/\n    /*border-radius: 10px;*/\n    /*background: #ff561b;*/\n    /*position: absolute;*/\n    /*top: 0;*/\n    /*left: 0;*/\n    /*transition: 1s width;*/\n/*}*/\n", "", {"version":3,"sources":["/Users/hotread/work/learn/MyBlog_Admin/src/views/login/src/views/login/login.vue"],"names":[],"mappings":";AA4BA;IACA,2DAAA;IACA,uBAAA;IACA,YAAA;CACA;AAEA;IACA,aAAA;IACA,oCAAA;IACA,mBAAA;IACA,SAAA;IACA,UAAA;IACA,oBAAA;IACA,mBAAA;CACA;AAEA;IACA,gBAAA;IACA,YAAA;IACA,iBAAA;IACA,mBAAA;CACA;AAEA;IACA,iBAAA;IACA,qBAAA;IAAA,qBAAA;IAAA,cAAA;IACA,6BAAA;IAAA,8BAAA;QAAA,2BAAA;YAAA,uBAAA;IACA,mBAAA;CACA;AAEA;IACA,mBAAA;IACA,mBAAA;IACA,gBAAA;IACA,cAAA;IACA,gBAAA;IACA,eAAA;IACA,kBAAA;CACA;AAEA;IACA,qBAAA;IAAA,qBAAA;IAAA,cAAA;IACA,0BAAA;QAAA,uBAAA;YAAA,+BAAA;IACA,kBAAA;CACA;AAEA;IACA,YAAA;IACA,gBAAA;IACA,sBAAA;CACA;AAEA;IACA,qBAAA;IAAA,qBAAA;IAAA,cAAA;IACA,yBAAA;QAAA,sBAAA;YAAA,wBAAA;IACA,uBAAA;CACA;AAEA;IACA,oBAAA;IACA,gBAAA;IACA,uBAAA;IACA,cAAA;IACA,YAAA;IACA,oBAAA;IACA,mBAAA;CACA;AAEA;IACA,iBAAA;IACA,YAAA;CACA;AACA;IACA,WAAA;IACA,aAAA;CACA;;AAEA,eAAA;IACA,cAAA;IACA,gBAAA;IACA,wBAAA;IACA,wBAAA;IACA,uBAAA;IACA,WAAA;IACA,YAAA;IACA,yBAAA;AACA,KAAA","file":"login.vue","sourcesContent":["<template>\n    <main :style=\"{height:h+'px'}\">\n        <el-form ref=\"form\" :rules=\"rules\" :model=\"user\" label-width=\"80px\">\n            <div class=\"login-bg\">\n                <h2>用户登录</h2>\n                <div class=\"input-area\">\n                    <el-form-item prop=\"userName\">\n                        <el-input v-model=\"user.userName\"  placeholder=\"请输入您的用户名\"></el-input>\n                    </el-form-item>\n                    <el-form-item prop=\"password\">\n                         <!--{{user.password}}-->\n                        <el-input v-model=\"user.password\"  type=\"password\" placeholder=\"请输入您的密码\"></el-input>\n                    </el-form-item>\n                </div>\n                <div class=\"rem-area\">\n                    <el-checkbox v-model=\"checked\">记住账号</el-checkbox>\n                    <a href=\"#\">忘记密码?</a>\n                </div>\n                <div class=\"btn-area\">\n                    <button  @click=\"login\" class=\"login-btn\">登录</button>\n                </div>\n                <!--<div class=\"loadding\" :style=\"{width:w+'%'}\"></div>-->\n            </div>\n        </el-form>\n        <!--<el-button :plain=\"true\" @click=\"open4\">错误</el-button>-->\n    </main>\n</template>\n<style>\n    body {\n        background: url(\"../../../assets/images/bg2.jpg\") no-repeat center;\n        background-size: cover;\n        width: 100%;\n    }\n\n    .login-bg {\n        width: 500px;\n        background: rgba(255, 255, 255, .4);\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-left: -250px;\n        margin-top: -150px;\n    }\n\n    .login-bg h2 {\n        font-size: 26px;\n        color: #FFF;\n        margin-top: 30px;\n        text-align: center;\n    }\n\n    .input-area {\n        margin-top: 20px;\n        display: flex;\n        flex-direction: column;\n        align-item: center;\n    }\n\n    .login-input {\n        border-radius: 5px;\n        padding: 14px 10px;\n        font-size: 14px;\n        outline: none;\n        border-width: 0;\n        display: block;\n        margin: 10px 80px;\n    }\n\n    .rem-area {\n        display: flex;\n        justify-content: space-between;\n        margin: 10px 80px;\n    }\n\n    .rem-area a {\n        color: #FFF;\n        font-size: 14px;\n        text-decoration: none;\n    }\n\n    .btn-area {\n        display: flex;\n        justify-content: center;\n        margin: 20px 10px 34px;\n    }\n\n    .login-btn {\n        padding: 12px 120px;\n        font-size: 14px;\n        border: 0px solid #ccc;\n        outline: none;\n        color: #FFF;\n        background: #ff561b;\n        border-radius: 5px;\n    }\n\n    .el-checkbox {\n        margin-left: 4px;\n        color: #FFF;\n    }\n    .el-input__inner{\n        width: 80%;\n        height: 48px;\n    }\n\n    /*.loadding {*/\n        /*width: 0%;*/\n        /*height: 2px;*/\n        /*border-radius: 10px;*/\n        /*background: #ff561b;*/\n        /*position: absolute;*/\n        /*top: 0;*/\n        /*left: 0;*/\n        /*transition: 1s width;*/\n    /*}*/\n</style>\n<script>\n    import {mapActions,mapGetters} from 'vuex';\n    export default {\n        data() {\n            return {\n                h: 762,\n                checked: false,\n                // w: 0,\n                user: {\n                    userName: '',\n                    password: ''\n                },\n                rules: {\n                    userName: [\n                        { required: true, message: '请输入用户名', trigger: 'blur' }\n                    ],\n                    password: [\n                        { required: true, message: '请输入密码', trigger: 'blur' }\n                    ]\n                }\n            }\n        },\n        mounted() {\n            let winHeight = document.documentElement.clientHeight;\n            // document.body.height=winHeight+\"px\";\n            this.h = winHeight;\n        },\n        computed:{\n            ...mapGetters({\n                loginState:'getLoginState',\n            })\n        },\n        methods: {\n            ...mapActions(['fetchLogin']),\n            login(e) {\n                e.preventDefault();\n                let {userName, password} = this.user;\n                this.$refs['form'].validate((valid)=>{\n                    if(valid) {\n                        this.fetchLogin({name:userName,pwd:password,fn:(data)=>{\n                                // this.w = 100;\n                                console.dir(data);\n                                if(data==false){\n                                    this.$message.error('用户名或密码错误，请稍候重试');\n                                }else{\n\n                                   window.location.replace(\"/channel\");\n                                }\n                            }});\n                    }\n                });\n            }\n        }\n\n    }\n</script>"],"sourceRoot":""}]);

// exports


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

})
//# sourceMappingURL=14.4cb1858bb0d42e1ddc6b.hot-update.js.map