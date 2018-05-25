var Mock = require("mockjs")
var Random = Mock.Random
var shopcart = require("./shopcart")

var cityList=require("./city")
var provinceCity=require("./provinceCity")
    // Random.cname()
    // Random.city()


var list = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-100': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'price': Math.ceil(Math.random() * 9),
        'name': "@cname",
        'addr': "@city",
        "content": "@cparagraph"
    }]
})

console.log(list)
let userList=[
    {
        userId:"1",
        username:"zhangsan",
        password:"1q2w3e"
    }
]

let num=1
var bodyParser = require('body-parser');
module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.get("/api/data", function(req, res, next) {
        res.send(shopcart)
    })
    app.get("/api/obj", function(req, res, next) {
        res.send({
            obj: {
                name: 'zhangsan'
            },
            address: "beijing"
        })
    })
    app.post("/api/obj1", function(req, res, next) {
        console.log(req.body)
        res.send({
            obj: {
                name: req.body.name
            },
            address: "beijing2"
        })
    })
    app.get("/api/getId", function(req, res, next) {
        console.log(req.body)
        res.send({
            userId: "1"
        })
    })
    app.post("/api/getUser", function(req, res, next) {
        console.log(req.body)
        let arr = list.list.filter((i) => {
            if (i.id == req.body.userId) {
                return true
            } else {
                return false
            }
        })
        res.send({
            arr
        })
    })
    app.get("/api/dataList", function(req, res, next) {
        res.send(list)
    })

    // 根据userId来判断用户是否存在
    app.post("/api/testUser", function(req, res, next) {
        let {userId}=req.body
        let state=userList.some((i)=>{
            if(i.userId==userId){
                return true
            }else{
                return false
            }
        })
        if(state){
            res.send({
                code:"10001",
                msg:"用户存在"
            })
        }else{
            res.send({
                code:"10002",
                msg:"用户不存在"
            })
        }
       
    })
    // 登录接口
    app.post("/api/login", function(req, res, next) {
        let {username,password}=req.body
        let resData=null
        let state=userList.some((i)=>{
            if(i.username==username&&i.password==password){
                resData=i
                return true
            }else{
                return false
            }
        })
        if(state){
            res.send({
                code:"10003",
                userId:resData.userId,
                msg:"登录成功"
            })
        }else{
            res.send({
                code:"10004",
                msg:"登录失败"
            })
        }
    })

    // 注册接口
    app.post("/api/register", function(req, res, next) {
        let {username,password}=req.body
        let resData=null
        let state=userList.every((i)=>{
            if(i.username==username){
                resData=i
                return false
            }else{
                return true
            }
        })
        if(state){
            num++
            let obj={userId:num,...req.body}
            userList.push(obj)
            res.send({
                code:"10005",
                msg:"用户添加成功"
            })
        }else{
            res.send({
                code:"10006",
                msg:"用户添加失败"
            })
        }
       
    })
    // 二手车相关
    app.get('/api/cityList', function (req, res) {
        res.json(cityList);
    });
    app.get('/api/provinceCity', function (req, res) {
    res.json(provinceCity);
    });
}