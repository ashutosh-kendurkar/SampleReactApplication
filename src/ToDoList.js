import React, {Component} from 'react';
import './App.css';

class ToDoApp extends Component {
    constructor(props){
        super(props);
        this.state={
            term:'',
            items:[]
        };
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChange(event){
        this.setState({term:event.target.value});
    }

    onSubmit(event){
        event.preventDefault();
        if(!this.state.term.length){
            return;
        }
        const newItem={
            term:this.state.term,
            id:Date.now()
        };

        this.setState(prevState=>({
            items:prevState.items.concat(newItem),
            term:''
        }));
    }


    render() {
      return (
        <div>
            <h2>TODO</h2>
            <ToDoList Items={this.state.items}/>
            <form onSubmit={this.onSubmit}>
            <label htmlFor="new-todo">
            Add TODO Item :
            </label>
            <input id="new-todo" onChange={this.onChange} value={this.state.term}/>
            &nbsp;
            <button>
                Add Item
                </button>
            </form>
        </div>
      );
    }
  }

  class ToDoList extends Component{
      render(){
          return(
              <ul>
                  {this.props.Items.map(item =>(<li key={item.id}>{item.term}</li>))}
              </ul>
          )
      }
  }
   
  export default ToDoApp;