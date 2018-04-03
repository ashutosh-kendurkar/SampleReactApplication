import React, {Component} from 'react';
import './App.css';
import Datagrid from './DataGrid.js';

class form extends Component{
    constructor(props){
        
        super(props);
        this.state={value:'',
                    showTable:false};

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.renderClick=this.renderClick.bind(this);
    }

    handleChange(event){
        this.setState({value:event.target.value});
    }

    handleSubmit(event){
        this.setState({showTable:true});
        event.preventDefault();
    }

    renderClick(){
        this.setState({showTable:true});
    }
    render()
    {
        const name=this.state.value;
        const showTable=this.state.showTable;
        return(
            <div> <h2>Registration Form</h2>
            <form onSubmit={this.handleSubmit}>
            <label> Enter your name:
                <input type="Text" value={this.state.value} onChange={this.handleChange}/>
                </label>                
                <br/><br/>
                <input type="submit" value="Submit"/>
                <br/>
                <h1>Hello {this.state.value}, Welcome to React!</h1>
                <br/>
                {name.length>0 && showTable &&
                    <h4>Registation is successful for {this.state.value}!</h4>
                }

                
            </form>
            </div>
        )
    }
}
export default form;