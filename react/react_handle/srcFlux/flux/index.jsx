
import Store from "../tool/flux"
// 全局数据中心
let initState={
    num:1
}

export let actions={
    addNum(text){
        return {
            type:"addNum",
            text:text
        }
    }
}

let reducer = (state = initState, action) => {
    switch (action.type) {
        case 'addNum':{
            let num=state.num+1
            return {...state,...{num}}
        }
             
        default:
            return state
    }
}


export default new Store({
    state:initState,
    reducer
})