import React, { Component } from 'react';
class Test extends Component{
    constructor(props){
        super(props);
        this.decrement = this.decrement.bind(this);
    }
    state={
        age:22,
        name:"fadel",
        user:{
            name:'fadel',
            age:20
        },
        socialLink:[
            "facebook",
            "twitter"
        ]
    }
    decrement = () =>{
        this.setState({age:this.state.age - 1});
    }
    decrement(){
        this.setState({age:this.state.age - 1});
    }
     decrement(){
        this.setState({age:this.state.age - 1});
    }
    render(){
        return <div>hello all 
            welcome {this.props.name +''+this.props.lastName} from Test
            <p>{this.state.age}</p>
            <p>{this.state.name}</p>
            <p>{this.state.user.name}</p>
            <p>{this.state.socialLink+""}</p>
            <button onClick={this.decrement}>decrement</button>
            <button onClick={this.decrement.bind(this)}>decrement</button> <br/>
            <button onClick={this.decrement}>decrement</button>
        </div>
    };
    
}
export default Test; 