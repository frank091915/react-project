import React from 'react';
import ReactDOM from 'react-dom';


import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { Provider} from "react-redux"

import App from './App';
import NotFound from "./components/NotFound/NotFound"
import store from "./store/store"

import {BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom"



import "./index.less"
ReactDOM.render(
    // 使所有组件都可以拿到store
    <Provider store={store}>
        <LocaleProvider locale={zh_CN}>
            <Router>
                <Switch>
                    <Route path="/404" component={NotFound}></Route>
                    <Route path="/admin" component={App}></Route>
                    <Redirect exact to="/admin" from="/"  ></Redirect>
                    <Redirect to="/404" ></Redirect>
                </Switch>
            </Router>
        </LocaleProvider>
    </Provider>
    , document.getElementById('root')
    );

