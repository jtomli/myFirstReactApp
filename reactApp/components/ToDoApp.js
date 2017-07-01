import React from 'react';
import InputLine from './InputLine';
import ToDoList from './ToDoList';
import axios from 'axios';

var dummyData = [
  {
    taskText: "Laundry",
    completed: false
  }, {
    taskText: "Meal Prep",
    completed: true
  }, {
    taskText: "Netflix",
    completed: true
  }, {
    taskText: "Take out the Trash",
    completed: false
  }
];
const dbUrl = 'http://localhost:3000/db';

class ToDoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.setState({
      todos: dummyData
    })
  }

  addToDo(task) {
    axios.post(dbUrl + '/add', {task : task})
  .then(function (response) {
    this.setState({ todos: this.state.todos.concat(response.data)});
  })
  .catch(function (error) {
    console.log("error", error);
  });
    // dummyData.push({taskText: task, completed: false});
    // this.setState({todos : dummyData});
  }

  removeToDo(index) {
    dummyData.splice(index, 1);
    this.setState({todos : dummyData});
  }

  toggleTask(index) {
    var task = dummyData[index];
    if(task.completed) {
      task.completed = false;
    } else {
      task.completed = true;
    }
    this.setState({todos : dummyData});
  }

  render() {
    return (
      <div className='app-container'>
        <InputLine submit={(task) => this.addToDo(task)}/>
        <ToDoList todos={this.state.todos} todoXClick={(index) => this.removeToDo(index)} toggleTask={(index) => this.toggleTask(index)}/>
      </div>
    )
  }
}

export default ToDoApp;
