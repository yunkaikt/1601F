import initState from "./state"
import {ADDLOCATION_C,ADDLISTENPHOTO_C} from "./actions_types"
import { STATUS_CODES } from "http";

export default (state=initState,actions)=>{
    const {type,text}=actions
    switch(type){
        case ADDLOCATION_C:{
            let states=true
            let indexs=null
            console.log(state.locations)
            state.locations.some((i,index)=>{
                if(i.id==text.id){
                    states=false
                    indexs=index
                }
            })
            console.log(indexs)
            let arr=null
            if(states){
                arr=[...state.locations,text]
            }else{
                arr=[...state.locations]
                if(arr.length>1){
                    arr.splice(indexs,1)
                }
               
            }

            return Object.assign({},state,{locations:arr})
        }
        case ADDLISTENPHOTO_C:{
            console.log(text)
            return Object.assign({},state,{listenPhoto:text})
        }
        default:{
            return state
        }
    }
}