
import {    HAS_SIGN_IN,
            FAILED_TO_SIGN_IN,
            HAS_SIGN_OUT,
            TOKEN_CONFIRMED,
            TOKEN_FAILED
        } from "../actions/user"

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
        const newUserInfo={
            ...state,
            ...action.payload.userInfo,
            hasSignIn:true,
            name:action.payload.userInfo.displayName
        }
        window.localStorage.setItem(USER_INFO_LOCALSTORAGE,JSON.stringify(newUserInfo))
        return{
           
            // userData:action.payload.userInfo,
            name:action.payload.userInfo.displayName,
            ...action.payload.userInfo,
            hasSignIn:true
        }
        case FAILED_TO_SIGN_IN:
        alert("登录失败")
        return{
            hasSignIn:false
        }
        case HAS_SIGN_OUT:
        const beforeSignOurLocalStorage=JSON.parse(localStorage.getItem(USER_INFO_LOCALSTORAGE))
        beforeSignOurLocalStorage.hasSignIn=false
        window.localStorage.removeItem(USER_INFO_LOCALSTORAGE)
        window.location.href="/signIn"
        return{
            ...state,
            hasSignIn:false
        }
        case TOKEN_CONFIRMED :
        const newTokenStorage={
            ...state,
            hasSignIn:true,
            authorationToken:action.payload.data
        }
        window.localStorage.setItem(USER_INFO_LOCALSTORAGE,JSON.stringify(newTokenStorage))
        return {
            ...state,
            hasSignIn:true,
            authorationToken:action.payload.data
        }
        case TOKEN_FAILED:
        return {
            ...state,
            hasSignIn:false
        }
        default:
            return state
    }
}