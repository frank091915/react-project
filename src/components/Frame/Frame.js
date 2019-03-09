import React, { Component } from 'react'

import {withRouter,Link}  from "react-router-dom"
import {
    Layout, Menu, Icon,Avatar,Badge,Dropdown
  }   
  from 'antd';
import {connect} from "react-redux"

import store from "../../store/store"
import "./Frame.less"
import {changeUserName,changeUserNameAsync,toSignOutAction} from "../../store/actions/user"

const { Header, Content, Sider } = Layout;
const mapStateToProps=(state)=>{
    return{
      name:state.user.name,
      notifications:state.notification.notificationInfo,
      toReadCount:state.notification.notificationInfo.reduce((pre,nex)=>{
            if(nex.isReaded===false){
              pre++
            }
          return pre
        },0),
      avatar:state.user.avatar
    }
}


@connect(mapStateToProps,{changeUserName,changeUserNameAsync,toSignOutAction})
@withRouter
export default class Frame extends Component {
  constructor(props){
    super()
    this.state={
      userName:"",
      menu : (
        <Menu onClick={this.handleMenuClick}>
          <Menu.Item  >
           <Link  to="/admin/notifications">
           <Icon className="dropDownIcon" type="edit" />
           <span>
             文章管理
           </span>
           </Link>
          </Menu.Item>
          <Menu.Item >
            <Link  to="/admin/notifications">
            <Icon className="dropDownIcon" type="setting" />
            <span>
            设置
            </span>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link  to="/admin/notifications">
            <Icon className="dropDownIcon" type="user" />
            <span>
             消息通知
             </span>
            </Link>
          </Menu.Item>
          <Menu.Item 
            onClick={this.signOut}
          >
           <Icon type="logout" />
            <span>
              退出
            </span>
          </Menu.Item>
        </Menu>
      ),
      toReadCount:props.notifications.reduce((pre,nex)=>{
          if(nex.isReaded===false){
            pre++
          }
        return pre
      },0)
    }
    
  }
  navClick=({key})=>{
    this.props.history.push(key)
    this.store=store
  }
  changeUserName=()=>{
    this.props.changeUserNameAsync()

  }
  signOut=()=>{
     this.props.toSignOutAction("2")
  }
  handleMenuClick = (e) => {
  }
  setName=()=>{
    this.setState({
      userName:store.getState().name
    })
  }
  componentDidMount(){
    this.setName()

  }
  render() {
    const {
      avatar
    }=this.props
    return (
        <Layout>
        <Header className="header">
          <div className="logo" />
          <Dropdown onClick={this.dropDown} overlay={this.state.menu}>
           <div className="AvatarBox">
            <Badge count={this.props.toReadCount}>
              <Avatar src={avatar} />
            </Badge>
            <span className="nameSpan" style={{color:"white"}}>{this.props.name}</span>
            
           </div>
          </Dropdown>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={[this.props.frameInfo[0].path]}
              defaultOpenKeys={['sub1']}
              onClick={this.navClick}
              style={{ height: '100%', borderRight: 0 }}
            >
            {
              this.props.frameInfo.map((curr)=>{
                return  <Menu.Item key={curr.path}><Icon type={curr.iconType} />{curr.title}</Menu.Item>
              })
            }
              
            </Menu>
          </Sider>
          <Layout >
            <Content   style={{
              background: '#fff', margin: 0, minHeight: 280,
            }}
            >
            {this.props.children }
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

 