
import React,{Component} from "react"
import {
  Link
} from "react-router-dom"

class App extends Component{
    constructor(props){
      super(props)
      
    }
    render(){
      return <div className="app">
                <ul>
                  <li>
                   <Link to="/tab">tab</Link>
                  </li>
                  <li>
                  <Link to={{
                        pathname: '/parent', 
                        search: '?sort=name',
                        state: { fromDashboard: true }
                      }}
                      >parent</Link>
                  </li>
                  <li>
                  <Link to="/navlink">navlink</Link>
                  </li>
                  <li>
                  {/* <Link to="/parent">parent</Link> */} 
                  </li>
                  <li>
                    <Link to="/hocgetdata">高阶组件获取数据</Link>
                  </li>
                  <li>
                    <Link to="/hocgetdataasync">高阶组件获取数据接口间存在依赖关系</Link>
                  </li>
                  <li>
                    <Link to="/hocHandleData">高阶组件获取数据并且处理数据双重高阶</Link>
                  </li>
                  <li>
                    <Link to="/lazyComponent">组件懒加载</Link>
                  </li>
                </ul>
               
               
               
                      
                {this.props.children}
                
              </div>
    }
   
}

export default App