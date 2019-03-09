import {login} from "../../request/request"


export const USER_NAME="USER_NAME";
export const TO_SIGN_IN="TO_SIGN_IN";
export const HAS_SIGN_IN="HAS_SIGN_IN";
export const FAILED_TO_SIGN_IN="FAILED_TO_SIGN_IN";


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