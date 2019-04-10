import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./form";
import Table from "./table";

class App extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      name: "",
      age: "",
      email: "",
      id: "",
      array: [],
    }
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(e){
    let newArray = [...this.state.array];
    console.log(e.target.id);
    this.setState({
      array: newArray.filter(person => person.id !== e.target.id),
    })
  }

  onChange(e){
    console.log(e.target.id);
    if(e.target.id === "name"){
      this.setState({name: e.target.value});
    } else if(e.target.id === "age"){
      this.setState({age: e.target.value});
    } else{
      this.setState({email: e.target.value});
    }
  }

  onClick(e){
    e.preventDefault();
    const id = '_' + Math.random().toString(36).substr(2, 9);
    let obj={
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
      id: id,
    }
    this.setState({
      array: [...this.state.array, obj]
    });
    console.log(this.state.array);
  }


  render() {
    return (
      <div className="App">
        <Form state={this.state} onChange={this.onChange} submit={this.onClick}></Form>
        <Table array={this.state.array} onDelete={this.onDelete}></Table>
      </div>
    );
  }
}

export default App;
