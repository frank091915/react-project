import React from 'react';

import App from '../App';
import NotFound from "../components/NotFound/NotFound"
import {toSignIn} from "../pages/signIn/signIn"
import {BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom"
import {connect} from "react-redux"
import  { Component } from 'react'

import "../index.less"

const mapStateToProps=(state)=>{
    console.log(state)
    return{
        hasSignIn:state.user.authorationToken ?true:false
    }
}

@connect(mapStateToProps)
 
 export default class SupremeRoutesComponent extends Component {
   render() {
       console.log(this.props)
     return (
        <Router>
            <Switch>
                <Route path="/404" component={NotFound}></Route>
                 <Route path="/signIn" component={toSignIn}></Route>
                 <Route
                    path="/admin" 
                    render={
                            ()=>{
                                return this.props.hasSignIn
                                    ?<App/>
                                    :<Redirect to="/signIn"/>
                                }
                            }
                    />
                <Redirect exact to="/admin" from="/"  ></Redirect>
                <Redirect to="/404" ></Redirect>
            </Switch>
        </Router>

     )
   }
 }
 
           





