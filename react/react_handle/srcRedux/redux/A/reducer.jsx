import initState from "./state"
import {A_ADDNUM_C} from "./actions_types"

export default (state=initState,actions)=>{
    const {type,text}=actions
    switch(type){
        case A_ADDNUM_C:{
            console.log(222)
            return Object.assign({},state,{num:state.num+1})
        }

        default:{
            return state
        }
    }
}