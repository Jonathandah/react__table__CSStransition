import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

let Table = (props) =>{
    console.log(props.array);
    function list (person){
        return(
            <CSSTransition  key={person.id}
                classNames="person"
                timeout={200}
                >
                <tr>
                    <td>{person.name}</td>
                    <td>{person.age}</td>
                    <td>{person.email}</td>
                    <td><button onClick={props.onDelete} id={person.id}>Delete</button></td>
                </tr>
            </CSSTransition>
        )
    }


    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                <TransitionGroup component={null}>
                    {props.array.map(person => list(person))}
                </TransitionGroup>
            </tbody>
        </table>
    )
}

export default Table;