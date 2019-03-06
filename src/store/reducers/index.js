import {combineReducers} from "redux"

import user from "./user"

// 在这里把所有reducer集中，合并，然后再导出

// export default combineReducers({
//     user
// })

// import { combineReducers } from 'redux'
// import user from './user'

export default combineReducers({
    user
})
