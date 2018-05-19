// 1、根据vuex的使用方式进行封装flux，逆向思维，先把使用方式写出；
// 2、根据使用结果，进行Flux类的封装；
// 3、进行使用flux时传入信息的配置（state，action，reducer）
// 4、在类的内部进行配置信息的接受；
// 5、怎么进行数据的取值，封装一个方法，专门从state中取值，并返回
// 6、怎么去把flux中的数据进行改变，封装对外的接口（方法），想要数据改变时，执行这个接口，传入想要执行逻辑的actions类型
//     供视图层执行的方法
// 7、视图中通过flux提供的接口传入类型，然后在接口中，将类型和当前的state传入逻辑处理层，进行一系列的逻辑处理，形成新的state付给当前的this.state

// 8、此时数据库更新完毕，通知视图进行数据的重新获取，采用观察者模式实现视图对数据的监听，当数据库改变时（当dispatch执行时，触发监听事件），将所有视图中监听数据的监听函数都执行一遍，在监听函数中，进行数据的重新获取
// 9、此时需要监听的对外接口，所以封装了要给observer的监听函数


let state=Symbol("state")
class flux {
    constructor(config){
        // Object.assign(this,config)
        this.reducer=config.reducer
        this[state]=config.state
        // 事件队列
        this.eventList=[]
    }
    getData(attr){
        console.log(attr)
        if(attr){
            return this[state][attr]
        }else{
            console.log(Object.getOwnPropertyDescriptor(this[state],"num"))
            return {...this[state]}
        }
        
    }

    dispatch(actionType){
        this[state]=this.reducer(this[state],actionType)
        this.$emit()
    }

    observer(cb){
       this.eventList.push(cb)
    }
    $emit() {
       this.eventList.forEach(function (cb) {
            cb()
          }, this);
    }
}
export default flux