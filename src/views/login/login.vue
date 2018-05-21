<template>
    <main :style="{height:h+'px'}">
        <el-form ref="form" :rules="rules" :model="user" label-width="80px">
            <div class="login-bg">
                <h2>用户登录</h2>
                <div class="input-area">
                    <el-form-item prop="userName">
                        <el-input v-model="user.userName"  placeholder="请输入您的用户名"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                         <!--{{user.password}}-->
                        <el-input v-model="user.password"  type="password" placeholder="请输入您的密码"></el-input>
                    </el-form-item>
                </div>
                <div class="rem-area">
                    <el-checkbox v-model="checked">记住账号</el-checkbox>
                    <a href="#">忘记密码?</a>
                </div>
                <div class="btn-area">
                    <button  @click="login" class="login-btn">登录</button>
                </div>
                <!--<div class="loadding" :style="{width:w+'%'}"></div>-->
            </div>
        </el-form>
        <!--<el-button :plain="true" @click="open4">错误</el-button>-->
    </main>
</template>
<style>
    body {
        background: url("../../../assets/images/bg2.jpg") no-repeat center;
        background-size: cover;
        width: 100%;
    }

    .login-bg {
        width: 500px;
        background: rgba(255, 255, 255, .4);
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -250px;
        margin-top: -150px;
    }

    .login-bg h2 {
        font-size: 26px;
        color: #FFF;
        margin-top: 30px;
        text-align: center;
    }

    .input-area {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-item: center;
    }

    .login-input {
        border-radius: 5px;
        padding: 14px 10px;
        font-size: 14px;
        outline: none;
        border-width: 0;
        display: block;
        margin: 10px 80px;
    }

    .rem-area {
        display: flex;
        justify-content: space-between;
        margin: 10px 80px;
    }

    .rem-area a {
        color: #FFF;
        font-size: 14px;
        text-decoration: none;
    }

    .btn-area {
        display: flex;
        justify-content: center;
        margin: 20px 10px 34px;
    }

    .login-btn {
        padding: 12px 120px;
        font-size: 14px;
        border: 0px solid #ccc;
        outline: none;
        color: #FFF;
        background: #ff561b;
        border-radius: 5px;
    }

    .el-checkbox {
        margin-left: 4px;
        color: #FFF;
    }
    .el-input__inner{
        width: 80%;
        height: 48px;
    }

    /*.loadding {*/
        /*width: 0%;*/
        /*height: 2px;*/
        /*border-radius: 10px;*/
        /*background: #ff561b;*/
        /*position: absolute;*/
        /*top: 0;*/
        /*left: 0;*/
        /*transition: 1s width;*/
    /*}*/
</style>
<script>
    import {mapActions,mapGetters} from 'vuex';
    export default {
        data() {
            return {
                h: 762,
                checked: false,
                // w: 0,
                user: {
                    userName: '',
                    password: ''
                },
                rules: {
                    userName: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        mounted() {
            let winHeight = document.documentElement.clientHeight;
            // document.body.height=winHeight+"px";
            this.h = winHeight;
        },
        computed:{
            ...mapGetters({
                loginState:'getLoginState',
            })
        },
        methods: {
            ...mapActions(['fetchLogin']),
            login(e) {
                e.preventDefault();
                let {userName, password} = this.user;
                this.$refs['form'].validate((valid)=>{
                    if(valid) {
                        this.fetchLogin({name:userName,pwd:password,fn:(data)=>{
                                // this.w = 100;
                                console.dir(data);
                                if(data==false){
                                    this.$message.error('用户名或密码错误，请稍候重试');
                                }else{

                                   window.location.replace("/channel");
                                }
                            }});
                    }
                });
            }
        }

    }
</script>