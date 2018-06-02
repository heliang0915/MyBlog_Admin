<template>
    <layout :hastable="true">
        <!--main中内容 start-->
        <el-row style="margin-bottom: 20px">
            <el-col>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>栏目管理</el-breadcrumb-item>
                    <el-breadcrumb-item>栏目列表</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <el-form :inline="true" :model="key" class="demo-form-inline">
                    <el-form-item label="栏目名称">
                        <el-input v-model="key.title" placeholder="栏目名称"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="search">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col>
                <el-table  :data="channelState.channels" @selection-change="selectHandler" >
                    <!--<el-table-column type="selection" width="55" ></el-table-column>-->
                    <el-table-column prop="uuid" label="uuid" width="300" ></el-table-column>
                    <el-table-column prop="name" label="栏目名称" ></el-table-column>
                    <el-table-column prop="note" label="栏目描述"></el-table-column>
                    <el-table-column prop="pName" label="上级栏目"></el-table-column>
                    <el-table-column prop="rank" label="层级"></el-table-column>
                    <el-table-column prop="order" label="排序号"></el-table-column>
                    <el-table-column label="操作" width="200" @row-click="operation">
                        <template slot-scope="scope">
                            <el-button type="success" @click="operation(scope.row)" round size="mini" icon="el-icon-edit">编辑</el-button>
                            <el-button type="danger"  @click="deleteChannel(scope.row)" round size="mini" icon="el-icon-delete">删除</el-button>
                            <!--<el-button type="primary" @click="oepnMsg('info','查看')" round size="mini" icon="el-icon-search">查看</el-button>-->
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                        v-if="channelState.total>channelState.pageSize"
                        background
                        layout="prev, pager, next"
                        :pageSize=channelState.pageSize
                        :total="channelState.total" @current-change="getSize">
                </el-pagination>
            </el-col>
        </el-row>
        <!--main中内容 end-->
    </layout>
</template>
<script>
    import {mapActions,mapGetters} from 'vuex';
    import layout from '../layout'
    export default{
        data() {
            return {
                date:'',
                // formInline: {
                //     user: '',
                //     region: ''
                // },
                key:{
                    title:'',
                    tag:''
                },
                selected:[]
            }
        },
        computed:{
            ...mapGetters({
                channelState:'getChannelList',
                delMsg:'getDelMsg'
            })
        },
        components:{
            layout
        },
        //给服务器端使用的方法
        asyncData(store){
            console.dir("asyncData..."+store.store);
            store=store.store?store.store:store;
            store.dispatch('fetchChannelList')
        },
        mounted(){
            let {title}=this.key;
            this.fetchChannelList({cur:1,params:{title}});
        },
        methods:{
            ...mapActions(['fetchChannelList','fetchChannelDel']),
            getSize(size){
                let {title}=this.key;
                this.fetchChannelList({cur:size,params:{title}});
            },
            operation(row){
                var id=row.uuid;
                this.$router.push("/channel/save?uuid="+id+"?temp="+Math.random());
            },
            deleteChannel(row){
                var id=row.uuid;
                this.fetchChannelDel({uuid:id,fn:()=>{
                    let msg="删除成功";
                    let {flag,err}=this.delMsg;
                    if(flag!=1){
                        msg=err;
                    }
                    this.$message({
                        message:msg,
                        type:(flag!=1)?'error':'success'
                    })
                    let {title}=this.key;
                    this.fetchChannelList({cur:1,params:{title}});
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
                let {title}=this.key;
                this.fetchChannelList({cur:1,params:{title}});
            }
        }
    }
</script>
