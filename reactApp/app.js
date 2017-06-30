import React from 'react';
import ReactDOM from 'react-dom';

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

  render() {
    return (
      <div className='app-container'>
        <InputLine/>
        <ToDoList todos={this.state.todos}/>
      </div>
    )
  }
}

class ToDoList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ul>
        {dummyData.map(task => {
          return <ToDo task={task}/>
        })}
      </ul>
    )
  }
}

class ToDo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var task = this.props.task.completed
      ? <strike>
          {this.props.task.taskText}
        </strike>
      : this.props.task.taskText
    return (
      <li>
        <button type="button" className='btn btn-outline-success btn-sm'>X</button>{task}
      </li>
    )
  }
}

class InputLine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newTask: ''
    }
  }
  render() {
    return (
      <div className='input-container'>
        <input type="text" name="newTask" value={this.state.newTask} placeholder="New task..."/>
        <input type="submit" className="btn btn-success" name="addToDo" value="Add ToDo"/>
      </div>
    )
  }

}
ReactDOM.render(
  <ToDoApp/>, document.getElementById('root'));
