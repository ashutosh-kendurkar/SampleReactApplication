import React,{Component} from 'react';
import './App.css';

class Datagrid extends Component{

    constructor(props){
        super(props);
        this.state={
            data:[
                {"id":1,
                 "Name":'Ashutosh',
                 "SkillSet":'FullStack Developer'
                },
                {"id":2,
                "Name":'Amit',
                "SkillSet":'Java Developer'
                },
                {"id":3,
                "Name":'Venki',
                "SkillSet":'.Net Developer'
                }
            ]
        }        
    }

    render(){
        return(
            <div>
                <table style={{borderWidth:'10px'}}>
                    <tbody>
                        {this.state.data.map((person,i)=><Tablerow key={i} data={person}/>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

class Tablerow extends Component{
    render(){
        return(
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.Name}</td>
                <td>{this.props.data.SkillSet}</td>
            </tr>
        );
    }
}

export default Datagrid;