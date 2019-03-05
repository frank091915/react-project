import React, { Component } from 'react'
import E from 'wangeditor'
import {
    Form, Card, Input, Button, DatePicker, TimePicker
  } from 'antd';
  
import { getArticleById} from "../../request/request"

import "./edit.less"



class NormalLoginForm extends Component {

    constructor(){
        super()
        this.state={
            articleId:"",
            artcleTitle:"",
            authorName:"",
            createAt:"",
            articleContent:""
        }
        this.selectedEditor=React.createRef();
    }
    handleEditSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values,{...values});
          const newArticle={
            ...values,
            createAt:values.createAt.format()
          }
          console.log(newArticle)
        }else{
            // TODO:错误请求处理
        }
      });
    }
  componentDidMount(){
    var editor = new E('#editor')
    editor.create()
    getArticleById(this.props.match.params.id).then(res=>{
        console.log(res)
        if(res.data.code===200){
            this.setState({
                articleId:res.data.data.id,
                artcleTitle:res.data.data.title,
                authorName:res.data.data.author,
                createAt:res.data.data.createAt,
                articleContent:res.data.data.content
            },()=>{
                this.props.form.setFieldsValue({
                    'authorName':this.state.authorName,
                    'articelTitle':this.state.artcleTitle,
                    'editTime':this.state.createAt
                  })
                  console.log(this.selectedEditor.current,this.selectedEditor)
                editor.txt.html(this.state.articleContent)
            })
        }else{
            // TODO:请求错误处理
        }
    }).catch()

  }
    render() {
      const { getFieldDecorator,setFieldsValue } = this.props.form;

      return (

        <Card
           
            title="文章编辑"
            style={{ width: "100%"}}
        >
            <Form 
                 className="login-form">
            <Form.Item
                wrapperCol={{span:8, offset: 4}}
                label="作者姓名"
            >
                {getFieldDecorator('authorName', {
                rules: [{max:12,min:2, required: true, message: 'Please input authorName!' }],
                })(
                <Input type="text"  placeholder="authorName" />
                )}
            </Form.Item>
            <Form.Item
                label="文章名称"
                wrapperCol={{span:8, offset: 4}}
            >
                {getFieldDecorator('articelTitle', {
                rules: [{required: true, message: 'Please input your articleTitle!' }],
                })(
                <Input  type="text" placeholder="articleTitle" />
                )}
            </Form.Item>
            <Form.Item
            label="创作时间"
            wrapperCol={{span:8, offset: 4}}
                >
                {getFieldDecorator('createAt',{
                    rules: [{ type: 'object', required: true, message: 'Please select time!' }],
                    })(
                    <DatePicker className="datePicker"  showTime format="YYYY-MM-DD HH:mm:ss" />
                )}
            </Form.Item>
            {/* 编辑器 */}
            <Form.Item
                wrapperCol={{ offset: 4}}
            >
            <div id="editor"  ref={this.selectedEditor}></div>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 4}}>
                <Button onClick={this.handleEditSubmit} type="primary"  className="login-form-button">
                     完成编辑
                </Button>
            </Form.Item>
            </Form>
        </Card>
      );
    }
  }
  
  const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default WrappedNormalLoginForm