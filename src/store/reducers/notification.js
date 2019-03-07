import {CHANGE_READING_STATUS} from "../actions/notification"

const initialState={
    notificationInfo:[
        {
            id:1,
          title: 'Ant Design Title 1',
          isReaded:true
        },
        {
          title: 'Ant Design Title 2',
          id:2,
          isReaded:false
        },
        {
          title: 'Ant Design Title 3',
          id:3,
          isReaded:true
        },
        {
          title: 'Ant Design Title 4',
          id:4,
          isReaded:false
        }
      ]
}
export default (state=initialState,action)=>{
    console.log(action.payload)
    switch(action.type){ 
        case CHANGE_READING_STATUS:
            return {
                ...state,
                notificationInfo:
                    state.notificationInfo.map((item)=>{
                        if(item.id===Number.parseInt(action.payload.notificationId)){
                            alert("在执行dispatch")
                            item.isReaded=true
                        }
                        return item
                })
            }
       default:
         return state
    }

}