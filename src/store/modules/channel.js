import * as types from '../mutaion-types';
import channelQuery from '../../api/channelQuery';


const state={
    channels:[],
    fetching:true,
    total:0,
    pageSize:0,
    channel:{
        name:'',
        note:'',
        uuid:''
    },
    message:{
        flag:0,
        err:''
    }
}

const mutations={
  [types.FETCH_CHANNEL_LIST](state,payload){
      state.fetching=false;
      state.channels=payload.models;
      state.total=payload.total;
      state.pageSize=payload.pageSize;
  },
   [types.CHANNEL_SAVE](state,payload){
        let mes=payload;
        if(mes=="ok"){
            state.message.flag=1;
        }else{
            state.message.flag=0;
            state.message.err=mes;
        }
   },
    [types.FETCH_CHANNEL_SINGLE](state,payload){
        state.channel=payload;
    },
    [types.RESET_CHANNEL](state,payload){
        state.channel={
            name:'',
            note:'',
            uuid:''
        };
    },
    [types.DELETE_CHANNEL](state,payload){

        let mes=payload;
        if(mes=="ok"){
            state.message.flag=1;
        }else{
            state.message.flag=0;
            state.message.err=mes;
        }
    },
}

const actions={
     fetchChannelList:async ({commit},cur)=>{
         var pageInfo= await  channelQuery.list(cur);
         commit(types.FETCH_CHANNEL_LIST,pageInfo)
     },
     channelSave:async ({commit},{channel,fn})=>{
         var message= await channelQuery.save(channel);
         commit(types.CHANNEL_SAVE,message)
         fn==null?function () {}:fn();
     },
     fetchChannel:async ({commit},uuid)=>{

         let channel=await  channelQuery.getSingle(uuid);
         commit(types.FETCH_CHANNEL_SINGLE,channel)
     },
     resetForm:({commit})=>{
        commit(types.RESET_CHANNEL)
     },
     fetchChannelDel:async ({commit},{uuid,fn})=>{
         // console.log("fetchChannelDel>>>>")
         let message=await  channelQuery.del(uuid);
         commit(types.DELETE_CHANNEL,message);
         fn==null?function () {}:fn();
     }

}
const getters={
     getChannelList:(state)=>state,
     getSaveState:(state)=>state,
     getSingle:(state)=>state.channel,
     getDelMsg:(state)=>state.message
}

module.exports={
    state,
    mutations,
    actions,
    getters
}