<template>
    <div>
        <!--权限-&#45;&#45;{{uuid}}-->
        <!--{{menuStruct}}-->


        <!--<el-row :gutter="24">-->
            <!--<el-col :span="24"><div class="grid-content bg-purple">根节1</div></el-col>-->
        <!--</el-row>-->

        <!--<el-row :gutter="24">-->
            <!--<el-col :span="22" :offset="2"><div class="grid-content bg-purple">二级1</div></el-col>-->
        <!--</el-row>-->

        <ul class="first-menu">
            <li>
                <h2>

                </h2>
                <ul class="second-menu">
                    <li>
                        <h3>二级1</h3>
                        <ul class="three-menu">
                            <li>
                                <ul>
                                    <li>三级1</li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li>三级2</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>二级2</h3>
                        <ul>
                            <li>
                                <ul>
                                    <li>三级3</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <!--<li>-->
                <!--<h2>根节2</h2>-->
                <!--<ul>-->
                    <!--<li>-->
                        <!--<h3>二级</h3>-->
                        <!--<ul>-->
                            <!--<li>-->
                                <!--<h4>三级</h4>-->
                                <!--<ul>-->
                                    <!--<li>1111</li>-->
                                <!--</ul>-->
                            <!--</li>-->
                        <!--</ul>-->
                    <!--</li>-->

                <!--</ul>-->
            <!--</li>-->
        </ul>
    </div>
</template>
<style>
     .first-menu{
         /*display: flex;*/

     }
    .second-menu{
        display: flex;
    }
     .second-menu li{
         margin:10px;
     }
    .three-menu{
        /*display: flex;*/
    }
  .el-row {
          margin-bottom: 20px;
   }
     .el-row:last-child {
          margin-bottom: 0;
     }
     .el-col {
         border-radius: 4px;
     }
     .bg-purple-dark {
         background: #99a9bf;
     }
     .bg-purple {
         background: #d3dce6;
     }
     .bg-purple-light {
         background: #e5e9f2;
     }
     .grid-content {
         border-radius: 4px;
         min-height: 36px;
     }
     .row-bg {
         padding: 10px 0;
         background-color: #f9fafc;
     }
</style>
<script>
    import {mapActions,mapGetters} from 'vuex';
    export default {
        data(){
            return{
                uuid:this.$route.params.uuid
            }
        },
        mounted(){
            this.fetchMenus(-1);
            // console.log(this.$route.params);
        },
        computed:{
            ...mapGetters({
                menuStruct:'getMenus'
            })
        },
        //给服务器端使用的方法
        asyncData(store){
            console.log('asyncData...');
            // store.dispatch('fetchIndexList')
        },
        methods:{
            ...mapActions(['fetchMenus'])
        },
    }
</script>