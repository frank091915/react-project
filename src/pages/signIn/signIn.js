import React, { Component } from 'react'
import {
    Form, Icon, Input, Button, Checkbox,
  } from 'antd';
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"

import {toSignInAction} from "../../store/actions/user"

const mapStateToProps=(state)=>{
  console.log(state.user.hasSignIn)
  return {
    hasSignIn:state.user.hasSignIn
  }
}

@connect(mapStateToProps,{toSignInAction})

 class SignIn extends Component {
     constructor(props){
        super()
        console.log(props);
     }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log(values);
            this.props.toSignInAction()
          }
        });
      }
    componentDidMount(){
      console.log(this.props)
    }
  render() {
    const { getFieldDecorator } = this.props.form;
    return  this.props.hasSignIn ? 
    <Redirect to="/admin/" /> : 
    (
      <Form 
          wrapperCol={{span:8,offset:8}}
         onSubmit={this.handleSubmit} className="login-form"
      >
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <div>
            <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
            </Button>
            <a className="login-form-forgot" href="">Forgot password</a>
          </div>
        </Form.Item>
      </Form>
    )
  }

}
export  const toSignIn = Form.create({ name: 'normal_login' })(SignIn);
