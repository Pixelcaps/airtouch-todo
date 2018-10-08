import React, { Component } from 'react';
import AddTodoForm from '../containers/add_todo_form';
import ToDoList from '../containers/todo_list';
import styled from 'styled-components'

const AppTitle = styled.h1`
  text-align: center;
  padding: 1rem;
`

class App extends Component {
  render() {
    return (
        <div>
        <AppTitle>AirTouch ToDo App</AppTitle>
        <div className="row mt-5">
          <div className="col-md-4 offset-md-1">
            <h2>Add a new todo:</h2>    
            <AddTodoForm />
          </div>
          <div className="col-md-4 offset-md-1">
            <h2>List of ToDo's:</h2>    
            <ToDoList />
          </div>
        </div>
        </div>
    );
  }
}

export default App
