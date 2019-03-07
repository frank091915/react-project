import {createStore,applyMiddleware} from "redux"
import combinedReducers from "./reducers/index"
import thunk from "redux-thunk"
console.dir(combinedReducers)

export default createStore(combinedReducers,applyMiddleware(thunk))

// import { createStore } from 'redux'
// import rootReducer from './reducers'
// export default createStore(rootReducer)

