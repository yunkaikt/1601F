import {
    ADDLOCATION_C,
    ADDLISTENPHOTO_C
} from "./actions_types.js"
import axios from "axios"

export const actions= {
    [ADDLOCATION_C](text){
        return {
            type:ADDLOCATION_C,
            text:text
        }
    },
    [ADDLISTENPHOTO_C](text){
        return {
            type:ADDLISTENPHOTO_C,
            text:text
        }
    },
    // // 请求到数据后，将数据设置到redux
    // [SETDATALIST_C](text){
    //     return {
    //         type:SETDATALIST_C,
    //         text:text
    //     }
    // },
    // [GETDATALIST_C](text){
    //     return function(dispatch){
            
    //         axios.get("/api/dataList").then((data)=>{
    //             console.log(actions)
    //             dispatch(actions[SETDATALIST_C](data.data))
    //         }).catch((err)=>{
                
    //         })
    //     }
    // }
}