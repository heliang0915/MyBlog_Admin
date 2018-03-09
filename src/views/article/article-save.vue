<template>
    <layout>
        <el-row style="background: #FFF;padding:35px 15px;height: 100%;">
            <el-col>
                <el-form ref="form" :rules="rules" :model="info.article" label-width="80px">

                    <el-form-item prop="title" label="文章标题" >
                        <el-input v-model="info.article.title"></el-input>

                    </el-form-item>
                    <el-form-item prop="content" label="内容">
                        <el-input :id="'content'" :autosize="{minRows:10}" type="textarea" v-model="info.article.content"></el-input>
                    </el-form-item>

                    <el-form-item prop="tag" label="分类">
                        <el-select v-model="info.article.tag" placeholder="请选择">
                            <el-option
                                v-for="item in info.innerChannels"
                                :key="item.uuid"
                                :label="item.name"
                                :value="item.uuid">
                            </el-option>
                        </el-select>

                    </el-form-item>
                    <el-form-item  label="图片">
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
                            <img width="100%" :src="info.article.pic" alt="">
                        </el-dialog>
                        上次使用：<img v-if="info.article.pic!=null" style="width: 150px;height: 150px;border-radius: 10px;" :src="info.article.pic" alt="">
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSave">保存</el-button>
                        <el-button @click="onBack">返回</el-button>
                    </el-form-item>
                    <el-input type="hidden" v-model="info.article.uuid"></el-input>
                </el-form>
            </el-col>
        </el-row>
    </layout>
</template>
<style>
    .avatar{
        float: left;
        height: 100px;
        width: 100px;
    }
    main{
        width: auto !important;
    }
</style>

<script>
    import layout from '../layout';
    import {mapActions,mapGetters} from 'vuex';
    let temp={name:'',note:'',uuid:''};
    export default {
        data(){
            return {
                fileList:[],
                imageUrl:'',
                dialogVisible:false,
                rules: {
                    title: [
                        { required: true, message: '请输入文章标题', trigger: 'blur' }
                    ],
                    content: [
                        { required: true, message: '请输入内容', trigger: 'blur' }
                    ]
                }
            }
        },
        computed:{
            ...mapGetters({
                state:'getArticleSaveState',
                info:'getArticleSingle',
                editorCfg:'getEditor'
            })

        },
        mounted(){
            var uuid=this.$route.query.uuid;
            uuid= uuid==null?0:uuid;
            this.fetchArticle(uuid);
            this.fetchEditorCfg();
            this.initEditor();
        },
        methods:{
            ...mapActions(['articleSave','fetchArticle','resetForm','fetchEditorCfg']),
            onBack(){
                this.$router.push("/article");
            },
            initEditor(){
                // console.log("E>>>>>>>>"+E)
                var self=this;

                setTimeout(()=>{
                    var editor = new wangEditor('content');
                    editor.create();
                    console.log(this.info.article.content);
                    editor.$txt.html(this.info.article.content);
                    editor.onchange = function () {
                        // onchange 事件中更新数据
                        self.info.article.content = editor.$txt.html();
                    };
                },1000)


                // 或者 var editor = new E( document.getElementById('editor') )

                // var editCfg=this.editorCfg;
                // var config = {
                //     // //工具栏上的所有的功能按钮和下拉框，可以在new编辑器的实例时选择自己需要的从新定义
                //     toolbar:[
                //         'source | undo redo | bold italic underline strikethrough | superscript subscript | forecolor backcolor | removeformat |',
                //         'insertorderedlist insertunorderedlist | selectall cleardoc paragraph | fontfamily fontsize' ,
                //         '| justifyleft justifycenter justifyright justifyjustify |',
                //         'link unlink | image',
                //         '| fullscreen', 'drafts'
                //     ]
                // };
                // config=Object.assign({},config,editCfg);
                // console.log(window.UM);
                // setTimeout(()=>{
                //     var um = window.UM.getEditor('content', config);
                // },100)

            },
            getEditorCfg(){

            },
            handleAvatarSuccess(res, file){
                if(res.flag){
                    this.imageUrl =res.data.url+"?w=300&q=100";// URL.createObjectURL(file.raw);
                    this.info.article.pic=this.imageUrl;
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
                console.log(this.info);
                let {article}=this.info;
                this.$refs['form'].validate((valid)=>{
                    if(valid){
                        this.articleSave({article:article,fn:()=>{
                                let msg="保存成功";
                                let {flag,err}=message;
                                if(flag!=1){
                                    msg=err;
                                }else{
                                    if(!article.uuid){
                                        this.resetForm();
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