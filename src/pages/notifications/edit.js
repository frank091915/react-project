import React, { Component } from 'react'
import {connect } from "react-redux"

import {Button} from "antd"

import {changeReadingStatus} from "../../store/actions/notification"

const mapStateToProps=(state)=>{
    return{
        notificationInfo:state.notification.notificationInfo
    }
}

@connect(mapStateToProps,{changeReadingStatus})

export default class Edit extends Component {
  goBack=()=>{
    this.props.history.goBack()
    console.log(this.props)
  }
  render() {
      
    return (
      <div>
        <div><Button onClick={this.goBack}>返回上一级</Button></div>
        <span>消息</span>
      </div>
    )
  }
  componentDidMount(){
      console.log(this.props)
      this.props.changeReadingStatus(this.props.match.params.id)
  }
}
