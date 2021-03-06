/**
 *  用于生成 客户端bundle.json文件
 */
require('babel-register');
var webpack=require("webpack");
const base = require('./webpack.base.config');
const merge = require('webpack-merge');
let {isProd}=require("../config");
const path = require('path');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const config = merge(base, {
    entry: {
        app: './src/entry-client.js',
        libs:['vue','vue-router','axios','vuex'] //依赖库
    },
    plugins: [
        // 设置全局的环境变量 代码中可以直接使用设置的环境变量
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.VUE_ENV': '"client"'
        }),
        // 热加载
        isProd? function(){}:new webpack.HotModuleReplacementPlugin(),
         new webpack.optimize.CommonsChunkPlugin({
            name:"libs",
            filename:"libs.js?[hash]",
            minChunks:Infinity
        }),
        new VueSSRClientPlugin()
    ]
})
module.exports = config