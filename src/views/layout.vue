<template>
    <div>
        <el-container>
            <!--头部-->
            <el-header>
                <el-row>
                    <el-col :span="4">
                        <h3>MyBlog</h3>
                    </el-col>
                    <el-col :span="17" style="white-space: nowrap">&nbsp;</el-col>
                    <el-col :span="3" style="white-space: nowrap">
                        <el-dropdown @command="handleCommand">
                            <img class="user-photo" :src="loginUser.pic"></img>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>
                                    <el-badge is-dot class="item">
                                        <i class="el-icon-edit"></i><span>我的资料</span>
                                    </el-badge>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <i class="el-icon-share"></i> <span>我的关注</span>
                                </el-dropdown-item>
                                <el-dropdown-item command="exit">
                                    <i  class="el-icon-delete"></i> <span>退出</span>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <span class="user">{{(loginUser.loginType==1||loginUser.loginType==2)?loginUser.nickName: loginUser.name}}</span>
                    </el-col>
                </el-row>
            </el-header>
            <el-container>
                <el-aside :width="hastable?'120px':'68px'" height="100%">
                    <el-menu   class="el-menu-vertical-demo"  :collapse="true">
                        <el-submenu :index="(index+1)+''" :key="'fMenu'+index" v-if="rightMenus.indexOf(fMenu.uuid)>-1" v-for="(fMenu,index) in menuStruct">
                            <template slot="title">
                                <i :class="menuIcon[index]"></i>
                                <span slot="title">{{fMenu.name}}</span>
                            </template>

                            <el-submenu :key="'sMenu'+m" :index="(index+1)+'-'+(m+1)" v-if="rightMenus.indexOf(sMenu.uuid)>-1" v-for="(sMenu,m) in fMenu.children">
                                <span slot="title">{{sMenu.name}}</span>
                                <el-menu-item :index="(index+1)+'-'+(m+1)+'-'+(n+1)" :key="'tMenu'+n" v-if="rightMenus.indexOf(tMenu.uuid)>-1" v-for="(tMenu,n) in sMenu.children" @click="goto(tMenu.url)">{{tMenu.name}}</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main v-cloak>
                    <slot></slot>
                </el-main>
            </el-container>
            <el-footer height="40">
                博客之家版权所有
            </el-footer>
        </el-container>
    </div>
</template>
<style>
    .el-header, .el-footer {
        /*background-color: #B3C0D1;*/
        color: #333;
        text-align: center;
        /*line-height: 60px;*/
    }
    .el-header{
        height: 80px !important;
        background-color: rgb(64, 158, 255);
        line-height: 80px !important;
    }
    .el-header img{
        height: 66px;
        width: 66px;
        position: relative;
        top: 5px;
        border-radius: 4px;
    }
    .el-header h3{
        color: #FFF;
        font-size: 20px;
        position: relative;
        left: 10px;
        display: inline-block;
    }
    .el-header .user-photo{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-top: 10px;
    }

    .el-header .user{
        position: relative;
        top: -15px;
        left: 5px;
        font-size: 14px;
        color: #FFF;
    }
    .el-aside {
        background-color: #f7f7f7;
        color: #333;
        text-align: center;
        height: 100%;
        /*line-height: 200px;*/
    }
    .el-menu--collapse{
        width: auto;
    }
    .el-menu{
        border-right-width: 0px;
    }
    .el-menu-vertical-demo{
        background-color: #FFF;
    }

    .el-main {
        min-height: 590px;
        background-color: #f7f7f7;
        /*color: #333;*/
        /*text-align: center;*/
        /*line-height: 160px;*/
    }
    .el-dropdown-menu{
        top:70px !important;
    }

    .el-dropdown-menu__item span{
        display: inline-block;
        margin-left: 10px;
    }

    .el-container {
        margin-bottom: 40px;
        width: 100%;
        background-color: #FFF !important;
    }
    #app{
        height: 100% !important;
        background: #FFF;
    }

</style>
<script>
    import {mapActions,mapGetters} from 'vuex';
    import cookieUtil from '../util/cookie';
    export default{
        props:{
          hastable:{
              type:Boolean,
              default:false
          }
        },
        data(){
          return{
              menuIcon:["el-icon-document","el-icon-menu","el-icon-view","el-icon-setting"]
          }
        },
        computed:{
            ...mapGetters({
                menuStruct:'getMenus',
                loginUser:'getUserInfo',
                rightMenus: 'getRightMenuList'
            })
        },
        filters:{
            formatUserName(val){

                if(val=="1"||val=="2"){
                    return this.loginUser.nickName;
                }else {
                    return this.loginUser.name;
                }
            }
        },
        //给服务器端使用的方法
        asyncData(store){
            console.log('asyncData...');
        },
        methods:{
            ...mapActions(['fetchMenus','fetchUserInfo','fetchRightMenuList']),
            goto(url){
                this.$router.push(url);
            },
            handleCommand(command){
                if(command=="exit"){
                    this.exit()
                }
            },
            exit(){
                cookieUtil.delCookie('token');
                setTimeout(()=>{
                    window.location.replace("/login");
                },100)
            }
        },
        mounted(){
            var winH=document.documentElement.clientHeight;
            var headerH=parseFloat(window.getComputedStyle(document.getElementsByClassName("el-header")[0]).height);
            var footerH=parseFloat(window.getComputedStyle(document.getElementsByClassName("el-footer")[0]).height);
            var main=document.getElementsByClassName("el-main")[0];
            if(window.location.href.indexOf("article/save")==-1){
                main.style.height=(winH-headerH-footerH)+"px"
            }
            this.fetchMenus(-1);
            var _this=this;
            var token=cookieUtil.getCookie('token');
            this.fetchUserInfo({uuid:token,fn:function(user){
               _this.fetchRightMenuList({roleId:user.roleId});
            }});
        }
    }
</script>
