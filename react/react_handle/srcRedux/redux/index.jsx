import { createStore,combineReducers } from "redux"

export * from "./A/index"
export * from "./B/index"


import reducer_A from "./A/index.js"
import reducer_B from "./B/index.js"

export default new createStore(combineReducers({
    A:reducer_A,
    B:reducer_B
}))

