import React,{Component} from 'react';
class Class extends Component{
    constructor (props){
        super(props);
        this.Inc=this.Inc.bind(this);
    }
    state ={
        age:22,
        job:"engi",
        user:{
            password:"12315465465"
        },
        social:["facebook","telegram"]
    }
    Inc(){
        this.setState({age:this.state.age+1});
    }
    Dec=()=>{
        this.setState({age:this.state.age-1});
    }
    Dob(){
        this.setState({age:this.state.age*1000});
    }
    update=(event)=>{
        const newage= event.target.value;
        this.setState({
            age:newage
            //job:this.state.job
        });
    }
   render(){   
       return <div>
           hello from class.
           <p>{this.state.age} </p>
           <p>{this.state.job} </p>
           <button onClick={this.Inc}>+</button>
           <button onClick={this.Dec}>-</button>
           <button onClick={this.Dob.bind(this)}>*2</button>
           <input type="text" onChange={this.update}></input>
       </div>
   };
}

export default Class;