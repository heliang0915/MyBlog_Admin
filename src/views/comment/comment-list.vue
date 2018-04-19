<template>
    <layout :hastable="true">
        <!--main中内容 start-->
        <el-row style="margin-bottom: 20px">
            <el-col>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>评论管理</el-breadcrumb-item>
                    <el-breadcrumb-item>评论列表</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <el-form :inline="true" :model="key" class="demo-form-inline">
                    <el-form-item label="评论内容">
                        <el-input  v-model="key.name" placeholder="评论内容"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="search">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col>
                <!--{{commentState}}-->
                <el-table  :data="commentState.comments" @selection-change="selectHandler" >
                    <!--<el-table-column type="selection" width="55" ></el-table-column>-->
                    <!--<el-table-column prop="uuid" label="uuid" width="300"></el-table-column>-->
                    <el-table-column prop="blogName" label="文章标题" ></el-table-column>
                    <el-table-column prop="userName" label="评论用户" ></el-table-column>
                    <el-table-column prop="content" label="评论内容"></el-table-column>
                    <el-table-column prop="date" label="评论时间"></el-table-column>
                    <el-table-column prop="order" label="排序号"></el-table-column>
                    <el-table-column label="操作" width="200" @row-click="operation">
                        <template slot-scope="scope">
                            <!--<el-button type="success" @click="operation(scope.row)" round size="mini" icon="el-icon-edit">编辑</el-button>-->
                            <el-button type="danger"  @click="deleteComment(scope.row)" round size="mini" icon="el-icon-delete">删除</el-button>
                            <!--<el-button type="primary" @click="oepnMsg('info','查看')" round size="mini" icon="el-icon-search">查看</el-button>-->
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                        v-if="commentState.total>commentState.pageSize"
                        background
                        layout="prev, pager, next"
                        :pageSize=commentState.pageSize
                        :total="commentState.total" @current-change="getSize">
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
                commentState:'getCommentList',
                delMsg:'getCommentDelMsg'
            })
        },
        components:{
            layout
        },
        //给服务器端使用的方法
        asyncData(store){
            console.dir("asyncData..."+store.store);
            store=store.store?store.store:store;
            // store.dispatch('fetchCommentList')
        },
        mounted(){
            let {name,tag}=this.key;
            this.fetchCommentList({cur:1,params:{name,tag,type:1}});
            // this.fetchCommentList();
        },
        methods:{
            ...mapActions(['fetchCommentList','fetchCommentDel']),
            getSize(size){
                let {name,tag}=this.key;
                this.fetchCommentList({cur:size,params:{name,tag,type:1}});
                // this.fetchCommentList(size);
            },
            operation(row){
                var id=row.uuid;
                this.$router.push("/comment/save?uuid="+id+"?temp="+Math.random());
            },
            deleteComment(row){
                var id=row.uuid;
                this.fetchCommentDel({uuid:id,fn:()=>{
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
                        this.fetchCommentList({cur:1,params:{name,tag,type:1}});
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
                this.fetchCommentList({cur:1,params:{name,tag,type:1}});
            }
        }
    }
</script>