import {SignOut,login} from "../../request/requestTwo"

export const USER_NAME="USER_NAME";
export const TO_SIGN_IN="TO_SIGN_IN";
export const HAS_SIGN_IN="HAS_SIGN_IN";
export const FAILED_TO_SIGN_IN="FAILED_TO_SIGN_IN";
export const HAS_SIGN_OUT="HAS_SIGN_OUT";


export const changeUserName=()=>{
    return{
        type: USER_NAME
    }
}

export const failedToSignIn=()=>{
    return{
        type: FAILED_TO_SIGN_IN
    }
}
export const hasSignIn=(userInfo)=>{
    return{
        type: HAS_SIGN_IN,
        payload:{
            userInfo
        }
    }
}

export const hasSignOut=()=>{
    return{
        type: HAS_SIGN_OUT
    }
}



export const changeUserNameAsync=()=>{
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(changeUserName())
        }, 2000)
    }
}

export const toSignInAction=(params)=>{ 
    return (dispatch)=>{
        login(params).then(
            (res)=>{
                if(res.data.code===200){
                    dispatch(hasSignIn(res.data.data))
                }else{
                    dispatch(failedToSignIn())
                }
                
            }
        )
            
    }
}
// 退出的异步action
export const toSignOutAction=(params)=>{ 
    return (dispatch)=>{
        SignOut(params).then(
            (res)=>{
                console.log(res)
                if(res.data.res_code===200){
                    dispatch(hasSignOut())
                }else{
                    // dispatch(failedToSignIn())
                }
                
            }
        )
            
    }
}