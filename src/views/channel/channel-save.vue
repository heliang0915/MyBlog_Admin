<template>
    <layout>
        <el-row style="background: #FFF;padding:35px 15px;height: 100%;">
            <el-col>
                <el-form ref="form" :rules="rules" :model="channel" label-width="80px">
                    <el-form-item prop="name" label="栏目名称" >
                        <el-input v-model="channel.name"></el-input>

                    </el-form-item>
                    <el-form-item prop="note" label="栏目描述">
                        <el-input :autosize="{minRows:10}" type="textarea" v-model="channel.note"></el-input>
                    </el-form-item>
                    <el-form-item  label="上级栏目">
                        <!--<el-select v-model="channel.rank" placeholder="请选择">-->
                            <!--<el-option :value="1" label="1级"></el-option>-->
                            <!--<el-option :value="1" label="1级"></el-option>-->
                            <!--<el-option :value="2" label="2级"></el-option>-->
                        <!--</el-select>-->
                        <el-tree ref="tree"  :default-expand-all="true" highlight-current :show-checkbox="false" :data="state.ranks" node-key="value" @node-click="handleNodeClick" :props="defaultProps"></el-tree>
                        <!--<el-cascader-->
                                <!--:options="state.channels"-->
                                <!--:show-all-levels="false"-->
                                <!--@change="handleChange"-->
                        <!--&gt;</el-cascader>-->

                        <!--<el-tree :data="data" :props="defaultProps"></el-tree>-->


                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSave">保存</el-button>
                        <el-button @click="onBack">返回</el-button>
                    </el-form-item>
                    <el-input type="hidden" v-model="channel.uuid"></el-input>
                </el-form>
            </el-col>
        </el-row>
    </layout>
</template>

<script>
    import layout from '../layout';
    import {mapActions,mapGetters} from 'vuex';
    let temp={name:'',note:'',uuid:''};
    export default {
        data(){
          return {
              rules: {
                  name: [
                      { required: true, message: '请输入栏目名称', trigger: 'blur' }
                  ]
              },
              defaultProps: {
                  children: 'children',
                  label: 'label'
              }
          }
        },
        computed:{
            ...mapGetters({
                state:'getSaveState',
                channel:'getSingle'
            })

        },
        mounted(){
            var uuid=this.$route.query.uuid;
            uuid= uuid==null?0:uuid;
            this.fetchChannel(uuid);
            setTimeout(()=>{
                this.$refs.tree.setCurrentKey(this.channel.pid);
            },100)
        },
        methods:{
            ...mapActions(['channelSave','fetchChannel','resetForm']),
            onBack(){
                this.$router.push("/channel");
            },
            handleNodeClick(data){
                this.channel.rank=parseInt(data.rank)+1;
                this.channel.pid=data.value;
            },
            onSave(){
                let {message}=this.state;
                this.$refs['form'].validate((valid)=>{
                    if(valid){
                       this.channelSave({channel:this.channel,fn:()=>{
                            let msg="保存成功";
                            let {flag,err}=message;
                            if(flag!=1){
                                msg=err;
                            }else{
                                setTimeout(()=>{
                                    this.onBack();
                                },500)
                                // if(!this.channel.uuid){
                                //     this.resetForm();
                                // }else{
                                //     setTimeout(()=>{
                                //         this.onBack();
                                //     },500)
                                // }
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