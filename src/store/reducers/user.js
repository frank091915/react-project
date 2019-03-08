import {USER_NAME} from "../actions/user"
import {HAS_SIGN_IN} from "../actions/user"

const initState={
        name:"frank",
        duration:"60mins",
        hasSignIn:false
}


// const initState = {
//     name: '吴迪',
//     age: 48,
//     gender: '男'
//   }
  
//   export default (state = initState, action) => {
//     switch(action.type) {
//       case CHANGE_USER_NAME:
//         return {
//           ...state,
//           name: Math.random()
//         }
//       default:
//         return state
//     }
//   }
 
 export default (state=initState,action)=>{
    switch(action.type) {
        case USER_NAME :
        return {
            ...state,
            name:Math.random()
        }
        case HAS_SIGN_IN:
        console.log(action.payload)
        return{
            ...state,
            userData:action.payload.userInfo
        }
        default:
            return state
    }
}