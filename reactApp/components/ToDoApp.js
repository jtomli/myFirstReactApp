import React from 'react';
import InputLine from './InputLine';
import ToDoList from './ToDoList';
import axios from 'axios';

const dbUrl = 'http://localhost:3000/db';

class ToDoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    axios.get(dbUrl + '/all').then(response => {
      this.setState({todos: response.data})
    }).catch(function(error) {
      console.log("error", error);
    })
  }

  addToDo(task) {
    axios.post(dbUrl + '/add', {taskText: task}).then(response => {
      this.setState({
        todos: this.state.todos.concat(response.data)
      });
    }).catch(function(error) {
      console.log("error", error);
    });
  }

  removeToDo(id) {
    axios.post(dbUrl + '/remove', {id: id}).then(response => {
      this.setState({todos: response.data});
    }).catch(function(error) {
      console.log("error", error);
    });
  }

  toggleTask(id) {
    axios.post(dbUrl + '/toggle', {id: id}).then(response => {
      this.setState({todos: response.data});
    }).catch(function(error) {
      console.log("error", error)
    })
  }

  render() {
    return (
      <div className='app-container'>
        <InputLine submit={task => this.addToDo(task)}/>
        <ToDoList todos={this.state.todos} todoXClick={id => this.removeToDo(id)} toggleTask={(id) => this.toggleTask(id)}/>
      </div>
    )
  }
}

export default ToDoApp;
