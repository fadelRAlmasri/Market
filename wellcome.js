import { render } from '@testing-library/react';
import React, { Component } from 'react';
class Wellcome extends  Component{
    state={
        age:20,
        name:'ali'
    }
    Increase =()=>{
        this.setState({age:this.state.age +1});
    }
    render(){
        return <div>  {this.props.name + "      "+this.props.lastname } ccccccccccccccccchello<p>{this.props.children}</p>
        <p>{this.state.name}</p>
        <p> AGE:{this.state.age}</p>
        <button onClick={this.Increase}>XX</button>
        </div> 
        
    };
}
export default Wellcome;