<template>
    <layout :hastable="true">
        <!--main中内容 start-->
        <el-row style="margin-bottom: 20px">
            <el-col>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>文章管理</el-breadcrumb-item>
                    <el-breadcrumb-item>文章列表</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <el-form :inline="true" :model="key" class="demo-form-inline">
                    <el-form-item label="文章名称">
                        <el-input v-model="key.title" placeholder="文章名称"></el-input>

                    </el-form-item>
                    <el-form-item label="分类">
                        <el-select v-model="key.tag" placeholder="分类">
                            <el-option
                                    v-for="item in articleState.innerChannels"
                                    :key="item.uuid+item.name"
                                    :label="item.name"
                                    :value="item.uuid">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="search">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col>
                <el-table  :data="articleState.articles" @selection-change="selectHandler" >
                    <!--<el-table-column type="selection" width="55" ></el-table-column>-->
                    <!--<el-table-column prop="uuid" label="uuid" width="300"></el-table-column>-->
                    <el-table-column prop="title" label="文章名称" ></el-table-column>
                    <el-table-column prop="contentTxt" label="文章内容" width="500" :formatter="formatTxt"  ></el-table-column>
                    <el-table-column prop="channelName" label="分类"></el-table-column>
                    <el-table-column prop="date" label="发布日期"></el-table-column>
                    <el-table-column prop="pubUser" label="发布人"></el-table-column>
                    <!--<el-table-column prop="order" label="排序号"></el-table-column>-->
                    <el-table-column label="操作" width="200" @row-click="operation">
                        <template slot-scope="scope">
                            <el-button type="success" @click="operation(scope.row)" round size="mini" icon="el-icon-edit">编辑</el-button>
                            <el-button type="danger"  @click="deleteArticle(scope.row)" round size="mini" icon="el-icon-delete">删除</el-button>
                            <!--<el-button type="primary" @click="oepnMsg('info','查看')" round size="mini" icon="el-icon-search">查看</el-button>-->
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                        v-if="articleState.total>articleState.pageSize"
                        background
                        layout="prev, pager, next"
                        :pageSize=articleState.pageSize
                        :total="articleState.total" @current-change="getSize">
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
                key:{
                    title:'',
                    tag:''
                },
                selected:[]
            }
        },
        computed:{
            ...mapGetters({
                articleState:'getArticleList',
                delMsg:'getArticleDelMsg'
            })
        },
        components:{
            layout
        },
        //给服务器端使用的方法
        asyncData(store){
            console.dir("asyncData..."+store.store);
            store=store.store?store.store:store;
            // store.dispatch('fetchArticleList',{cur:1,params:{title:this.key.title}})
        },
        mounted(){
            let {title,tag}=this.key;
            this.fetchArticleList({cur:1,params:{title,tag}});
        },
        methods:{
            ...mapActions(['fetchArticleList','fetchArticleDel']),
            getSize(size){
                let {title,tag}=this.key;
                this.fetchArticleList({cur:size,params:{title,tag}});
            },
            operation(row){
                var id=row.uuid;
                this.$router.push("/article/save?uuid="+id);
            },
            deleteArticle(row){
                var id=row.uuid;
                this.fetchArticleDel({uuid:id,fn:()=>{
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
                        this.fetchArticleList({cur:1,params:{title,tag}});
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
                let {title,tag}=this.key;
                this.fetchArticleList({cur:1,params:{title,tag}});
            },
            formatTxt(row, column){
                var contextText = row[column.property]==null?'':row[column.property];
                console.log("###contextText##"+contextText);
                var len=68;
                if(contextText&&contextText.length>len){
                    return contextText.substr(0,len)+'...';
                }else{
                    return contextText;
                }

            }
        }
    }
</script>
