webpackHotUpdate(0,{

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)(true);
// imports


// module
exports.push([module.i, "\n.el-header, .el-footer {\n    /*background-color: #B3C0D1;*/\n    color: #333;\n    text-align: center;\n    /*line-height: 60px;*/\n}\n.el-header{\n    height: 80px !important;\n    background-color: rgb(64, 158, 255);\n    line-height: 80px !important;\n}\n.el-header img{\n    height: 66px;\n    width: 66px;\n    position: relative;\n    top: 5px;\n    border-radius: 4px;\n}\n.el-header h3{\n    color: #FFF;\n    font-size: 20px;\n    position: relative;\n    left: 10px;\n    display: inline-block;\n}\n.el-header .user-photo{\n    height: 50px;\n    width: 50px;\n    border-radius: 50%;\n    margin-top: 10px;\n}\n.el-header .user{\n    position: relative;\n    top: -15px;\n    left: 5px;\n    font-size: 14px;\n    color: #FFF;\n}\n.el-aside {\n    background-color: #f7f7f7;\n    color: #333;\n    text-align: center;\n    height: 100%;\n    /*line-height: 200px;*/\n}\n.el-menu--collapse{\n    width: auto;\n}\n.el-menu{\n    border-right-width: 0px;\n}\n.el-menu-vertical-demo{\n    background-color: #FFF;\n}\n.el-main {\n    min-height: 590px;\n    background-color: #f7f7f7;\n    /*color: #333;*/\n    /*text-align: center;*/\n    /*line-height: 160px;*/\n}\n.el-dropdown-menu{\n    top:70px !important;\n}\n.el-dropdown-menu__item span{\n    display: inline-block;\n    margin-left: 10px;\n}\nbody > .el-container {\n    margin-bottom: 40px;\n}\n\n", "", {"version":3,"sources":["/Users/hotread/work/learn/MyBlog_Admin/src/views/src/views/layout.vue"],"names":[],"mappings":";AAoEA;IACA,8BAAA;IACA,YAAA;IACA,mBAAA;IACA,sBAAA;CACA;AACA;IACA,wBAAA;IACA,oCAAA;IACA,6BAAA;CACA;AACA;IACA,aAAA;IACA,YAAA;IACA,mBAAA;IACA,SAAA;IACA,mBAAA;CACA;AACA;IACA,YAAA;IACA,gBAAA;IACA,mBAAA;IACA,WAAA;IACA,sBAAA;CACA;AACA;IACA,aAAA;IACA,YAAA;IACA,mBAAA;IACA,iBAAA;CACA;AAEA;IACA,mBAAA;IACA,WAAA;IACA,UAAA;IACA,gBAAA;IACA,YAAA;CACA;AACA;IACA,0BAAA;IACA,YAAA;IACA,mBAAA;IACA,aAAA;IACA,uBAAA;CACA;AACA;IACA,YAAA;CACA;AACA;IACA,wBAAA;CACA;AACA;IACA,uBAAA;CACA;AAEA;IACA,kBAAA;IACA,0BAAA;IACA,gBAAA;IACA,uBAAA;IACA,uBAAA;CACA;AACA;IACA,oBAAA;CACA;AAEA;IACA,sBAAA;IACA,kBAAA;CACA;AACA;IACA,oBAAA;CACA","file":"layout.vue","sourcesContent":["<template>\n    <div >\n        <el-container >\n            <!--头部-->\n            <el-header>\n                <el-row>\n                    <el-col :span=\"4\">\n                        <!--{{loginUser}}-->\n                        <!--<img class=\"logo\"  alt=\"\">-->\n                        <h3>MyBlog</h3>\n                    </el-col>\n                    <el-col :span=\"17\">\n                        &nbsp;\n                    </el-col>\n                    <el-col :span=\"3\" style=\"white-space: nowrap\">\n                        <el-dropdown>\n                            <!--<i class=\"el-icon-setting\" style=\"margin-right: 15px\"></i>-->\n                            <img class=\"user-photo\" :src=\"loginUser.pic\"></img>\n                            <el-dropdown-menu slot=\"dropdown\">\n                                <el-dropdown-item>\n                                    <el-badge is-dot class=\"item\">\n                                        <i class=\"el-icon-edit\"></i><span>我的资料</span>\n                                    </el-badge>\n                                </el-dropdown-item>\n                                <el-dropdown-item>\n                                    <i class=\"el-icon-share\"></i> <span>我的关注</span>\n                                </el-dropdown-item>\n                                <el-dropdown-item>\n                                    <i class=\"el-icon-delete\"></i> <span>退出</span>\n                                </el-dropdown-item>\n                            </el-dropdown-menu>\n                        </el-dropdown>\n                        <!--{{JSON.stringify(loginUser)}}-->\n                        <span class=\"user\">{{(loginUser.loginType==1||loginUser.loginType==2)?loginUser.nickName: loginUser.name}}</span>\n                    </el-col>\n                </el-row>\n            </el-header>\n            <el-container>\n                <el-aside :width=\"hastable?'120px':'68px'\" height=\"100%\">\n                    <el-menu   class=\"el-menu-vertical-demo\"  :collapse=\"true\">\n\n                        <el-submenu :index=\"(index+1)+''\" :key=\"'fMenu'+index\" v-if=\"rightMenus.indexOf(fMenu.uuid)>-1\" v-for=\"(fMenu,index) in menuStruct\">\n                            <template slot=\"title\">\n                                <i :class=\"menuIcon[index]\"></i>\n                                <span slot=\"title\">{{fMenu.name}}</span>\n                            </template>\n\n                            <el-submenu :key=\"'sMenu'+m\" :index=\"(index+1)+'-'+(m+1)\" v-if=\"rightMenus.indexOf(sMenu.uuid)>-1\" v-for=\"(sMenu,m) in fMenu.children\">\n                                <span slot=\"title\">{{sMenu.name}}</span>\n                                <el-menu-item :index=\"(index+1)+'-'+(m+1)+'-'+(n+1)\" :key=\"'tMenu'+n\" v-for=\"(tMenu,n) in sMenu.children\" @click=\"goto(tMenu.url)\">{{tMenu.name}}</el-menu-item>\n                            </el-submenu>\n                        </el-submenu>\n\n\n\n                    </el-menu>\n                </el-aside>\n                <el-main v-cloak>\n                    <slot></slot>\n                </el-main>\n            </el-container>\n            <el-footer height=\"40\">\n                博客之家版权所有 {{rightMenus}}\n            </el-footer>\n        </el-container>\n    </div>\n</template>\n<style>\n    .el-header, .el-footer {\n        /*background-color: #B3C0D1;*/\n        color: #333;\n        text-align: center;\n        /*line-height: 60px;*/\n    }\n    .el-header{\n        height: 80px !important;\n        background-color: rgb(64, 158, 255);\n        line-height: 80px !important;\n    }\n    .el-header img{\n        height: 66px;\n        width: 66px;\n        position: relative;\n        top: 5px;\n        border-radius: 4px;\n    }\n    .el-header h3{\n        color: #FFF;\n        font-size: 20px;\n        position: relative;\n        left: 10px;\n        display: inline-block;\n    }\n    .el-header .user-photo{\n        height: 50px;\n        width: 50px;\n        border-radius: 50%;\n        margin-top: 10px;\n    }\n\n    .el-header .user{\n        position: relative;\n        top: -15px;\n        left: 5px;\n        font-size: 14px;\n        color: #FFF;\n    }\n    .el-aside {\n        background-color: #f7f7f7;\n        color: #333;\n        text-align: center;\n        height: 100%;\n        /*line-height: 200px;*/\n    }\n    .el-menu--collapse{\n        width: auto;\n    }\n    .el-menu{\n        border-right-width: 0px;\n    }\n    .el-menu-vertical-demo{\n        background-color: #FFF;\n    }\n\n    .el-main {\n        min-height: 590px;\n        background-color: #f7f7f7;\n        /*color: #333;*/\n        /*text-align: center;*/\n        /*line-height: 160px;*/\n    }\n    .el-dropdown-menu{\n        top:70px !important;\n    }\n\n    .el-dropdown-menu__item span{\n        display: inline-block;\n        margin-left: 10px;\n    }\n    body > .el-container {\n        margin-bottom: 40px;\n    }\n\n</style>\n<script>\n    import {mapActions,mapGetters} from 'vuex';\n\n    export default{\n        props:{\n          hastable:{\n              type:Boolean,\n              default:false\n          }\n        },\n        data(){\n          return{\n              menuIcon:[\"el-icon-document\",\"el-icon-menu\",\"el-icon-view\",\"el-icon-setting\"]\n          }\n        },\n        computed:{\n            ...mapGetters({\n                menuStruct:'getMenus',\n                loginUser:'getUserInfo',\n                rightMenus: 'getRightMenuList'\n            })\n        },\n        filters:{\n            formatUserName(val){\n\n                if(val==\"1\"||val==\"2\"){\n                    return this.loginUser.nickName;\n                }else {\n                    return this.loginUser.name;\n                }\n            }\n        },\n        //给服务器端使用的方法\n        asyncData(store){\n            console.log('asyncData...');\n            // store.dispatch('fetchIndexList')\n        },\n        methods:{\n            ...mapActions(['fetchMenus','fetchUserInfo','fetchRightMenuList']),\n            goto(url){\n                this.$router.push(url);\n            }\n        },\n        mounted(){\n            var winH=document.documentElement.clientHeight;\n            var headerH=parseFloat(window.getComputedStyle(document.getElementsByClassName(\"el-header\")[0]).height);\n            var footerH=parseFloat(window.getComputedStyle(document.getElementsByClassName(\"el-footer\")[0]).height);\n            var main=document.getElementsByClassName(\"el-main\")[0];\n            if(window.location.href.indexOf(\"article/save\")==-1){\n                main.style.height=(winH-headerH-footerH)+\"px\"\n            }\n            this.fetchMenus(-1);\n            var _this=this;\n            this.fetchUserInfo({uuid:'089cdd2a19f44b38bc1d61a431f38163',fn:function(user){\n                    // console.log(\"==========\"+user);\n                    _this.fetchRightMenuList(user.roleId);\n            }});\n\n            // this.fetchRightMenuList();\n\n        }\n    }\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-container",
        [
          _c(
            "el-header",
            [
              _c(
                "el-row",
                [
                  _c("el-col", { attrs: { span: 4 } }, [
                    _c("h3", [_vm._v("MyBlog")])
                  ]),
                  _c("el-col", { attrs: { span: 17 } }, [
                    _vm._v("\n                     \n                ")
                  ]),
                  _c(
                    "el-col",
                    {
                      staticStyle: { "white-space": "nowrap" },
                      attrs: { span: 3 }
                    },
                    [
                      _c(
                        "el-dropdown",
                        [
                          _c("img", {
                            staticClass: "user-photo",
                            attrs: { src: _vm.loginUser.pic }
                          }),
                          _c(
                            "el-dropdown-menu",
                            { attrs: { slot: "dropdown" }, slot: "dropdown" },
                            [
                              _c(
                                "el-dropdown-item",
                                [
                                  _c(
                                    "el-badge",
                                    {
                                      staticClass: "item",
                                      attrs: { "is-dot": "" }
                                    },
                                    [
                                      _c("i", { staticClass: "el-icon-edit" }),
                                      _c("span", [_vm._v("我的资料")])
                                    ]
                                  )
                                ],
                                1
                              ),
                              _c("el-dropdown-item", [
                                _c("i", { staticClass: "el-icon-share" }),
                                _c("span", [_vm._v("我的关注")])
                              ]),
                              _c("el-dropdown-item", [
                                _c("i", { staticClass: "el-icon-delete" }),
                                _c("span", [_vm._v("退出")])
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c("span", { staticClass: "user" }, [
                        _vm._v(
                          _vm._s(
                            _vm.loginUser.loginType == 1 ||
                            _vm.loginUser.loginType == 2
                              ? _vm.loginUser.nickName
                              : _vm.loginUser.name
                          )
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _c(
            "el-container",
            [
              _c(
                "el-aside",
                {
                  attrs: {
                    width: _vm.hastable ? "120px" : "68px",
                    height: "100%"
                  }
                },
                [
                  _c(
                    "el-menu",
                    {
                      staticClass: "el-menu-vertical-demo",
                      attrs: { collapse: true }
                    },
                    _vm._l(_vm.menuStruct, function(fMenu, index) {
                      return _vm.rightMenus.indexOf(fMenu.uuid) > -1
                        ? _c(
                            "el-submenu",
                            {
                              key: "fMenu" + index,
                              attrs: { index: index + 1 + "" }
                            },
                            [
                              _c("template", { slot: "title" }, [
                                _c("i", { class: _vm.menuIcon[index] }),
                                _c(
                                  "span",
                                  { attrs: { slot: "title" }, slot: "title" },
                                  [_vm._v(_vm._s(fMenu.name))]
                                )
                              ]),
                              _vm._l(fMenu.children, function(sMenu, m) {
                                return _vm.rightMenus.indexOf(sMenu.uuid) > -1
                                  ? _c(
                                      "el-submenu",
                                      {
                                        key: "sMenu" + m,
                                        attrs: {
                                          index: index + 1 + "-" + (m + 1)
                                        }
                                      },
                                      [
                                        _c(
                                          "span",
                                          {
                                            attrs: { slot: "title" },
                                            slot: "title"
                                          },
                                          [_vm._v(_vm._s(sMenu.name))]
                                        ),
                                        _vm._l(sMenu.children, function(
                                          tMenu,
                                          n
                                        ) {
                                          return _c(
                                            "el-menu-item",
                                            {
                                              key: "tMenu" + n,
                                              attrs: {
                                                index:
                                                  index +
                                                  1 +
                                                  "-" +
                                                  (m + 1) +
                                                  "-" +
                                                  (n + 1)
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.goto(tMenu.url)
                                                }
                                              }
                                            },
                                            [_vm._v(_vm._s(tMenu.name))]
                                          )
                                        })
                                      ],
                                      2
                                    )
                                  : _vm._e()
                              })
                            ],
                            2
                          )
                        : _vm._e()
                    })
                  )
                ],
                1
              ),
              _c("el-main", {}, [_vm._t("default")], 2)
            ],
            1
          ),
          _c("el-footer", { attrs: { height: "40" } }, [
            _vm._v(
              "\n            博客之家版权所有 " +
                _vm._s(_vm.rightMenus) +
                "\n        "
            )
          ])
        ],
        1
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
    __webpack_require__(140)      .rerender("data-v-8a54e678", esExports)
  }
}

/***/ })

})
//# sourceMappingURL=0.294e05821fa9b6837241.hot-update.js.map