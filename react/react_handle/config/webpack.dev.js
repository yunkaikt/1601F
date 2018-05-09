var path = require("path")
var htmlWebpackPlugin=require("html-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')
var webpack=require("webpack")
var config=require("./config")
const merge = require('webpack-merge')
const baseWebpack=require("./webpack.base.js")
module.exports = merge(baseWebpack,{
  devServer:{
      contentBase:config.dev.outputPath,
      host:config.dev.host,
      port:config.dev.port,
      //watchContentBase:false,
      // hot:false,
      //inline:false,
      open:config.dev.browserOpen, 
      before:config.dev.before,
      proxy:config.dev.proxy,
      historyApiFallback:true
  },
  devtool:config.dev.devtool,
  plugins:[
   
  ]
})
