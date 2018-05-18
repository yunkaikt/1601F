

class flux {
    constructor(config){
        Object.assign(this,config)
        // 事件队列
        this.eventList=[]
    }
    getData(attr){
        console.log(attr)
        return this.reducer(this.state,{})[attr]
    }

    dispatch(actionType){
        this.state=this.reducer(this.state,actionType)
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