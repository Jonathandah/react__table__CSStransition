import React, { Component } from 'react';

let Form = (props) =>{
    return(
        <form onSubmit={props.submit}>
            <p>Name:</p>
            <input type="text" onChange={props.onChange} id="name" value={props.state.name}></input>
            <p>Age:</p>
            <input type="number" onChange={props.onChange} id="age" value={props.state.age}></input>
            <p>Email:</p>
            <input type="email" onChange={props.onChange} id="email" value={props.state.email}></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;