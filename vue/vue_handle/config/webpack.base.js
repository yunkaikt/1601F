var path = require("path")
var htmlWebpackPlugin=require("html-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')
var webpack=require("webpack")
var config=require("./config")
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
  entry: config.base.entry,
  output:{
    path:config.base.outputPath,
    filename:"js/"+config.base.outputFileName,
    chunkFilename:"[id]-[name]-[hash].js"
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: "babel-loader",
          options: config.babel
        }]
      },
      {
        test:/\.vue$/,
        use:[{
          loader:"vue-loader",
          options:{
            loaders:{
              js:[
                { loader: 'babel-loader', options:config.babel}
              ]
            }
          }
        }]
      },
      {
        test: /\.css$/,
        use:ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(jpg|png|gif|ttf|woff|eot|svg)$/,
        use: ["url-loader"]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
    ]
  },
  resolve:{
    extensions: [".js", ".vue"],
    alias:{
      "vue":"vue/dist/vue.js"
    }
  },
  plugins:[
    new htmlWebpackPlugin({
        filename:"index.html",
        template:config.base.templatePath,
        minify:config.base.htmlMinify
      }),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, '../src/static'),
          to: config.base.outputPath+"/static",
          ignore: ['.*']
        }
      ]),
        // 提取css
      new ExtractTextPlugin({
        filename: 'css/[name].[contenthash].css',
        allChunks: true,
      })
      // new OptimizeCSSPlugin({
      //   assetNameRegExp: /\.optimize\.css$/g,
      //   cssProcessor: require('cssnano'),
      //   cssProcessorOptions: { discardComments: { removeAll: true } },
      //   canPrint: true
      // })
  ]
}