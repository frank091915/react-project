export const USER_NAME="USER_NAME";
export const changeUserName=()=>{
    return{
        type: USER_NAME
    }
}

export const changeUserNameAsync=()=>{
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(changeUserName())
        }, 2000)
    }
}