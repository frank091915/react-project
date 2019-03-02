import React, { Component } from 'react';

import  {Route,Switch,Redirect} from "react-router-dom"

import {Frame} from "./components/index"
import {Routes} from "./pages/routes"

const navRoutes =Routes.filter((curr)=>{
    return curr.isNav
})


class App extends Component {
  render() {
    return (

        <Frame frameInfo={navRoutes}>
        <Switch>
          {/* {
            Routes.map((curr)=>{
              return <Route key={curr.path} path={curr.path} exact={curr.exact} component={curr.component}/>
            })
          } */}
          {
            Routes.map(route => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  render={(props) => {
                    // TODO: 权限判断
                    return <route.component {...props}/>
                  }}
                />
              )
            })
          }
          <Redirect to="/admin/dashBoar"  from="/admin" exact></Redirect>
          <Redirect to="/404"></Redirect>
        </Switch>
        </Frame>
    )
  }
}

export default App;
