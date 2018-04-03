import React, {Component} from 'react';
import './App.css';

class TwoWay extends Component {
    render() {
      return (
        <div style={{"height" : "100%", "width" : "80%"}}>
        <h3>Two Way Data Binding</h3>
          <p>By Default React Doesnt Support Two Way data binding, but there are many helpers available to achieve two way data binding in React application.</p>
          <p>TBD - React-binding is lightweight utility for two-way data binding in React.</p>
        
        </div>
      );
    }
  }
   
  export default TwoWay;