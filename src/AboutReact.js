import React, {Component} from 'react';
import './App.css';

class AboutReact extends Component {
    render() {
      return (
        <div style={{"height" : "100%", "width" : "80%"}}><h2>About ReactJS</h2>
        <h3>Declarative</h3>
          <h4>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.</h4>

          <h3>Component-Based</h3>
        <h4>Build encapsulated components that manage their own state, then compose them to make complex UIs.
            Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</h4>

                <h3>Learn Once, Write Anywhere</h3>
          <h4>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

React can also render on the server using Node and power mobile apps using React Native</h4>

        </div>
      );
    }
  }
   
  export default AboutReact;