webpackHotUpdate(1,{

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*.el-main{*/\n/*background-color: #FFF !important;*/\n/*}*/\nh2 {\n    font-size: 24px;\n}\nh3 {\n    font-size: 20px;\n}\nh4 {\n    font-size: 16px;\n}\n.first-menu {\n    font-size: 26px !important;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 30px;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n.first-menu > li {\n    margin-bottom: 20px;\n    margin-right: 100px;\n}\n.second-menu {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 24px 0 10px 10px;\n}\n.second-menu li {\n    margin-left: 14px;\n}\n.three-menu {\n    padding: 5px 0 10px 0;\n}\n.three-menu > li {\n    padding: 2px;\n}\n", "", {"version":3,"sources":["/Users/hotread/work/learn/MyBlog_Admin/src/views/right/src/views/right/right-index.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqDA,aAAA;AACA,sCAAA;AACA,KAAA;AACA;IACA,gBAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,2BAAA;IACA,qBAAA;IAAA,qBAAA;IAAA,cAAA;IACA,cAAA;IACA,oBAAA;QAAA,gBAAA;CAEA;AAEA;IACA,oBAAA;IACA,oBAAA;CACA;AAEA;IACA,qBAAA;IAAA,qBAAA;IAAA,cAAA;IACA,0BAAA;CAEA;AAEA;IACA,kBAAA;CACA;AAEA;IACA,sBAAA;CACA;AAEA;IACA,aAAA;CACA","file":"right-index.vue","sourcesContent":["<template>\n    <layout :hastable=\"false\">\n        <div style=\"background-color: #FFF\">\n            <el-row>\n                <el-form ref=\"form\" :model=\"form\" label-width=\"80px\">\n                    <el-checkbox-group v-model=\"form.menus\">\n                        <ul class=\"first-menu\">\n                            <li v-for=\"first in menuStruct\">\n                                <h2>\n                                    <el-checkbox type=\"menus\" :label=\"first.uuid\">\n                                        <template>\n                                            <h2>{{first.name}}</h2>\n                                        </template>\n                                    </el-checkbox>\n                                </h2>\n                                <ul class=\"second-menu\">\n                                    <li v-for=\"(second,secondIndex) in first.children\">\n                                        <h3>\n                                            <el-checkbox type=\"menus\" :label=\"second.uuid\">\n                                                <template>\n                                                    <h3>{{second.name}}</h3>\n                                                </template>\n                                            </el-checkbox>\n                                        </h3>\n                                        <ul class=\"three-menu\">\n                                            <li v-for=\"three in second.children\">\n                                                <ul>\n                                                    <li>\n                                                        <el-checkbox :label=\"three.uuid\">\n                                                            <template>\n                                                                <h4>{{three.name}}</h4>\n                                                            </template>\n                                                        </el-checkbox>\n                                                    </li>\n                                                </ul>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                </ul>\n                            </li>\n                        </ul>\n                    </el-checkbox-group>\n\n                    <el-form-item>\n                        <el-button type=\"primary\" @click=\"onSave\">保存</el-button>\n                        <el-button @click=\"onBack\">返回</el-button>\n                    </el-form-item>\n                </el-form>\n            </el-row>\n        </div>\n    </layout>\n</template>\n<style>\n    /*.el-main{*/\n    /*background-color: #FFF !important;*/\n    /*}*/\n    h2 {\n        font-size: 24px;\n    }\n\n    h3 {\n        font-size: 20px;\n    }\n\n    h4 {\n        font-size: 16px;\n    }\n\n    .first-menu {\n        font-size: 26px !important;\n        display: flex;\n        padding: 30px;\n        flex-wrap: wrap;\n\n    }\n\n    .first-menu > li {\n        margin-bottom: 20px;\n        margin-right: 100px;\n    }\n\n    .second-menu {\n        display: flex;\n        padding: 24px 0 10px 10px;\n\n    }\n\n    .second-menu li {\n        margin-left: 14px;\n    }\n\n    .three-menu {\n        padding: 5px 0 10px 0;\n    }\n\n    .three-menu > li {\n        padding: 2px;\n    }\n</style>\n<script>\n    import {mapActions, mapGetters} from 'vuex';\n    import layout from '../layout';\n\n    export default {\n        data() {\n            return {\n                form: {\n                    menus: []\n                },\n                roleId: this.$route.params.uuid\n            }\n        },\n        components: {\n            layout\n        },\n        computed: {\n            ...mapGetters({\n                menuStruct: 'getMenus',\n                rightMenus: 'getRightMenuList',\n                state: 'getRightSaveState'\n            })\n    },\n        mounted() {\n            this.fetchMenus(-1);\n            this.fetchRightMenuList({roleId:this.roleId,fn: (menus)=>{\n                this.form.menus = menus;\n            }});\n        },\n        methods: {\n            ...mapActions(['fetchMenus', 'fetchRightMenuList', 'rightSave']),\n            onBack() {\n                this.$router.push(\"/role\");\n            },\n            onSave() {\n                let {message}=this.state;\n                console.log(message)\n                let {roleId, form} = this;\n                let menus = form.menus;\n\n\n                // let {message}=this.state;\n\n                // this.$refs['form'].validate((valid)=>{\n                //     console.log(this.role);\n                //     if(valid){\n\n\n                this.rightSave({\n                    roleId, menus, fn: () => {\n                        let msg = \"保存成功\";\n                        let {flag, err} = message;\n                        if (flag != 1) {\n                            msg = err;\n                        }\n                        this.$message({\n                            message: msg,\n                            type: (flag != 1) ? 'error' : 'success'\n                        })\n                    }\n                });\n\n            }\n        }\n    }\n\n\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ })

})
//# sourceMappingURL=1.a3150f0cacfd8b52ef5b.hot-update.js.map