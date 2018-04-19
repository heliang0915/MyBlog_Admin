<template>
    <layout>
        <el-row style="background: #FFF;padding:35px 15px;height: 100%;">
            <el-col>
                <el-form ref="form" :rules="rules" :model="user" label-width="80px">

                    <el-form-item prop="name" label="用户名称" >
                        <el-input v-model="user.name"></el-input>
                    </el-form-item>
                    <el-form-item prop="pwd" label="密码" >
                        <el-input type="password" v-model="user.pwd"></el-input>
                    </el-form-item>
                    <el-form-item prop="phone" label="手机号" >
                        <el-input v-model="user.phone"></el-input>
                    </el-form-item>
                    <el-form-item prop="type" label="角色">
                        <el-select v-model="user.roleId" placeholder="请选择">
                            <el-option
                                    v-for="item in user.roles"
                                    :key="item.uuid"
                                    :label="item.name"
                                    :value="item.uuid">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item  label="头像">
                        <el-upload
                                style="display: inline-block;float: left;margin-right: 10px;"
                                class="upload-demo"
                                action="/upload/uploadFile"
                                list-type="picture-card"
                                :on-success="handleAvatarSuccess"
                                :on-preview="handlePictureCardPreview"
                                :on-remove="handleRemove"
                                :multiple="false"
                                :limit="1"
                                name="upload"
                                :auto-upload="true" >
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="user.pic">
                        </el-dialog>
                        上次使用：<img v-if="user.pic!=null" style="width: 150px;height: 150px;border-radius: 10px;" :src="user.pic" alt="">
                    </el-form-item>
                    <el-form-item prop="loginType" label="登录方式" >
                        <el-select v-model="user.loginType" placeholder="请选择">
                        <!--<el-input v-model="user.loginType"></el-input>-->
                            <el-option
                                    key="ht"
                                    label="后台登录"
                                    value="0">
                            </el-option>
                            <el-option
                                    key="wx"
                                    label="微信"
                                    value="1">
                            </el-option>
                            <el-option
                                    key="qq"
                                    label="QQ"
                                    value="2">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSave">保存</el-button>
                        <el-button @click="onBack">返回</el-button>
                    </el-form-item>
                    <el-input type="hidden" v-model="user.uuid"></el-input>
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
                        { required: true, message: '请输入用户名称', trigger: 'blur' }
                    ]
                },
                imageUrl:'',
                dialogVisible:false
            }
        },
        computed:{
            ...mapGetters({
                state:'getUserSaveState',
                user:'getUserSingle'
            })

        },
        mounted(){
            var uuid=this.$route.query.uuid;
            uuid= uuid==null?0:uuid;
            this.fetchUser(uuid);
        },
        methods:{
            ...mapActions(['userSave','fetchUser','resetUserForm']),
            onBack(){
                this.$router.push("/user");
            },
            handleAvatarSuccess(res, file){
                if(res.flag){
                    this.imageUrl =res.data.url+"?w=300&q=100";// URL.createObjectURL(file.raw);
                    this.user.pic=this.imageUrl;
                }
            },
            handlePictureCardPreview(){
                console.log("handlePictureCardPreview....");
                this.dialogVisible = true;
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            onSave(){
                let {message}=this.state;

                this.$refs['form'].validate((valid)=>{
                    console.log(this.user);
                    if(valid){
                        this.userSave({user:this.user,fn:()=>{
                            let msg="保存成功";
                            let {flag,err}=message;
                            if(flag!=1){
                                msg=err;
                            }else{
                                if(!this.user.uuid){
                                    this.resetUserForm();
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