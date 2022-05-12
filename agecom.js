import React,{Component} from 'react';
function AgeComponent(props){
    let ageTamplete='';

    if(props.agee>5){
        ageTamplete='hello ';
    }
    else{
        ageTamplete='goodbye';
    }
    return ageTamplete;
}
class Agecom extends  Component{
    render(){
        const  agee = 10;
        return<div>
          hello from agecom<br></br>
          <AgeComponent agee={30}/>
          <AgeComponent agee={agee}/>

        </div>
    };
}
export default Agecom;