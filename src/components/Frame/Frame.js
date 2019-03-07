import React, { Component } from 'react'

import {withRouter}  from "react-router-dom"
import {
    Layout, Menu, Icon,
  }   
  from 'antd';
import {connect} from "react-redux"

import store from "../../store/store"
import "./Frame.less"
import {changeUserName,changeUserNameAsync} from "../../store/actions/user"

const { Header, Content, Sider } = Layout;
const mapStateToProps=(state)=>{
  console.log(state)
    return{
      name:state.user.name
    }
}
@connect(mapStateToProps,{changeUserName,changeUserNameAsync})
@withRouter
export default class Frame extends Component {
  constructor(props){
    super()
    this.state={
      userName:""
    }
  }
  navClick=({key})=>{
    console.log(key)
    this.props.history.push(key)
    this.store=store
  }
  changeUserName=()=>{
    console.log(this.props)
    this.props.changeUserNameAsync()

  }
  setName=()=>{
    this.setState({
      userName:store.getState().name
    })
  }
  componentDidMount(){
    this.setName()
    // store.subscribe(this.setName)
  }
  render() {

    return (
        <Layout>
        <Header className="header">
          <div className="logo" />
          <span style={{color:"white"}}>{this.props.name}</span>
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
            <button onClick={this.changeUserName}>变名字</button>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

 