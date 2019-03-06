import {createStore} from "redux"
import combinedReducer from "./reducers/index"
import userName from "./reducers/user"


export default createStore(userName)

// import { createStore } from 'redux'
// import rootReducer from './reducers'
// export default createStore(rootReducer)

