import React,{Component} from 'react';
class Loop extends  Component{
    render(){
        let users=[
            {id:1,name:'fadel'},
            {id:2,name:'ali'},
            {id:3,name:'hasan'}
        ];
        return<div>
          hello from Loop<br></br>
          <ul>
          {users.map((user,index) =><li key={user.id}> {index }-{ user.name}</li> )}
          </ul>
        </div>
    };
}
export default Loop;