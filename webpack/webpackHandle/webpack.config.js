var path = require("path")
var htmlWebpackPlugin=require("html-webpack-plugin")
var webpack=require("webpack")
module.exports = {
  // entry: "./src/main.js",  //单一文件
  entry: {
      mains:"./src/main.js",
      apps:"./src/app.js"
  },  //多入口文件
  output:{
    path:path.join(__dirname,"dist"),
    filename:"[id]-[name]-[hash].js"
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: [
              "env"
            ]
          }
        }]
      },
      {
        test: /\.css$/,
        use: ["style-loader","css-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ["url-loader"]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
    ]
  },
  devServer:{
      contentBase:path.join(__dirname,"dist"),
      host:"localhost",
      port:"8080",
      // watchContentBase:false,
      hot:false,
      // inline:false,
      open:true,
      // setup(app){
      //     app.get("/apis",function(req,res,next){
      //         res.send("124")
      //     })
      // },
      // before(app){
      //   app.get("/api",function(req,res,next){
      //     res.send("345")
      //    })
      // },
      // after(app){
      //   app.get("/apis",function(req,res,next){
      //     res.send("678")
      //    })
      // },
      proxy:{
        // "/api": "http://localhost:3000/",
        "/apis": {
            target: "http://localhost:3000",
            pathRewrite: {"^/apis" : "/api"},
            secure: false
          }

      }
  },
  plugins:[
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        name:"common",
        filename:"common.js"
    }),
    // new webpack.HotModuleReplacementPlugin(), //不写也可实现更新
    new htmlWebpackPlugin({
        filename:"index.html",
        template:"./src/index.html"
      })
  ]
}
