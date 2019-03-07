import React, { Component } from 'react'
import {List,Avatar,Card,Badge} from "antd"
import { Link} from "react-router-dom"
import {connect} from "react-redux"



const mapStateToProps=(state)=>{
    console.log(state)
    return{
        notificationInfo:state.notification.notificationInfo
    }
}

@connect(mapStateToProps)

export default class Notifications extends Component {
    constructor(props){
        super()
        this.state={
           
        }
        console.log(props)
    }
  render() {
    return (
        <Card>
            <div>
                <h2>消息通知</h2>
                <List
                    itemLayout="horizontal"
                    dataSource={this.props.notificationInfo}
                    renderItem={item => (
                    <List.Item id={item.id}  onClick={this.clickToChangeReadingStatus}>
                        <List.Item.Meta
                        
                        avatar={<Badge dot><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Badge>}
                        title={<Link to={`/admin/notifications/edit/${item.id}`}>{item.title}</Link>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                    )}
                />
            </div>
      </Card>
    )
  }
}
