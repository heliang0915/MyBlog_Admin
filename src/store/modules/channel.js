import * as types from '../mutaion-types';
import channelQuery from '../../api/channelQuery';


const state={
    channels:[],
    fetching:true,
    total:0
}

const mutations={
  [types.FETCH_CHANNEL_LIST](state,payload){
      console.log(payload.models);
      state.fetching=false;
      state.channels=payload.models;
      state.total=payload.total;
  }
}

const actions={
     fetchChannelList:async ({commit},cur)=>{
         var pageInfo= await  channelQuery.list(cur);
         commit(types.FETCH_CHANNEL_LIST,pageInfo)
     }
}
const getters={
     getChannelList:(state)=>state
}

module.exports={
    state,
    mutations,
    actions,
    getters
}