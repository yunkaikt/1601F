
import React,{Component} from "react"
<<<<<<< HEAD
import {
  Link
} from "react-router-dom"
=======

>>>>>>> d19114ad95ab739d881ac89b3fe347df448de5f0

class App extends Component{
    constructor(props){
      super(props)
      
    }
    render(){
      return <div className="app">
<<<<<<< HEAD
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
                </ul>
               
               
               
                      
                {this.props.children}
                
=======
                {this.props.children}
>>>>>>> d19114ad95ab739d881ac89b3fe347df448de5f0
              </div>
    }
   
}

export default App