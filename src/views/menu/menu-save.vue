<template>
    <layout>
        <el-row style="background: #FFF;padding:35px 15px;height: 100%;">
            <el-col>
                <el-form ref="form" :rules="rules" :model="menu" label-width="80px">

                    <el-form-item prop="name" label="菜单名称" >
                        <el-input v-model="menu.name"></el-input>
                    </el-form-item>
                    <el-form-item prop="url" label="菜单地址" >
                        <el-input  v-model="menu.url"></el-input>
                    </el-form-item>
                    <el-form-item prop="rank" label="等级" >

                        <!--<el-input v-model="menu.rank"></el-input>-->
                        <el-select @change="onChange" v-model="menu.rank" placeholder="等级">
                            <el-option
                                    v-for="i in 3"
                                    :key="i"
                                    :label="i+'级'"
                                    :value="i">
                            </el-option>
                        </el-select>

                    </el-form-item>
                    <el-form-item prop="parentId" label="上级菜单" >
                    <el-select v-model="menu.parentId" placeholder="上级菜单">
                        <el-option
                                v-for="item in state.menus"
                                :key="item.uuid"
                                :label="item.name"
                                :value="item.uuid">
                        </el-option>
                    </el-select>

                        <!--<el-input v-model="menu.parentId"></el-input>-->
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSave">保存</el-button>
                        <el-button @click="onBack">返回</el-button>
                    </el-form-item>
                    <el-input type="hidden" v-model="menu.uuid"></el-input>
                </el-form>
            </el-col>
        </el-row>
    </layout>
</template>
<script>
    import layout from '../layout';
    import {mapActions,mapGetters} from 'vuex';
    export default {
        data(){
            return {
                rules: {
                    name: [
                        { required: true, message: '请输入菜单名称', trigger: 'blur' }
                    ]
                }
            }
        },
        computed:{
            ...mapGetters({
                state:'getMenuSaveState',
                menu:'getMenuSingle'
            })
        },
        mounted(){
            var uuid=this.$route.query.uuid;
            uuid= uuid==null?0:uuid;
            this.fetchMenu(uuid);

        },
        methods:{
            ...mapActions(['menuSave','fetchMenu','resetMenuForm']),
            onBack(){
                this.$router.push("/menu");
            },
            onChange(){
                // alert("change");
            },
            onSave(){
                let {message}=this.state;

                this.$refs['form'].validate((valid)=>{
                    console.log(this.menu);
                    if(valid){
                        this.menuSave({menu:this.menu,fn:()=>{
                                let msg="保存成功";
                                let {flag,err}=message;
                                if(flag!=1){
                                    msg=err;
                                }else{
                                    if(!this.menu.uuid){
                                        this.resetMenuForm();
                                    }else{
                                        setTimeout(()=>{
                                            this.onBack();
                                        },500)
                                    }
                                }
                                this.$message({
                                    message:msg,
                                    type:(flag!=1)?'error':'success'
                                })
                            }});
                    }
                })
            }
        },
        components:{
            layout
        }
    }
</script>