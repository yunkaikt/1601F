import initState from "./state"
import {ADDNUM_C,SETDATALIST_C} from "./actions_types"

export default (state=initState,actions)=>{
    const {type,text}=actions
    switch(type){
        case ADDNUM_C:{
          
            return Object.assign({},state,{num:state.num+1})
        }
        case SETDATALIST_C:{
            console.log(text)
            return Object.assign({},state,{datalist:text})
        }
        default:{
            return state
        }
    }
}