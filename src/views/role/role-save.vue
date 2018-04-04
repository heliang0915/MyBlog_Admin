<template>
    <layout>
        <el-row style="background: #FFF;padding:35px 15px;height: 100%;">
            <el-col>
                <el-form ref="form" :rules="rules" :model="role" label-width="80px">
                    <el-form-item prop="name" label="角色名称" >
                        <el-input v-model="role.name"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSave">保存</el-button>
                        <el-button @click="onBack">返回</el-button>
                    </el-form-item>
                    <el-input type="hidden" v-model="role.uuid"></el-input>
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
                        { required: true, message: '请输入角色名称', trigger: 'blur' }
                    ]
                }
            }
        },
        computed:{
            ...mapGetters({
                state:'getRoleSaveState',
                role:'getRoleSingle'
            })

        },
        mounted(){
            var uuid=this.$route.query.uuid;
            uuid= uuid==null?0:uuid;
            this.fetchRole(uuid);

        },
        methods:{
            ...mapActions(['roleSave','fetchRole','resetRoleForm']),
            onBack(){
                this.$router.push("/role");
            },
            onSave(){
                let {message}=this.state;

                this.$refs['form'].validate((valid)=>{
                    console.log(this.role);
                    if(valid){
                        this.roleSave({role:this.role,fn:()=>{
                                let msg="保存成功";
                                let {flag,err}=message;
                                if(flag!=1){
                                    msg=err;
                                }else{
                                    if(!this.role.uuid){
                                        this.resetRoleForm();
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