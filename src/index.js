import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NotFound from "./components/NotFound/NotFound"

import {BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom"



import "./index.less"

ReactDOM.render(
    <Router>
    <Switch>
    <Route path="/admin" component={App} exact></Route>
    <Route path="/404" component={NotFound}></Route>
    <Redirect exact to="/admin" from="/" ></Redirect>
    <Redirect exact to="/404" ></Redirect>
    </Switch>
    </Router>
    , document.getElementById('root')
    );

