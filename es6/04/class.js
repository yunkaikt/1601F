// var aa=Symbol("addnum")
// class Test{
//   constructor(){
    
//     this.name="zhangsan"
//   }

//   addnum(){
//     console.log(222)
//   }
// }



// Object.assign(Test.prototype,{fn(){},fn1(){}})


// console.log(typeof(Test))

// console.log(Test.prototype)


// var aa=new Test()
// var bb=new Test()

// aa.__proto__.addnum=function(){console.log(11111)}

// bb.addnum()
// console.log(Object.getPrototypeOf(aa))
// console.log(aa)



// function aa(){
//   this.name="zhangsan"
// }

// var a=new aa()
// console.log(a.__proto__.__proto__===aa.prototype.__proto__)
// console.log(aa.__proto__)



// var obj={}

// class Test{
//   constructor(){
    
//     this.name="zhangsan"
//     this.fn=this.fn.bind(this)
//     // this.fn=()=>{
//     //   this.addnum()
//     // }
//     // return obj
//   }
//   addnum(){
//     console.log(222)
//   }
//   fn(){
   
//     this.addnum()
//   }

//   get prop() {
//     return 'getter';
//   }
//   set prop(value) {
//     // console.log('setter: '+value);
//     // this.prop='setter: '+value
//     // return 'setter: '+value
//   }
// }

// var aa=new Test()

// var fn=aa.fn

// fn()
// console.log(aa==obj)
// aa.prop="lisi"
// console.log(aa.prop)


// class Test{
//   static classMethod() {
//     return 'hello';
//   }
//   constructor(){
//     this.name="zhagnsan"
//   }
// }

// class child extends Test{

// }
  

// var aa=new Test()
// console.log(aa.classMethod)
// // console.log(Test.classMethod)
// console.log(child.classMethod)

// function aa(){
//   this.name="zs"
//   console.log(this)
// }
// function bb(){
//   // var {}
// }

// // var b=new bb()
// // var a=new aa()

// // Object.assign(b,a)
// bb.prototype=new aa()

// var b=new bb()

// console.log(b)
// console.log(b.name)






class Test{
  static classMethods() {
    return 'hello';
  }
  constructor(){
    this.name="zhagnsan"
  }
}

class child extends Test{
    static classMethod() {
      console.log(super.classMethods())
    }
    constructor(){
   
      super()
      
      // new Test()
      // return {}
        // return this
    }
}


var child_=new child()
child.classMethod()
console.log(child_.name)
  