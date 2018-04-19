

// 在第一个promise中进行reject，则后续所有的then函数都不在执行

function promiseTest(initFn){

	// resolve成功函数
	var count=0      //纪录then函数成功执行的次数
	var TestPM=null  //保存每次成功函数的返回值
	var state=true   //如果有一个then函数返回promise，则递归函数不再执行
	var resolveFn=function(data){
		// 递归执行回掉函数
		
		function run(i){
			
			var num=CallbackArr.length
			// 将后续所有的then方法都挂载新的promise上
			var arr=CallbackArr.slice(i)
			// 检测当前的返回值是否属于promiseTest类
			if(TestPM instanceof promiseTest){
				arr.forEach((j)=>{
					TestPM.then(j.okCB,j.errCB)
				})
				
				state=false
				// 检测当前是否有返回值
			}else if(TestPM){
				CallbackArr[i].okCB(TestPM)
				// 进行正常的执行
			}else{
				// console.log(CallbackArr[i])
				TestPM=CallbackArr[i].okCB(data)
			}
			count++

				if(count<num&&state){
					// console.log(count,num)
					run(count)
				}
			
		}
		run(count)
		
	}
	
	// reject失败函数
	var rejectFn=function(err){
		// 1、如果有一个reject将会中断代码的执行
		CallbackArr[count].errCB(err)
		// 2、如果捕捉错误，但是不阻断代码的执行,继续执行下一个then方法中的成功函数
		count++
		var num=CallbackArr.length
		if(count<num){
				resolveFn()
		}
		
	}

	// promise函数进行实例化时出入的参数
	initFn(resolveFn,rejectFn)

	// then函数的存储
	var CallbackArr=[]
	// then方法的对外接口
	this.then=function(okCallback,errCallback){
		var watch={
			okCB:okCallback,
			errCB:errCallback
		}
		CallbackArr.push(watch)
		//then函数返回当前的promise对象
		return this
	}

}

// 扩展all方法
promiseTest.all=function(){
		// 将获取到的参数转换成数组
		var promiseArr=Array.prototype.slice.apply(arguments)
		var arrLength=promiseArr.length
		// 用count来纪录每一项的值
		var count=0; 
		var result=[]  //用来存储每个pormise的结果
		

		// 返回一个新的promise来进行状态的捕捉
		return new promiseTest((resolve,reject)=>{
			var run=function(){
				promiseArr[count].then((data)=>{
					result.push(data)
					test()
				},(err)=>{
				
					reject(err)
				})	
				
				count++
				if(count<arrLength){
					run()
				}
				
			}
			var test=function(){
				if(result.length==arrLength){
					
					resolve(result)
				}
			}

			run()
		})
}

// 检测all方法
var pro1=new promiseTest(function(resolve,reject){
	setTimeout(()=>{
		// resolve(1)
		reject("失败了1")
	},2000)
	
})
var pro2=new promiseTest(function(resolve,reject){
	setTimeout(()=>{
		// resolve(2)
		reject("失败了2")
	},4000)
	
})
var pro3=new promiseTest(function(resolve,reject){
	setTimeout(()=>{
		// resolve(4)
		reject("失败了3")
	},3000)
	
})

// 
// promiseTest.all(pro1,pro2,pro3).then((data)=>{
// 	console.log(data)
// },(err)=>{
// 	console.log(err)
// })


// 扩展race方法
promiseTest.race=function(){
		
		// 将获取到的参数转换成数组
		var promiseArr=Array.prototype.slice.apply(arguments)
		var arrLength=promiseArr.length
		// 用count来纪录每一项的值
		var count=0; 
		var resultErr=[]  //用来存储每个pormise的错误的结果
		var resultOk=[]
		// 返回一个新的promise来进行状态的捕捉
		return new promiseTest((resolve,reject)=>{
			var run=function(){
				promiseArr[count].then((data)=>{
					
					resultOk.push(data)
					
					test()
				},(err)=>{
					resultErr.push(err)
					testErr()
				})	
				
				count++
				if(count<arrLength){
					run()
				}
				
			}
			// 检测如果成功的数组中有一个结果，立即执行resolve函数，并且数组长度只有为1时，才会执行；
			var test=function(){
				if(resultOk.length==1){
					
					resolve(resultOk[0])
				}
			}
			var testErr=function(){
				if(resultErr.length==arrLength){
					reject(resultErr)
				}
			}

			run()
		})
}

promiseTest.race(pro1,pro2,pro3)
.then((data)=>{
	console.log(data)
},(err)=>{
	console.log(err)
})


// new promiseTest(function(resolve,reject){
// 	setTimeout(()=>{
// 		resolve(1)
// 	},2000)
	
// }).then((data)=>{
// 	console.log(data)
// })	