var Test=require("./tool.js")
var obj=new Test()

obj.fn()
// console.log(obj[Symbol("name")])

var aa=Symbol()

var bb=aa
var cc=bb
console.log(aa==cc)
// console.log(Symbol()==Symbol())