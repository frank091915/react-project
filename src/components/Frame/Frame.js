import React, { Component } from 'react'

import {
    Layout, Menu, Icon,
  }   
  from 'antd';


import "./Frame.less"
const { Header, Content, Sider } = Layout;

export default class Frame extends Component {

  render() {
      console.log(this.props.children)
    return (
        <Layout>
        <Header className="header">
          <div className="logo" />
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item key="1"><Icon type="dashboard" />仪表盘</Menu.Item>
                <Menu.Item key="2"><Icon type="form" />文章管理</Menu.Item>
                <Menu.Item key="3"><Icon type="setting" />设置</Menu.Item>
                <Menu.Item key="4"><Icon type="user" />个人中心</Menu.Item>
            </Menu>
          </Sider>
          <Layout >
            <Content style={{
              background: '#fff', margin: 0, minHeight: 280,
            }}
            >
   
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
