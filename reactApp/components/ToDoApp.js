import React from 'react';
import InputLine from './InputLine';
import ToDoList from './ToDoList'

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
    dummyData.push({taskText: task, completed: false});
    this.setState({todos : dummyData});
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
