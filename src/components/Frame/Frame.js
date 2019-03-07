import React, { Component } from 'react'

import {withRouter,Link}  from "react-router-dom"
import {
    Layout, Menu, Icon,Avatar,Badge,Dropdown
  }   
  from 'antd';
import {connect} from "react-redux"

import store from "../../store/store"
import "./Frame.less"
import {changeUserName,changeUserNameAsync} from "../../store/actions/user"

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
    },0)
    }
}


@connect(mapStateToProps,{changeUserName,changeUserNameAsync})
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
  handleMenuClick = (e) => {
  }
  setName=()=>{
    this.setState({
      userName:store.getState().name
    })
  }
  componentDidMount(){
    this.setName()
    console.log(this.props)
  }
  render() {

    return (
        <Layout>
        <Header className="header">
          <div className="logo" />
          <Dropdown overlay={this.state.menu}>
           <div className="AvatarBox">
            <Badge count={this.props.toReadCount}>
              <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
            </Badge>
            <span className="nameSpan" style={{color:"white"}}>{this.props.name}</span>
              <span className="mineSpan">个人中心</span>
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

 