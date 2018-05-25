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
    chunkFilename:"[id]-[name]-[hash].js"  //组件懒加载时的文件名字，以及存储
  },
  module:{
    rules: [
      {
        test: /\.js|.jsx$/,
        use: [{
          loader: "babel-loader",
          options: config.babel
        }]
      },
       // 使用css的module方式进行css的局部作用域划分
       {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader?module"
        }),
        exclude: /node_modules/
      },
      // 对于antd的modules中的css不可以使用css的module方式加载
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        }),
        include: /node_modules/
      },
      // 为antd单独添加less加载器
      {
          test: /\.less$/,
          use: [{
              loader: "style-loader"
          }, {
              loader: "css-loader"
          }, {
              loader: "less-loader",
              // 针对antd的form报错处理
              options: {
                javascriptEnabled: true
            }
          }]
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
    extensions: [".js", ".jsx",".css"],
    
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