import * as types from '../mutaion-types';
import commentQuery from '../../api/commentQuery';

const state={
    comments:[],
    fetching:true,
    total:0,
    pageSize:0,
    comment:{
        uuid:'',
        userId:'', //用户ID
        blogId:'', //博客ID
        content:'',//内容
        date:'',// 评论时间
        type:'',//是评
    },
    message:{
        flag:0,
        err:''
    }
}


const mutations={
    [types.FETCH_COMMENT_LIST](state,payload){
        state.fetching=false;
        state.comments=payload.models;
        state.total=payload.total;
        state.pageSize=payload.pageSize;
        state.innerChannels=payload.channels;
    },
    [types.COMMENT_SAVE](state,payload){
        let mes=payload;
        if(mes=="ok"){
            state.message.flag=1;
        }else{
            state.message.flag=0;
            state.message.err=mes;
        }
    },
    [types.FETCH_COMMENT_SINGLE](state,payload){
        state.comment=payload;
        // state.innerChannels=payload.channels
    },
    [types.RESET_COMMENT](state,payload){
        state.comment={
            name:'',
            pwd:'',
            phone:'',
            loginTime:'',
            loginType:'',
            uuid:''
        };
    },
    [types.DELETE_COMMENT](state,payload){
        let mes=payload;
        if(mes=="ok"){
            state.message.flag=1;
        }else{
            state.message.flag=0;
            state.message.err=mes;
        }
    }
}

const actions={
    fetchCommentList:async ({commit},{cur,params})=>{
        var pageInfo= await  commentQuery.list({cur,params});
        commit(types.FETCH_COMMENT_LIST,pageInfo)
    },
    commentSave:async ({commit},{comment,fn})=>{
        console.log("comment>>>>"+comment);
        var message= await commentQuery.save(comment);
        commit(types.COMMENT_SAVE,message)
        fn==null?function () {}:fn();
    },
    fetchComment:async ({commit},uuid)=>{
        let comment=await  commentQuery.getSingle(uuid);
        commit(types.FETCH_COMMENT_SINGLE,comment)
    },
    fetchCommentInfo:async ({commit},uuid)=>{
        let comment=await  commentQuery.getCommentInfo(uuid);
        commit(types.COMMENT_INFO,comment)
    },
    resetCommentForm:({commit})=>{
        commit(types.RESET_COMMENT)
    },
    fetchCommentDel:async ({commit},{uuid,fn})=>{
        let message=await  commentQuery.del(uuid);
        commit(types.DELETE_COMMENT,message);
        fn==null?function () {}:fn();
    }

}
const getters={
    getCommentList:(state)=>state,
    getCommentSaveState:(state)=>state,
    getCommentSingle:(state)=>state.comment,
    getCommentDelMsg:(state)=>state.message
}

module.exports={
    state,
    mutations,
    actions,
    getters
}