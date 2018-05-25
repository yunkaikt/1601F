var path = require("path")
var api = require("../mock/index")

module.exports = {
    base: {
        // entry:path.join(__dirname,"../src/main.js"),
        // entry: path.join(__dirname, "../srcRouter/main.jsx"),
        // entry: path.join(__dirname, "../srcLogin/main.jsx"),
        // entry: path.join(__dirname, "../srcFlux/main.jsx"),
        // entry: path.join(__dirname, "../srcRedux/main.jsx"),
        // entry: path.join(__dirname, "../srcReactRedux/main.jsx"),
        entry: path.join(__dirname, "../srcCar/main.jsx"),
        outputPath: path.join(__dirname, "../dist"),
        outputFileName: "[id]-[name]-[hash].js",
        templatePath: "./srcCar/index.html",
        // templatePath: "./src/index.html",
        // templatePath:"./srcLogin/index.html",
        htmlMinify: {
            removeComments: true, //去除注释
            collapseWhitespace: true, //去除空格
            removeAttributeQuotes: true, //移除属性的引号
            removeEmptyAttributes: true, //去除空属性
        }

    },
    dev: {
        host: "localhost",
        port: 8099,
        browserOpen: true,
        devtool: "cheap-module-eval-source-map",
        // devtool:false,
        proxy: {
            "/apis": {
                target: "http://localhost:3000",
                pathRewrite: { "^/apis": "/api" },
                secure: false
            }
        },
        before: api
    },
    build: {
        uglifyJsSourceMap: false,
        devtool: false
    },
    babel: {
        presets: [
            // "env",
            ["env", { modules: false }],
            "stage-0",
            "react"
        ],
        plugins: [
            ["transform-runtime",
                {
                    "helpers": false,
                    "polyfill": false,
                    "regenerator": true,
                    "moduleName": "babel-runtime"
                }
            ], "syntax-dynamic-import", "transform-object-rest-spread", "transform-react-jsx",["import", {
                libraryName: "antd-mobile",
                style: true,
              }]
        ]
        
    }
}