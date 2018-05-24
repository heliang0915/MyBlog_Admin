<template>
    <layout :hastable="true">
        <!--main中内容 start-->
        <el-row style="margin-bottom: 20px">
            <el-col>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
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
                    <el-form-item label="时间">
                        <el-date-picker
                                v-model="date"
                                type="date"
                                placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col>
                <el-table  :data="tableData" >
                    <el-table-column prop="date" label="日期"></el-table-column>
                    <el-table-column prop="name" label="姓名" ></el-table-column>
                    <el-table-column prop="address" label="地址"></el-table-column>
                    <el-table-column prop="time" label="时间"></el-table-column>
                    <el-table-column label="操作" width="290">
                        <template slot-scope="scope">
                            <el-button type="success" @click="oepnMsg('success','编辑')" round size="mini" icon="el-icon-edit">编辑</el-button>
                            <el-button type="danger" @click="oepnMsg('error','删除')" round size="mini" icon="el-icon-delete">删除</el-button>
                            <el-button type="primary" @click="oepnMsg('info','查看')" round size="mini" icon="el-icon-search">查看</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="1000" @current-change="getSize">
                </el-pagination>
            </el-col>
        </el-row>
        <!--main中内容 end-->
    </layout>
</template>
<script>
    import {mapActions,mapGetters} from 'vuex';
    import layout from './layout'
    export default{
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                time:'12333'
            };
            return {
                tableData: Array(10).fill(item),
                date:'',
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
        components:{
            layout
        },
        //给服务器端使用的方法
        asyncData(store){
            // console.dir("asyncData..."+store.store);
            // store=store.store?store.store:store;
            // store.dispatch('fetchIndexList')
        },
        mounted(){
            console.log('mounted....');
            // this.fetchIndexList();
        },
        methods:{
            ...mapActions(['fetchIndexList']),
            getSize(size){
                alert(size);
            },
            oepnMsg(type,msg){
                this.$message({
                    message: msg,
                    type: type
                });
            }
        }
    }
</script>
