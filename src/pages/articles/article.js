import React, { Component } from 'react'

import { Table,Button,Tooltip} from 'antd';

import getArticle from "../../request/request"
const ButtonGroup = Button.Group;
var moment = require('moment');



const dataSource =Array.from(Array(50).keys()).map((curr)=>{
  return {
      key: curr,
      name: 'frank',
      age: 18,
      address: '西湖区湖底公园1号',
      article:`文章${curr}`,
      createAt:moment( new Date().getTime()).format("YYYY年MM月DD日 h:mm:ss")
    }
})


const columns = [
  {
    title: '文章',
    dataIndex: `article`,
    key: 'article',
  },
  {
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  },
  {
  title: '发表时间',
  dataIndex: 'createAt',
  key: 'createAt',
}
, 
{
  title: '操作',
  render:(text, record, index)=>{
     return <ButtonGroup>
              <Tooltip title={`编辑${record.article}`}>
                <Button size="small" type="primary">编辑</Button>
                </Tooltip>
                <Tooltip title={`删除${record.article}`}>
               <Button size="small" type="ghost">删除</Button>
               </Tooltip>
            </ButtonGroup>
  },
  key: 'address'
}];

export default class Article extends Component {
  render() {
    return (
      <div>
      <Table dataSource={dataSource} 
              columns={columns}
              pagination={{
                  defaultCurrent:2,
                  defaultPageSize:10,
                  pageSizeOptions:["5","10","20"],
                  showQuickJumper:true,
                  showSizeChanger:true
                  }}
                  loading={false}      
              />

       </div>
    )
  }
}
