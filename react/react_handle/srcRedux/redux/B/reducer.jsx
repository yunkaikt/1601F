import initState from "./state"
import {B_ADDNUM_Z} from "./actions_types"

export default (state=initState,actions)=>{
    const {type,text}=actions
    switch(type){
        case B_ADDNUM_Z:{
            return Object.assign({},state,{num:state.num+1})
        }

        default:{
            return state
        }
    }
}