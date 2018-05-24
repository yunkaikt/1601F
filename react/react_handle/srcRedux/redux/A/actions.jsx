import {
    A_ADDNUM_C
} from "./actions_types.js"

export default {
    [A_ADDNUM_C](text){
        return {
            type:A_ADDNUM_C,
            text:text
        }
    }
}