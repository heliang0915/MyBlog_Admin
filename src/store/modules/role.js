import * as types from '../mutaion-types';
import roleQuery from '../../api/roleQuery';

const state={
    roles:[],
    fetching:true,
    total:0,
    pageSize:0,
    role:{
        name:'',
        uuid:''
    },
    message:{
        flag:0,
        err:''
    }
}

const mutations={
    [types.FETCH_ROLE_LIST](state,payload){
        state.fetching=false;
        state.roles=payload.models;
        state.total=payload.total;
        state.pageSize=payload.pageSize;
        state.innerChannels=payload.channels;
    },
    [types.ROLE_SAVE](state,payload){
        let mes=payload;
        if(mes=="ok"){
            state.message.flag=1;
        }else{
            state.message.flag=0;
            state.message.err=mes;
        }
    },
    [types.FETCH_ROLE_SINGLE](state,payload){
        state.role=(payload==""?{}:payload);
    },
    [types.RESET_ROLE](state,payload){
        state.role={
            name:'',
            uuid:''
        };
    },
    [types.DELETE_ROLE](state,payload){
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
    fetchRoleList:async ({commit},{cur,params})=>{
        var pageInfo= await  roleQuery.list({cur,params});
        commit(types.FETCH_ROLE_LIST,pageInfo)
    },
    roleSave:async ({commit},{role,fn})=>{
        // console.log("role>>>>"+role);
        var message= await roleQuery.save(role);
        commit(types.ROLE_SAVE,message)
        fn==null?function () {}:fn();
    },
    fetchRole:async ({commit},uuid)=>{

        let role=await  roleQuery.getSingle(uuid);
        commit(types.FETCH_ROLE_SINGLE,role)
    },
    resetRoleForm:({commit})=>{
        commit(types.RESET_ROLE)
    },
    fetchRoleDel:async ({commit},{uuid,fn})=>{
        let message=await  roleQuery.del(uuid);
        commit(types.DELETE_ROLE,message);
        fn==null?function () {}:fn();
    }

}
const getters={
    getRoleList:(state)=>state,
    getRoleSaveState:(state)=>state,
    getRoleSingle:(state)=>state.role,
    getRoleDelMsg:(state)=>state.message
}

module.exports={
    state,
    mutations,
    actions,
    getters
}