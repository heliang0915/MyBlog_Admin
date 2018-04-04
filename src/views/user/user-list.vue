<template>
    <layout :hastable="true">
        <!--main中内容 start-->
        <el-row style="margin-bottom: 20px">
            <el-col>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
                    <el-breadcrumb-item>用户列表</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <el-form :inline="true" :model="key" class="demo-form-inline">
                    <el-form-item label="用户名称">
                        <el-input  v-model="key.name" placeholder="用户名称"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="search">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col>
                <el-table  :data="userState.users" @selection-change="selectHandler" >
                    <!--<el-table-column type="selection" width="55" ></el-table-column>-->
                    <!--<el-table-column prop="uuid" label="uuid" width="300"></el-table-column>-->
                    <el-table-column prop="name" label="用户名称" ></el-table-column>
                    <el-table-column prop="phone" label="手机号"></el-table-column>
                    <el-table-column prop="loginType" label="登录方式"></el-table-column>
                    <el-table-column prop="order" label="排序号"></el-table-column>
                    <el-table-column label="操作" width="200" @row-click="operation">
                        <template slot-scope="scope">
                            <el-button type="success" @click="operation(scope.row)" round size="mini" icon="el-icon-edit">编辑</el-button>
                            <el-button type="danger"  @click="deleteUser(scope.row)" round size="mini" icon="el-icon-delete">删除</el-button>
                            <!--<el-button type="primary" @click="oepnMsg('info','查看')" round size="mini" icon="el-icon-search">查看</el-button>-->
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                        v-if="userState.total>userState.pageSize"
                        background
                        layout="prev, pager, next"
                        :pageSize=userState.pageSize
                        :total="userState.total" @current-change="getSize">
                </el-pagination>
            </el-col>
        </el-row>
        <!--main中内容 end-->
    </layout>
</template>
<script>
    import {mapActions,mapGetters} from 'vuex';
    import layout from '../layout'
    export default {
        data() {
            return {
                date:'',
                key:{
                    name:'',
                    tag:''
                },
                selected:[]
            }
        },
        computed:{
            ...mapGetters({
                userState:'getUserList',
                delMsg:'getUserDelMsg'
            })
        },
        components:{
            layout
        },
        //给服务器端使用的方法
        asyncData(store){
            console.dir("asyncData..."+store.store);
            store=store.store?store.store:store;
            // store.dispatch('fetchUserList')
        },
        mounted(){
            let {name,tag}=this.key;
            this.fetchUserList({cur:1,params:{name,tag}});
            // this.fetchUserList();
        },
        methods:{
            ...mapActions(['fetchUserList','fetchUserDel']),
            getSize(size){
                let {name,tag}=this.key;
                this.fetchUserList({cur:size,params:{name,tag}});
                // this.fetchUserList(size);
            },
            operation(row){
                var id=row.uuid;
                this.$router.push("/user/save?uuid="+id+"?temp="+Math.random());
            },
            deleteUser(row){
                var id=row.uuid;
                this.fetchUserDel({uuid:id,fn:()=>{
                        let msg="删除成功";
                        let {flag,err}=this.delMsg;
                        if(flag!=1){
                            msg=err;
                        }
                        this.$message({
                            message:msg,
                            type:(flag!=1)?'error':'success'
                        })
                        let {name,tag}=this.key;
                        this.fetchUserList({cur:1,params:{name,tag}});
                    }});
            },
            selectHandler(val){
                this.selected=val;
            },

            oepnMsg(type,msg){
                this.$message({
                    message: msg,
                    type: type
                });
            },
            search(){
                let {name,tag}=this.key;
                this.fetchUserList({cur:1,params:{name,tag}});
            }
        }
    }
</script>