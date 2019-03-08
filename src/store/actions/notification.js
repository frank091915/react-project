export const CHANGE_READING_STATUS="CHANGE_READING_STATUS"
export const MODIFY_TO_ALL_READ="MODIFY_TO_ALL_READ"

export const changeReadingStatus= (notificationId)=>{
    return {
        type:CHANGE_READING_STATUS,
        payload:{
            notificationId
        }
    }
}
export const modifyToAllRead=()=>{
    return {
        type:MODIFY_TO_ALL_READ
    }
}