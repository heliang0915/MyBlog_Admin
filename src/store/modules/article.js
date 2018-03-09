import * as types from '../mutaion-types';
import articleQuery from '../../api/articleQuery';
import editorQuery from '../../api/editorQuery';

const state={
    articles:[],
    innerChannels:[],
    fetching:true,
    total:0,
    pageSize:0,
    article:{
        title:'',
        content:'',
        tag:'',
        uuid:''
    },
    message:{
        flag:0,
        err:''
    },
    editorConfig:{}
}

const mutations={
    [types.FETCH_ARTICLE_LIST](state,payload){
        state.fetching=false;
        state.articles=payload.models;
        state.total=payload.total;
        state.pageSize=payload.pageSize;
    },
    [types.ARTICLE_SAVE](state,payload){
        let mes=payload;
        if(mes=="ok"){
            state.message.flag=1;
        }else{
            state.message.flag=0;
            state.message.err=mes;
        }
    },
    [types.FETCH_ARTICLE_SINGLE](state,payload){
        state.article=payload.module;
        state.innerChannels=payload.channels
    },
    [types.RESET_ARTICLE](state,payload){
        state.article={
            name:'',
            note:'',
            uuid:''
        };
    },
    [types.DELETE_ARTICLE](state,payload){

        let mes=payload;
        if(mes=="ok"){
            state.message.flag=1;
        }else{
            state.message.flag=0;
            state.message.err=mes;
        }
    },
    [types.EDITOR_CFG](state,payload){
        state.editorConfig=payload;
    }
}

const actions={
    fetchArticleList:async ({commit},cur)=>{
        var pageInfo= await  articleQuery.list(cur);
        commit(types.FETCH_ARTICLE_LIST,pageInfo)
    },
    articleSave:async ({commit},{article,fn})=>{
        var message= await articleQuery.save(article);
        commit(types.ARTICLE_SAVE,message)
        fn==null?function () {}:fn();
    },
    fetchArticle:async ({commit},uuid)=>{

        let article=await  articleQuery.getSingle(uuid);
        commit(types.FETCH_ARTICLE_SINGLE,article)
    },
    resetForm:({commit})=>{
        commit(types.RESET_ARTICLE)
    },
    fetchArticleDel:async ({commit},{uuid,fn})=>{
        let message=await  articleQuery.del(uuid);
        commit(types.DELETE_ARTICLE,message);
        fn==null?function () {}:fn();
    },
    fetchEditorCfg:async ({commit})=>{
        console.log("fetchEditorCfg>>>>>>>>>>");
        let editorCfg=await editorQuery.getEditorCfg();
        console.log("editorCfg>>>>>"+editorCfg);
        commit(types.EDITOR_CFG,editorCfg)
    }

}
const getters={
    getArticleList:(state)=>state,
    getArticleSaveState:(state)=>state,
    getArticleSingle:(state)=>state,
    getArticleDelMsg:(state)=>state.message,
    getEditor:(state)=>state.editorConfig
}

module.exports={
    state,
    mutations,
    actions,
    getters
}