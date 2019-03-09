
import {HAS_SIGN_IN,FAILED_TO_SIGN_IN} from "../actions/user"

const USER_INFO_LOCALSTORAGE="KKUSERINFO"

const localStorageState=JSON.parse(localStorage.getItem(USER_INFO_LOCALSTORAGE))||{}
const initState=Object.assign(
    {},
    {
        name:localStorageState.displayName,
        hasSignIn:false
    },
    localStorageState
)


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
        case HAS_SIGN_IN:
        console.log(action.payload.userInfo)
        const newUserInfo={
            ...state,
            ...action.payload.userInfo,
            hasSignIn:true,
            name:action.payload.userInfo.displayName
        }
        window.localStorage.setItem(USER_INFO_LOCALSTORAGE,JSON.stringify(newUserInfo))
        return{
           hasSignIn:true,
            // userData:action.payload.userInfo,
            name:action.payload.userInfo.displayName,
            ...action.payload.userInfo
        }
        case FAILED_TO_SIGN_IN:
        alert("登录失败")
        return{
            hasSignIn:false
        }
        default:
            return state
    }
}