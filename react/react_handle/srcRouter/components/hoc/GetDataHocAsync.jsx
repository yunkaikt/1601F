
import React,{Component} from "react"
import axios from "axios"

// 1、高阶组件抛出函数，而不是组件
// 2、函数里面抛出组件
// 3、高阶组件使用时会接收一个组件作为参数传入；
// 4、一般采用state的状态来管理是否到了渲染传入组件的时机
// 5、如果处理数据、获取数据或其他的业务处理完毕，再渲染传入的组件
let GetDataHocAsync=(Com,urlList)=>{
    return class Index extends Component{
      constructor(props){
        super(props)
        
        this.state={
          state:false,
          data:null
        }
      }
      async componentWillMount(){

        console.log(2222)
        let data=[]
        for(var i=0;i<urlList.length;i++){
          
          if(i>=1){
            data[i]=await axios[urlList[i].type](urlList[i].url,{...urlList[i].params,...data[i-1].data})
          }else{
            data[i]=await axios[urlList[i].type](urlList[i].url,{...urlList[i].params})
          }
        }
        console.log(data)
        this.setState({
          state:true,
          data:data
        })
        
      }
      render(){
  
        return <div>
          {this.state.state?<Com getData={this.state.data} {...this.props}/>:null} 
        </div>
  
      }
     
  }
}


export default GetDataHocAsync