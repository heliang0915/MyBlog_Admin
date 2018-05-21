webpackHotUpdate(1,{

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)(true);
// imports


// module
exports.push([module.i, "\n.el-header, .el-footer {\n    /*background-color: #B3C0D1;*/\n    color: #333;\n    text-align: center;\n    /*line-height: 60px;*/\n}\n.el-header{\n    height: 80px !important;\n    background-color: rgb(64, 158, 255);\n    line-height: 80px !important;\n}\n.el-header img{\n    height: 66px;\n    width: 66px;\n    position: relative;\n    top: 5px;\n    border-radius: 4px;\n}\n.el-header h3{\n    color: #FFF;\n    font-size: 20px;\n    position: relative;\n    left: 10px;\n    display: inline-block;\n}\n.el-header .user-photo{\n    height: 50px;\n    width: 50px;\n    border-radius: 50%;\n    margin-top: 10px;\n}\n.el-header .user{\n    position: relative;\n    top: -15px;\n    left: 5px;\n    font-size: 14px;\n    color: #FFF;\n}\n.el-aside {\n    background-color: #f7f7f7;\n    color: #333;\n    text-align: center;\n    height: 100%;\n    /*line-height: 200px;*/\n}\n.el-menu--collapse{\n    width: auto;\n}\n.el-menu{\n    border-right-width: 0px;\n}\n.el-menu-vertical-demo{\n    background-color: #FFF;\n}\n.el-main {\n    min-height: 590px;\n    background-color: #f7f7f7;\n    /*color: #333;*/\n    /*text-align: center;*/\n    /*line-height: 160px;*/\n}\n.el-dropdown-menu{\n    top:70px !important;\n}\n.el-dropdown-menu__item span{\n    display: inline-block;\n    margin-left: 10px;\n}\nbody > .el-container {\n    margin-bottom: 40px;\n}\n\n", "", {"version":3,"sources":["/Users/hotread/work/learn/MyBlog_Admin/src/views/src/views/layout.vue"],"names":[],"mappings":";AA+EA;IACA,8BAAA;IACA,YAAA;IACA,mBAAA;IACA,sBAAA;CACA;AACA;IACA,wBAAA;IACA,oCAAA;IACA,6BAAA;CACA;AACA;IACA,aAAA;IACA,YAAA;IACA,mBAAA;IACA,SAAA;IACA,mBAAA;CACA;AACA;IACA,YAAA;IACA,gBAAA;IACA,mBAAA;IACA,WAAA;IACA,sBAAA;CACA;AACA;IACA,aAAA;IACA,YAAA;IACA,mBAAA;IACA,iBAAA;CACA;AAEA;IACA,mBAAA;IACA,WAAA;IACA,UAAA;IACA,gBAAA;IACA,YAAA;CACA;AACA;IACA,0BAAA;IACA,YAAA;IACA,mBAAA;IACA,aAAA;IACA,uBAAA;CACA;AACA;IACA,YAAA;CACA;AACA;IACA,wBAAA;CACA;AACA;IACA,uBAAA;CACA;AAEA;IACA,kBAAA;IACA,0BAAA;IACA,gBAAA;IACA,uBAAA;IACA,uBAAA;CACA;AACA;IACA,oBAAA;CACA;AAEA;IACA,sBAAA;IACA,kBAAA;CACA;AACA;IACA,oBAAA;CACA","file":"layout.vue","sourcesContent":["<template>\n    <div >\n        <el-container >\n            <!--头部-->\n            <el-header>\n                <el-row>\n                    <el-col :span=\"4\">\n                        <!--{{loginUser}}-->\n                        <!--<img class=\"logo\"  alt=\"\">-->\n                        <h3>MyBlog</h3>\n                    </el-col>\n                    <el-col :span=\"17\">\n                        &nbsp;\n                    </el-col>\n                    <el-col :span=\"3\" style=\"white-space: nowrap\">\n                        <el-dropdown>\n                            <!--<i class=\"el-icon-setting\" style=\"margin-right: 15px\"></i>-->\n                            <img class=\"user-photo\" :src=\"loginUser.pic\"></img>\n                            <el-dropdown-menu slot=\"dropdown\">\n                                <el-dropdown-item>\n                                    <el-badge is-dot class=\"item\">\n                                        <i class=\"el-icon-edit\"></i><span>我的资料</span>\n                                    </el-badge>\n                                </el-dropdown-item>\n                                <el-dropdown-item>\n                                    <i class=\"el-icon-share\"></i> <span>我的关注</span>\n                                </el-dropdown-item>\n                                <el-dropdown-item>\n                                    <i class=\"el-icon-delete\"></i> <span>退出</span>\n                                </el-dropdown-item>\n                            </el-dropdown-menu>\n                        </el-dropdown>\n                        <!--{{JSON.stringify(loginUser)}}-->\n                        <span class=\"user\">{{(loginUser.loginType==1||loginUser.loginType==2)?loginUser.nickName: loginUser.name}}</span>\n                    </el-col>\n                </el-row>\n            </el-header>\n            <el-container>\n                <el-aside :width=\"hastable?'120px':'68px'\" height=\"100%\">\n                    <!--<el-menu   class=\"el-menu-vertical-demo\"  :collapse=\"true\">-->\n                        <!--<el-submenu :index=\"(index+1)+''\" :key=\"'fMenu'+index\" v-if=\"rightMenus.indexOf(fMenu.uuid)>-1\" v-for=\"(fMenu,index) in menuStruct\">-->\n                            <!--<template slot=\"title\">-->\n                                <!--<i :class=\"menuIcon[index]\"></i>-->\n                                <!--<span slot=\"title\">{{fMenu.name}}</span>-->\n                            <!--</template>-->\n\n                            <!--<el-submenu :key=\"'sMenu'+m\" :index=\"(index+1)+'-'+(m+1)\" v-if=\"rightMenus.indexOf(sMenu.uuid)>-1\" v-for=\"(sMenu,m) in fMenu.children\">-->\n                                <!--<span slot=\"title\">{{sMenu.name}}</span>-->\n                                <!--<el-menu-item :index=\"(index+1)+'-'+(m+1)+'-'+(n+1)\" :key=\"'tMenu'+n\" v-if=\"rightMenus.indexOf(tMenu.uuid)>-1\" v-for=\"(tMenu,n) in sMenu.children\" @click=\"goto(tMenu.url)\">{{tMenu.name}}</el-menu-item>-->\n                            <!--</el-submenu>-->\n                        <!--</el-submenu>-->\n                    <!--</el-menu>-->\n\n                    <el-menu   class=\"el-menu-vertical-demo\"  :collapse=\"true\">\n                        <el-submenu :index=\"(index+1)+''\" :key=\"'fMenu'+index\" v-for=\"(fMenu,index) in menuStruct\">\n                            <template slot=\"title\">\n                                <i :class=\"menuIcon[index]\"></i>\n                                <span slot=\"title\">{{fMenu.name}}</span>\n                            </template>\n\n                            <el-submenu :key=\"'sMenu'+m\" :index=\"(index+1)+'-'+(m+1)\"  v-for=\"(sMenu,m) in fMenu.children\">\n                                <span slot=\"title\">{{sMenu.name}}</span>\n                                <el-menu-item :index=\"(index+1)+'-'+(m+1)+'-'+(n+1)\" :key=\"'tMenu'+n\"  v-for=\"(tMenu,n) in sMenu.children\" @click=\"goto(tMenu.url)\">{{tMenu.name}}</el-menu-item>\n                            </el-submenu>\n                        </el-submenu>\n                    </el-menu>\n\n                </el-aside>\n                <el-main v-cloak>\n                    <slot></slot>\n                </el-main>\n            </el-container>\n            <el-footer height=\"40\">\n                博客之家版权所有\n            </el-footer>\n        </el-container>\n    </div>\n</template>\n<style>\n    .el-header, .el-footer {\n        /*background-color: #B3C0D1;*/\n        color: #333;\n        text-align: center;\n        /*line-height: 60px;*/\n    }\n    .el-header{\n        height: 80px !important;\n        background-color: rgb(64, 158, 255);\n        line-height: 80px !important;\n    }\n    .el-header img{\n        height: 66px;\n        width: 66px;\n        position: relative;\n        top: 5px;\n        border-radius: 4px;\n    }\n    .el-header h3{\n        color: #FFF;\n        font-size: 20px;\n        position: relative;\n        left: 10px;\n        display: inline-block;\n    }\n    .el-header .user-photo{\n        height: 50px;\n        width: 50px;\n        border-radius: 50%;\n        margin-top: 10px;\n    }\n\n    .el-header .user{\n        position: relative;\n        top: -15px;\n        left: 5px;\n        font-size: 14px;\n        color: #FFF;\n    }\n    .el-aside {\n        background-color: #f7f7f7;\n        color: #333;\n        text-align: center;\n        height: 100%;\n        /*line-height: 200px;*/\n    }\n    .el-menu--collapse{\n        width: auto;\n    }\n    .el-menu{\n        border-right-width: 0px;\n    }\n    .el-menu-vertical-demo{\n        background-color: #FFF;\n    }\n\n    .el-main {\n        min-height: 590px;\n        background-color: #f7f7f7;\n        /*color: #333;*/\n        /*text-align: center;*/\n        /*line-height: 160px;*/\n    }\n    .el-dropdown-menu{\n        top:70px !important;\n    }\n\n    .el-dropdown-menu__item span{\n        display: inline-block;\n        margin-left: 10px;\n    }\n    body > .el-container {\n        margin-bottom: 40px;\n    }\n\n</style>\n<script>\n    import {mapActions,mapGetters} from 'vuex';\n    import cookieUtil from '../util/cookie';\n\n    export default{\n        props:{\n          hastable:{\n              type:Boolean,\n              default:false\n          }\n        },\n        data(){\n          return{\n              menuIcon:[\"el-icon-document\",\"el-icon-menu\",\"el-icon-view\",\"el-icon-setting\"]\n          }\n        },\n        computed:{\n            ...mapGetters({\n                menuStruct:'getMenus',\n                loginUser:'getUserInfo',\n                rightMenus: 'getRightMenuList'\n            })\n        },\n        filters:{\n            formatUserName(val){\n\n                if(val==\"1\"||val==\"2\"){\n                    return this.loginUser.nickName;\n                }else {\n                    return this.loginUser.name;\n                }\n            }\n        },\n        //给服务器端使用的方法\n        asyncData(store){\n            console.log('asyncData...');\n            // store.dispatch('fetchIndexList')\n        },\n        methods:{\n            ...mapActions(['fetchMenus','fetchUserInfo','fetchRightMenuList']),\n            goto(url){\n                this.$router.push(url);\n            }\n        },\n        mounted(){\n            var winH=document.documentElement.clientHeight;\n            var headerH=parseFloat(window.getComputedStyle(document.getElementsByClassName(\"el-header\")[0]).height);\n            var footerH=parseFloat(window.getComputedStyle(document.getElementsByClassName(\"el-footer\")[0]).height);\n            var main=document.getElementsByClassName(\"el-main\")[0];\n            if(window.location.href.indexOf(\"article/save\")==-1){\n                main.style.height=(winH-headerH-footerH)+\"px\"\n            }\n            this.fetchMenus(-1);\n            var _this=this;\n\n            var token=cookieUtil.getCookie('token');\n            console.log(token);\n\n            this.fetchUserInfo({uuid:token,fn:function(user){\n                    // console.log(\"==========\"+user);\n                    _this.fetchRightMenuList(user.roleId);\n            }});\n        }\n    }\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(520);

var _extends3 = _interopRequireDefault(_extends2);

var _vuex = __webpack_require__(141);

var _cookie = __webpack_require__(571);

var _cookie2 = _interopRequireDefault(_cookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
    props: {
        hastable: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            menuIcon: ["el-icon-document", "el-icon-menu", "el-icon-view", "el-icon-setting"]
        };
    },

    computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)({
        menuStruct: 'getMenus',
        loginUser: 'getUserInfo',
        rightMenus: 'getRightMenuList'
    })),
    filters: {
        formatUserName: function formatUserName(val) {

            if (val == "1" || val == "2") {
                return this.loginUser.nickName;
            } else {
                return this.loginUser.name;
            }
        }
    },
    //给服务器端使用的方法
    asyncData: function asyncData(store) {
        console.log('asyncData...');
        // store.dispatch('fetchIndexList')
    },

    methods: (0, _extends3.default)({}, (0, _vuex.mapActions)(['fetchMenus', 'fetchUserInfo', 'fetchRightMenuList']), {
        goto: function goto(url) {
            this.$router.push(url);
        }
    }),
    mounted: function mounted() {
        var winH = document.documentElement.clientHeight;
        var headerH = parseFloat(window.getComputedStyle(document.getElementsByClassName("el-header")[0]).height);
        var footerH = parseFloat(window.getComputedStyle(document.getElementsByClassName("el-footer")[0]).height);
        var main = document.getElementsByClassName("el-main")[0];
        if (window.location.href.indexOf("article/save") == -1) {
            main.style.height = winH - headerH - footerH + "px";
        }
        this.fetchMenus(-1);
        var _this = this;

        var token = _cookie2.default.getCookie('token');
        console.log(token);

        this.fetchUserInfo({ uuid: token, fn: function fn(user) {
                // console.log("=========="+user);
                _this.fetchRightMenuList(user.roleId);
            } });
    }
};

/***/ })

})
//# sourceMappingURL=1.c38734a75bfc8d40eb84.hot-update.js.map