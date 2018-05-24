import {
    B_ADDNUM_Z
} from "./actions_types.js"

export default {
    [B_ADDNUM_Z](text){
        return {
            type:B_ADDNUM_Z,
            text:text
        }
    }
}