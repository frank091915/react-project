import React, { Component } from 'react'
import {connect } from "react-redux"

import {changeReadingStatus} from "../../store/actions/notification"

const mapStateToProps=(state)=>{
    return{
        notificationInfo:state.notification.notificationInfo
    }
}

@connect(mapStateToProps,{changeReadingStatus})

export default class Edit extends Component {
  render() {
      
    return (
      <div>
        消息
      </div>
    )
  }
  componentDidMount(){
      console.log(this.props)
      this.props.changeReadingStatus(this.props.match.params.id)
  }
}
