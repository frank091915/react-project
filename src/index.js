import React from 'react';
import ReactDOM from 'react-dom';


import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

import App from './App';
import NotFound from "./components/NotFound/NotFound"

import {BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom"



import "./index.less"

ReactDOM.render(

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
    , document.getElementById('root')
    );

