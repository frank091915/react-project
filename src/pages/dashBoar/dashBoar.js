import React, { Component } from 'react'
import {Card,Radio} from  "antd"

import {getArticleListBeTest} from "../../request/requestTwo"

var echarts = require('echarts');



export default class DashBoar extends Component {
  constructor(){
    super()
    this.myChart=React.createRef()
    this.state={
        relativeMonths:"",
        size:"middle",
        selectedSeason:1
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
  toGetChartsData=()=>{
    getArticleListBeTest(this.state.selectedSeason).then((res)=>{
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
  componentDidMount()
  {
    this.toGetChartsData()
  }
  handleRadioChange = (e) => {
    this.setState({ 
      size: e.target.value,
      selectedSeason:e.target.selectedSeason
    },()=>{
      // 在改变state后，再次请求数据，然后别忘了渲染
      this.toGetChartsData()
    });
    
  }
  render() {
    return (
      <Card>
        <div>
          <div>
            <Radio.Group size="small" value={this.state.size} onChange={this.handleRadioChange}>
              <Radio.Button selectedSeason={1} value="large">近一季度</Radio.Button>
              <Radio.Button selectedSeason={2} value="default">近两季度</Radio.Button>
              <Radio.Button selectedSeason={3} value="small">近三季度</Radio.Button>
            </Radio.Group>
          </div>
          <div style={{height:300,width:400}} ref={this.myChart}></div>
        </div>
      </Card >
    )
  }
}
