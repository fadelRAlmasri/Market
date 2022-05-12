//import { render } from '@testing-library/react';
import React, { Component } from 'react';
function Test2( state){
    state={
        age:20,
        name:'ali',
        user :{
            name :'fadel',
            age:222,
            country:"homs"
        },
        social:["facebook","twitter"]
    }
        return <div> <p>hello shahla</p>
        <p> name:{state.name}</p>
        <p> name:{state.age}</p>
            <p> country:{state.user.country}</p>
            <p> social:{state.social[1]}</p>
        </div>;
    }
export default Test2 ;