export const CHANGE_READING_STATUS="CHANGE_READING_STATUS"

export const changeReadingStatus= (notificationId)=>{
    console.log(notificationId)
    return {
        type:CHANGE_READING_STATUS,
        payload:{
            notificationId
        }
    }
}