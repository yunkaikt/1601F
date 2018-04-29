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
    'name': "@cname",
    'addr': "@city",
    "content": "@cparagraph"
  }]
})
var userlist = [{ name: "zhangsan", pw: "123456", userId: "1" }]
var num = 1
module.exports = function (app) {

  app.get("/api/data", function (req, res, next) {
    res.send(shopcart)
  })
  app.get("/api", function (req, res, next) {
    var data = Mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|1-100': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'name': "@cname",
        'addr': "@city"
      }]
    })
    console.log(data)
    res.send(data)
  })
  app.get("/api/list", function (req, res, next) {

    res.send(list)
  })
  app.get("/api/detail", function (req, res, next) {
    console.log(req.query.id)
    let data = list.list.filter((i) => {
      // console.log(i.id==req.query.id)
      return i.id == req.query.id
    })
    res.send(data)
  })
  app.get("/api/vuex", function (req, res, next) {

    res.send({
      name: "wangwu"
    })
  })
  app.get("/api/vuex1", function (req, res, next) {

    res.send({
      name: "maliu"
    })
  })
  app.get("/api/vuex2", function (req, res, next) {

    res.send({
      name: "heiba"
    })
  })

  app.get("/api/login", function (req, res, next) {
    let { name, pw } = req.query
    console.log(req.query)
    let user = null
    userlist.forEach((i) => {
      if (i.name == name && i.pw == pw) {
        user = i
      }
    })
    if (user) {
      res.send({ code: "1001", msg: "登录成功", data: user })
    } else {
      res.send({ code: "1002", msg: "登录失败" })
    }
  })
  app.get("/api/register", function (req, res, next) {

    let { name, pw } = req.query
    let state = true
    userlist.forEach((i) => {
      if (i.name == name) {
        state = false
      }
    })
    if (state) {
      userlist.push({ name, pw, userId: num++ })
      res.send({ code: "1011", msg: "注册成功" })
    } else {
      res.send({ code: "1012", msg: "用户名重复" })
    }

  })
  app.get("/api/getIndexData", function (req, res, next) {
    res.send({
      code: "1011", msg: "获取成功", data: {
        nav: {
          title: "这里是首页"
        }
      }
    })
  }),
  app.get("/api/getPCData", function (req, res, next) {
    res.send({
      code: "1011", msg: "获取成功", data: {
        collect: {
          project: "这里是pc页面"
        }
      }
    })
  })  
}