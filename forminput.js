import React,{Component} from 'react';
class Forminput extends  Component{
    state={
        value:"default"
    };
    setValue=(event)=>{
            this.setState({
                value:event.target.value
            });
    }
    render(){
        return<div>
            hello from formInput<br></br>
            <input value={this.state.value} onChange={this.setValue}></input>
        </div>
    };
}
export default Forminput;