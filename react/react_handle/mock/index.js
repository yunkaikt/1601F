var Mock = require("mockjs")
var Random = Mock.Random
var shopcart = require("./shopcart")
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
}