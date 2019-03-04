import React, { Component } from 'react'

import {withRouter}  from "react-router-dom"

import {
    Layout, Menu, Icon,
  }   
  from 'antd';


import "./Frame.less"
const { Header, Content, Sider } = Layout;

@withRouter
export default class Frame extends Component {
  navClick=({key})=>{
    console.log(key)
    this.props.history.push(key)
  }
  render() {

    return (
        <Layout>
        <Header className="header">
          <div className="logo" />
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

 