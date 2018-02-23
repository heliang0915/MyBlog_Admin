<template>
    <div>
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="4">
                        <!--<img class="logo"  alt="">-->
                        <h3>MyBlog</h3>
                    </el-col>
                    <el-col :span="16">
                        &nbsp;
                    </el-col>
                    <el-col :span="4">
                        <el-dropdown>
                            <!--<i class="el-icon-setting" style="margin-right: 15px"></i>-->
                            <img class="user-photo"></img>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>查看</el-dropdown-item>
                                <el-dropdown-item>新增</el-dropdown-item>
                                <el-dropdown-item>删除</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <span>王小虎</span>
                    </el-col>
                </el-row>
            </el-header>
            <el-container>
                <el-aside width="85px">
                    <el-menu  default-active="1-1-1" class="el-menu-vertical-demo"  :collapse="true">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-document"></i>
                                <span slot="title">小说内容维护</span>
                            </template>

                            <el-submenu index="1-1">
                                <span slot="title">分类管理</span>
                                <el-menu-item index="1-1-1">分类列表</el-menu-item>
                                <el-menu-item index="1-1-2">小说标签列表</el-menu-item>
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
                        <el-row>
                            <el-col>
                                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                                    <el-form-item label="审批人">
                                        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                                    </el-form-item>
                                    <el-form-item label="活动区域">
                                        <el-select v-model="formInline.region" placeholder="活动区域">
                                            <el-option label="区域一" value="shanghai"></el-option>
                                            <el-option label="区域二" value="beijing"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button type="primary" @click="onSubmit">查询</el-button>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                            <el-col>
                                <el-table :data="tableData">
                                    <el-table-column prop="date" label="日期" width="140">
                                    </el-table-column>
                                    <el-table-column prop="name" label="姓名" width="120">
                                    </el-table-column>
                                    <el-table-column prop="address" label="地址">
                                    </el-table-column>
                                </el-table>
                            </el-col>
                        </el-row>

                </el-main>
            </el-container>
            <el-footer>
                footer
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
        /*width: 163px;*/
        /*height: 45px;*/
        height: 66px;
        width: 66px;
        position: relative;
        top: 5px;
        border-radius: 4px;
        /*float: left;*/
    }
    .el-header h3{
        color: #FFF;
        font-size: 20px;
        position: relative;
        /*top: -20px;*/
        left: 10px;
        display: inline-block;
        /*float: left;*/
    }
    .el-header .user-photo{
        height: 50px;
        width: 50px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        /*color: #333;*/
        /*text-align: center;*/
        /*line-height: 160px;*/
    }

    body > .el-container {
        margin-bottom: 40px;
    }

</style>
<script>
    import {mapActions,mapGetters} from 'vuex';
    export default{
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item),
                formInline: {
                    user: '',
                    region: ''
                }
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
            ...mapActions(['fetchIndexList'])
        }
    }
</script>
