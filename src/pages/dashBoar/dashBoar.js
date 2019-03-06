import React, { Component } from 'react'
import {Card} from  "antd"

import {getArticleListBeTest} from "../../request/requestTwo"

var echarts = require('echarts');



export default class DashBoar extends Component {
  constructor(){
    super()
    this.myChart=React.createRef()
    this.state={
        relativeMonths:""
    }
  }
  // 将绘制表格封装成一个可重复使用的方法，在用的时候只调用一个方法即可
  setEchartsOptions(){
    var myChart = echarts.init(this.myChart.current);
    // 绘制图表
    myChart.setOption({
        title: {
            text: 'ECharts'
        },
        tooltip: {},
        xAxis: {
            data: this.state.relativeMonths
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
            // 获取到的数据为json，而这里的数据格式为数组，可以使用json的map方法，把需要的属性返回为一个数组即可
        }]
    });
  }
  componentDidMount()
  {
    getArticleListBeTest("234").then((res)=>{
      if(res.data.res_code===200){
        this.setState({
          relativeMonths:res.data.res_body.data.map((item)=>{
                            return item.relativeMonths
                          })
        },function(){
          // ！！！数据返回后再来渲染表格吧
          this.setEchartsOptions()
        })
      }
    })

   
  }
  render() {
    return (
      <Card>
        <div>
          <h1>DashBoar</h1>
          <div style={{height:300,width:400}} ref={this.myChart}></div>
        </div>
      </Card >
    )
  }
}
