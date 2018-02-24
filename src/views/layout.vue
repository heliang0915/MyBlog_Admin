<template>
    <div>
        <el-container>
            <!--头部-->
            <el-header>
                <el-row>
                    <el-col :span="4">
                        <!--<img class="logo"  alt="">-->
                        <h3>MyBlog</h3>
                    </el-col>
                    <el-col :span="18">
                        &nbsp;
                    </el-col>
                    <el-col :span="2">
                        <el-dropdown>
                            <!--<i class="el-icon-setting" style="margin-right: 15px"></i>-->
                            <img class="user-photo" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519447010817&di=c8d1a6f79578825d7a891c957a705a5b&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201505%2F24%2F20150524232638_kEQGm.jpeg"></img>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>
                                    <el-badge is-dot class="item">
                                        <i class="el-icon-edit"></i><span>我的资料</span>
                                    </el-badge>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <i class="el-icon-share"></i> <span>我的关注</span>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <i class="el-icon-delete"></i> <span>退出</span>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <span class="user">王小虎</span>
                    </el-col>
                </el-row>
            </el-header>
            <el-container>
                <el-aside :width="hastable?'120px':'68px'" height="100%">
                    <el-menu  default-active="1-1-1" class="el-menu-vertical-demo"  :collapse="true">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-document"></i>
                                <span slot="title">小说内容维护</span>
                            </template>
                            <el-submenu index="1-1">
                                <span slot="title">栏目管理</span>
                                <el-menu-item index="1-1-1" @click="goto('/')">栏目列表</el-menu-item>
                                <el-menu-item index="1-1-2" @click="goto('/edit')">小说标签列表</el-menu-item>
                            </el-submenu>
                            <el-submenu index="1-2">
                                <span slot="title">文章管理</span>
                                <el-menu-item index="1-2-1">文章列表</el-menu-item>
                                <el-menu-item index="1-2-2">优质作品列表</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航四</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <slot></slot>
                </el-main>
            </el-container>
            <el-footer height="40">
                xxxx版权所有
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
    body > .el-container {
        margin-bottom: 40px;
    }

</style>
<script>
    import {mapActions,mapGetters} from 'vuex';
    export default{
        props:{
          hastable:{
              type:Boolean,
              default:false
          }
        },
        computed:{
            ...mapGetters({
                indexState:'getIndexList'
            })
        },
        //给服务器端使用的方法
        asyncData(store){
            console.log('asyncData...');
            store.dispatch('fetchIndexList')
        },
        mounted(){
            console.log('mounted....');
            this.fetchIndexList();
        },
        methods:{
            ...mapActions(['fetchIndexList']),
            goto(url){
                this.$router.push(url);
            }
        }
    }
</script>
