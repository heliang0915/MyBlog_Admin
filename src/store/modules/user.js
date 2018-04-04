import * as types from '../mutaion-types';
import userQuery from '../../api/userQuery';

const state={
    users:[],
    fetching:true,
    total:0,
    pageSize:0,
    loginUser:{},
    user:{
        name:'',
        pwd:'',
        phone:'',
        loginTime:'',
        loginType:'',
        uuid:''
    },
    message:{
        flag:0,
        err:''
    }
}

const mutations={
    [types.FETCH_USER_LIST](state,payload){
        state.fetching=false;
        state.users=payload.models;
        state.total=payload.total;
        state.pageSize=payload.pageSize;
        state.innerChannels=payload.channels;
    },
    [types.USER_SAVE](state,payload){
        let mes=payload;
        if(mes=="ok"){
            state.message.flag=1;
        }else{
            state.message.flag=0;
            state.message.err=mes;
        }
    },
    [types.FETCH_USER_SINGLE](state,payload){
        state.user=payload;
        // state.innerChannels=payload.channels
    },
    [types.RESET_USER](state,payload){
        state.user={
            name:'',
            pwd:'',
            phone:'',
            loginTime:'',
            loginType:'',
            uuid:''
        };
    },
    [types.USER_INFO](state,payload){
        state.loginUser=payload;
    },
    [types.DELETE_USER](state,payload){
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
    fetchUserList:async ({commit},{cur,params})=>{
        var pageInfo= await  userQuery.list({cur,params});
        commit(types.FETCH_USER_LIST,pageInfo)
    },
    userSave:async ({commit},{user,fn})=>{
        console.log("user>>>>"+user);
        var message= await userQuery.save(user);
        commit(types.USER_SAVE,message)
        fn==null?function () {}:fn();
    },
    fetchUser:async ({commit},uuid)=>{
        let user=await  userQuery.getSingle(uuid);
        commit(types.FETCH_USER_SINGLE,user)
    },
    fetchUserInfo:async ({commit},uuid)=>{
        let user=await  userQuery.getUserInfo(uuid);
        commit(types.USER_INFO,user)
    },
    resetUserForm:({commit})=>{
        commit(types.RESET_USER)
    },
    fetchUserDel:async ({commit},{uuid,fn})=>{
        let message=await  userQuery.del(uuid);
        commit(types.DELETE_USER,message);
        fn==null?function () {}:fn();
    }

}
const getters={
    getUserList:(state)=>state,
    getUserSaveState:(state)=>state,
    getUserSingle:(state)=>state.user,
    getUserInfo:(state)=>state.loginUser,
    getUserDelMsg:(state)=>state.message
}

module.exports={
    state,
    mutations,
    actions,
    getters
}