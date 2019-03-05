import React, { Component } from 'react'

import { Table,Button,Tooltip,Modal,Select} from 'antd';

import {getArticleListBeTest,deleteArticleById } from "../../request/request"
const ButtonGroup = Button.Group;
var moment = require('moment');
// const { Title } = Typography;



// Array.from(Array(50).keys()).map((curr)=>{
//   return {
//       key: curr,
//       name: 'frank',
//       age: 18,
//       address: '西湖区湖底公园1号',
//       article:`文章${curr}`,
//       createAt:moment( new Date().getTime()).format("YYYY年MM月DD日 h:mm:ss")
//     }
// })



export default class Article extends Component {
  constructor(){
    super()
    this.columns=[
      {
        title: '文章',
        dataIndex: `title`,
        key: 'title',
      },
      {
      title: '姓名',
      dataIndex: 'author',
      key: 'author',
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
                  <Tooltip title={`编辑${record.title}`}>
                    <Button onClick={this.toEdit.bind(this,record)} size="small" type="primary">编辑</Button>
                    </Tooltip>
                    <Tooltip title={`删除${record.title}`}>
                   <Button onClick={this.toClickDelete.bind(this,record)} size="small" type="ghost">删除</Button>
                   </Tooltip>
                </ButtonGroup>
      },
      key: 'address'
    }]
    this.state={
      dataSource:[],
      isLoading:true,
      offset:0,
      perpage:10,
      total:66,
      visible:false,
      confirmLoading:false,
      clickedArticleId:null,
      clickedArticleTitle:null,
      columns:[
        {
          title: '文章',
          dataIndex: `title`,
          key: 'title',
        },
        {
        title: '姓名',
        dataIndex: 'author',
        key: 'author',
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
                    <Tooltip title={`编辑${record.title}`}>
                      <Button onClick={this.toEdit.bind(this,record)} size="small" type="primary">编辑</Button>
                      </Tooltip>
                      <Tooltip title={`删除${record.title}`}>
                     <Button onClick={this.toClickDelete} size="small" type="ghost">删除</Button>
                     </Tooltip>
                  </ButtonGroup>
        },
        key: 'address'
      }]
    }
  }
  // 因为请求数据的方法用到的地方会比较多，所以可以单独封装成一个方法
  getData=()=>{
    const {offset,perpage}=this.state

    getArticleListBeTest({offset,perpage}).then((res)=>{
      if(res.data.code===200){
        this.setState({
          createAt:moment(res.data.data.list[0].createAt).format("YYYY年MM月DD日 hh:mm:ss"),
          dataSource:res.data.data.list,
          isLoading:false,
          total:res.data.data.total
        })

      }
      })

  }
  componentDidUpdate(){

  }
  // 点击删除按钮，弹出模态框
  toClickDelete=(record)=>{
      this.setState({
        visible:true,
        clickedArticleId:record.id,
        clickedArticleTitle:record.title
      })
  }
  toEdit=(record)=>{
    this.props.history.push(`/admin/article/edit/${record.id}`,record)
  }
  // 点击取消删除
  handleCancelDelete=()=>{
      this.setState({
        visible:false
      })
  }
  comfirmToDelete=()=>{
      this.setState({
        confirmLoading:true,
      },()=>{
        deleteArticleById(this.state.clickedArticleId).then((res)=>{
            console.log(res)
            if(res.data.code===200){
              this.setState({
                confirmLoading:false,
                visible:false
              },this.getData)
            }
        })
      })
  }
  onShowSizeChange=(currentPage,pageSize)=>{
      this.setState({
        perpage:pageSize,
        offset:0
      },()=> {this.getData()})
  }
  paginationChange=(current,perpage)=>{
      this.setState(
        {
        offset:(current-1)*this.state.perpage,
        perpage:perpage
        },()=>{this.getData()}
      )
      // 当用户点击分页按钮时，向后台发送请求，返回对应的分页
      // 先改变state中的属性，然后在回调函数中发起请求
      
  }
  selectionChange=(selectedOptions)=>{
      console.log(selectedOptions)
      this.setState({
        columns: this.columns.filter((curr)=>{
          
          if(selectedOptions.indexOf(curr.title)===-1) {
            return false
          }else{
            return true
          }
        })
      },()=>{
        console.log(this.state.columns)
      })
  }
  componentDidMount(){
    // 进入文章管理页面中时请求默认数据
    // 在花括号中为什么不能直接用this？
    this.getData()

    }
  
  render() {
    const disabledButtonList=["操作","文章"]
    return (
      <div>
        <div className="extraOption">
        <Select
          mode="multiple"
          size="default"
          placeholder="Please select"
          defaultValue={
            this.columns.map((item)=>{
              return item.title
            })
        }
          onChange={this.selectionChange}
          style={{ width: '100%' }}
        >
          {this.columns.map((item)=>{
            return <Select.Option disabled={disabledButtonList.indexOf(item.title)!==-1} key={ item.title}>{ item.title}</Select.Option>
          })}
        </Select>
        
        </div>
      <Table dataSource={this.state.dataSource} 
              columns={this.state.columns}
              rowKey={record => record.id}
              pagination={{
                  pageSizeOptions:["5","10","20"],
                  showQuickJumper:true,
                  showSizeChanger:true,
                  total:this.state.total,
                  pageSize:this.state.perpage,
                  onShowSizeChange:this.onShowSizeChange,
                  current:(this.state.offset/this.state.perpage)+1,
                  onChange:this.paginationChange  
                  }}
              loading={this.state.isLoading}   
              
              />
          <Modal
          title={`删除`}
          visible={this.state.visible}
          onOk={this.comfirmToDelete}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancelDelete}
          cancelText="还是不删了吧"
          okText="删了，删了"
        >
        <p>删除后就再也没了，确认删除</p>
        </Modal>
       </div>
    )
  }
}
