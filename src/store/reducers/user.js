import {USER_NAME} from "../actions/user"

const initState={
        name:"frank"
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
 
 export const Username= (state=initState,action)=>{
    switch(action.type) {
        case USER_NAME :
        return {
            ...state,
            name:Math.random()
        }
        default:
            return state
    }
}
export default Username