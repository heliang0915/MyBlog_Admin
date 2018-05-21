import * as types from '../mutaion-types';
import menuQuery from '../../api/menuQuery';

const state={
    menus:[],
    menuStruct:[],
    fetching:true,
    total:0,
    pageSize:0,
    menu:{
        name:'',
        url:'',//菜单地址
        rank:'',//菜单等级 1级菜单 2级菜单 3级菜单
        parentId:'',//菜单上级
        uuid:''
    },
    message:{
        flag:0,
        err:''
    }
}

const mutations={
    [types.FETCH_MENU_LIST](state,payload){
        console.log(payload);
        state.fetching=false;
        state.menus=payload.models;
        state.total=payload.total;
        state.pageSize=payload.pageSize;
        state.innerChannels=payload.channels;
    },
    [types.FETCH_MENUS](state,payload){
        // console.log("FETCH_MENUS>>>>"+payload);
        state.fetching=false;
        state.menuStruct=payload;
    },
    [types.MENU_SAVE](state,payload){
        let mes=payload;
        if(mes=="ok"){
            state.message.flag=1;
        }else{
            state.message.flag=0;
            state.message.err=mes;
        }
    },
    [types.FETCH_MENU_SINGLE](state,payload){
        state.menu=payload.menu;
        state.menus=payload.menus;
    },
    [types.RESET_MENU](state,payload){
        state.menu={
            name:'',
            url:'',//菜单地址
            rank:'',//菜单等级 1级菜单 2级菜单 3级菜单
            parentId:'',//菜单上级
            uuid:''
        };
    },
    [types.DELETE_MENU](state,payload){
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
    fetchMenuList:async ({commit},{cur,params})=>{
        var pageInfo= await  menuQuery.list({cur,params});
        commit(types.FETCH_MENU_LIST,pageInfo)
    },

    fetchMenus:async ({commit},uuid)=>{
        var menus= await  menuQuery.getChildMenu(uuid);
        // console.log("menus>>>"+menus);
        commit(types.FETCH_MENUS,menus)
    },

    menuSave:async ({commit},{menu,fn})=>{
        // console.log("menu>>>>"+menu);
        var message= await menuQuery.save(menu);
        commit(types.MENU_SAVE,message)
        fn==null?function () {}:fn();
    },
    fetchMenu:async ({commit},uuid)=>{

        let menu=await  menuQuery.getSingle(uuid);
        commit(types.FETCH_MENU_SINGLE,menu)
    },
    resetMenuForm:({commit})=>{
        commit(types.RESET_MENU)
    },
    fetchMenuDel:async ({commit},{uuid,fn})=>{
        let message=await  menuQuery.del(uuid);
        commit(types.DELETE_MENU,message);
        fn==null?function () {}:fn();
    }

}
const getters={
    getMenuList:(state)=>state,
    getMenus:(state)=>state.menuStruct,
    getMenuSaveState:(state)=>state,
    getMenuSingle:(state)=>state.menu,
    getMenuDelMsg:(state)=>state.message
}

module.exports={
    state,
    mutations,
    actions,
    getters
}