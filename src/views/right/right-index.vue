<template>
    <layout :hastable="false">
    <div style="background-color: #FFF">
        <!--{{form.menus}}-->
        <el-row>
        <el-form ref="form" :model="form" label-width="80px">
            <el-checkbox-group v-model="form.menus">
            <ul class="first-menu">
                <li v-for="first in menuStruct">
                    <h2>
                        <el-checkbox  type="menus" :label="first.uuid">
                            <template>
                                <h2>{{first.name}}</h2>
                            </template>
                        </el-checkbox>
                    </h2>
                    <ul class="second-menu" >
                        <li v-for="(second,secondIndex) in first.children">
                            <h3>
                                <el-checkbox type="menus" :label="second.uuid">
                                    <template>
                                        <h3>{{second.name}}</h3>
                                    </template>
                                </el-checkbox>
                            </h3>
                            <ul class="three-menu">
                                <li v-for="three in second.children" >
                                    <ul>
                                        <li>
                                            <el-checkbox :label="three.uuid" >
                                                <template>
                                                    <h4>{{three.name}}</h4>
                                                </template>
                                            </el-checkbox>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            </el-checkbox-group>

            <el-form-item>
                <el-button type="primary" @click="onSave">保存</el-button>
                <el-button @click="onBack">返回</el-button>
            </el-form-item>
        </el-form>
        </el-row>
    </div>
    </layout>
</template>
<style>
    /*.el-main{*/
        /*background-color: #FFF !important;*/
    /*}*/
    h2{
        font-size: 24px;
    }
    h3{
        font-size: 20px;
    }
    h4{
        font-size: 16px;
    }
    .first-menu {
        font-size: 26px !important;
        display: flex;
        padding: 30px;
        flex-wrap: wrap;

    }

    .first-menu > li{
        margin-bottom: 20px;
        margin-right: 100px;
    }

    .second-menu {
        display: flex;
        padding: 24px 0 10px 10px;

    }
    .second-menu li{
        margin-left: 14px;
    }

    .three-menu {
        padding: 5px 0 10px 0;
    }

    .three-menu > li {
        padding: 2px;
    }
</style>
<script>
    import {mapActions, mapGetters} from 'vuex';
    import layout from '../layout';
    export default {
        data() {
            return {
                form:{
                    menus:[]
                },
                roleId: this.$route.params.uuid
            }
        },
        components:{
            layout
        },
        computed: {
            ...mapGetters({
                menuStruct: 'getMenus'
            })
        },
        mounted() {
            // alert(this.roleId);
            this.fetchMenus(-1);
        },
        methods: {
            ...mapActions(['fetchMenus']),
            onBack(){
                this.$router.push("/role");
            },
            onSave(){


                // let {message}=this.state;

                // this.$refs['form'].validate((valid)=>{
                //     console.log(this.role);
                //     if(valid){
                //         this.roleSave({role:this.role,fn:()=>{
                //                 let msg="保存成功";
                //                 let {flag,err}=message;
                //                 if(flag!=1){
                //                     msg=err;
                //                 }else{
                //                     if(!this.role.uuid){
                //                         this.resetRoleForm();
                //                     }else{
                //                         setTimeout(()=>{
                //                             this.onBack();
                //                         },500)
                //                     }
                //                 }
                //                 this.$message({
                //                     message:msg,
                //                     type:(flag!=1)?'error':'success'
                //                 })
                //             }});
                //
                //     }
                // })
            }
        }
    }


</script>
