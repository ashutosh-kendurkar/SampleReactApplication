import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Myform from './form.js';
  import AboutReact from './AboutReact.js';
  import Home from './Home.js';
  import './App.css';
  import ToDoApp from './ToDoList.js';
  import TwoWay from './TwoWay.js';

class Main extends Component {
 render() {
   return (
       <HashRouter>
       <div className="app">
         <h1 className="app">Simple React Application</h1>
         <ul className="header">
           <li><NavLink to="/">Home</NavLink></li>
           <li><NavLink to="/Form">Register</NavLink></li>
           <li><NavLink to="/AboutReact">About ReactJS</NavLink></li>
           <li><NavLink to="/TODOApp">TODO App</NavLink></li>
           <li><NavLink to="/TwoWay">Two Way Data Binding</NavLink></li>
         </ul>
         <div className="content">
           <Route exact path="/" component={Home}/>
            <Route path="/Form" component={Myform}/>
            <Route path="/AboutReact" component={AboutReact}/>
            <Route path="/TODOApp" component={ToDoApp}/>            
            <Route path="/TwoWay" component={TwoWay}/>            
         </div>
               </div>
       </HashRouter>
   );
 }
}

export default Main;