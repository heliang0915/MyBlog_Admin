<template>
    <layout :hastable="true">
        <!--main中内容 start-->
        <el-row style="margin-bottom: 20px">
            <el-col>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>角色管理</el-breadcrumb-item>
                    <el-breadcrumb-item>角色列表</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <el-form :inline="true" :model="key" class="demo-form-inline">
                    <el-form-item label="角色名称">
                        <el-input  v-model="key.name" placeholder="角色名称"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="search">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col>
                <el-table  :data="roleState.roles" @selection-change="selectHandler" >
                    <!--<el-table-column type="selection" width="55" ></el-table-column>-->
                    <!--<el-table-column prop="uuid" label="uuid" width="300"></el-table-column>-->
                    <el-table-column prop="name" label="角色名称" ></el-table-column>
                    <el-table-column prop="order" label="排序号"></el-table-column>
                    <el-table-column label="操作" width="360" @row-click="operation">
                        <template slot-scope="scope">
                            <el-button type="success" @click="operation(scope.row)" round size="mini" icon="el-icon-edit">编辑</el-button>
                            <el-button type="danger"  @click="deleteRole(scope.row)" round size="mini" icon="el-icon-delete">删除</el-button>
                            <el-button type="primary" @click="setRight(scope.row)" round size="mini" icon="el-icon-setting">设置权限</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                        v-if="roleState.total>roleState.pageSize"
                        background
                        layout="prev, pager, next"
                        :pageSize=roleState.pageSize
                        :total="roleState.total" @current-change="getSize">
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
                roleState:'getRoleList',
                delMsg:'getRoleDelMsg'
            })
        },
        components:{
            layout
        },
        //给服务器端使用的方法
        asyncData(store){
            console.dir("asyncData..."+store.store);
            store=store.store?store.store:store;
            // store.dispatch('fetchRoleList')
        },
        mounted(){
            let {title,tag}=this.key;
            this.fetchRoleList({cur:1,params:{title,tag}});
            // this.fetchRoleList();
        },
        methods:{
            ...mapActions(['fetchRoleList','fetchRoleDel']),
            getSize(size){
                let {title,tag}=this.key;
                this.fetchRoleList({cur:size,params:{title,tag}});
                // this.fetchRoleList(size);
            },
            operation(row){
                var id=row.uuid;
                this.$router.push("/role/save?uuid="+id+"?temp="+Math.random());
            },
            setRight(row){
                var id=row.uuid;
                this.$router.push("/right/"+id);
            },
            deleteRole(row){
                var id=row.uuid;
                this.fetchRoleDel({uuid:id,fn:()=>{
                        let msg="删除成功";
                        let {flag,err}=this.delMsg;
                        if(flag!=1){
                            msg=err;
                        }
                        this.$message({
                            message:msg,
                            type:(flag!=1)?'error':'success'
                        })
                        let {title,tag}=this.key;
                        this.fetchRoleList({cur:1,params:{title,tag}});
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
                this.fetchRoleList({cur:1,params:{name,tag}});
            }
        }
    }
</script>