
import React, { Component } from "react"


class Com extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      age: "",
      sex: "女",
      love: [],
      city:"上海"
    }
  }
  changeModule(e) {
    // 正对checkbox的操作
    var checkboxHandle = () => {
      // dom的筛选
      let $elall = document.getElementsByTagName("*")
      var domFilter = [...$elall].filter((i) => {
        if (i.name == e.target.name) {
          return true
        } else {
          return false
        }
      })
      //  判断为数组还是boolean值
      if (domFilter.length > 1) {
        var arr = [...this.state.love]
        if (!e.target.checked) {
          arr.splice(arr.indexOf(e.target.value), 1)
        } else {
          arr.push(e.target.value)
        }
      } else {
        var arr = e.target.checked
      }
      return arr
    }


    this.setState({
      [e.target.name]: e.target.type == "checkbox" ? checkboxHandle() : e.target.value
    }, () => {
      console.log(this.state.sex)
    })
  }
  submit() {
    console.log(this.state)
  }
  render() {
    return <div>
      <ul>
        <li>
          <label >
            用户名：
                  </label>
          <input type="text" name="username" value={this.state.username} onChange={this.changeModule.bind(this)} />
        </li>
        <li>
          <label >
            年龄
                  </label>
          <input type="text" name="age" value={this.state.age} onChange={this.changeModule.bind(this)} />
        </li>
        <li>
          <label >
            性别：
                  </label>
          男：
                  <input type="radio" name="sex" value="男" checked={this.state.sex == "男"} onChange={this.changeModule.bind(this)} />
          女：
                  <input type="radio" name="sex" value="女" checked={this.state.sex == "女"} onChange={this.changeModule.bind(this)} />
        </li>
        <li>
          <label >
            爱好：
                  </label>
          <section>
            篮球：
                    <input type="checkbox" name="love" value="篮球" checked={typeof (this.state.love) != "boolean" ? this.state.love.some((i) => { if (i == "篮球") { return true } else { return false } }) : this.state.love} onChange={this.changeModule.bind(this)} />
          </section>
          <section>
            足球：
                    <input type="checkbox" name="love" value="足球" checked={typeof (this.state.love) != "boolean" ? this.state.love.some((i) => { if (i == "足球") { return true } else { return false } }) : this.state.love} onChange={this.changeModule.bind(this)} />
          </section>
          <section>
            高尔夫球：
                    <input type="checkbox" name="love" value="高尔夫球" checked={typeof (this.state.love) != "boolean" ? this.state.love.some((i) => { if (i == "高尔夫球") { return true } else { return false } }) : this.state.love} onChange={this.changeModule.bind(this)} />
          </section>
        </li>
        <li>
          <label >
            城市：
                  </label>
          <select name="city" id="" defaultValue={this.state.city} onChange={this.changeModule.bind(this)}>
            <option value="北京" >北京</option>
            <option value="上海"  >上海</option>
            <option value="广州"  >广州</option>
          </select>
        </li>
        <li>
          <button onClick={this.submit.bind(this)}>提交</button>
        </li>
      </ul>
    </div>
  }

}

export default Com