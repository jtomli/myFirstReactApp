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
  }

  render() {
    return (
      <div>
        <InputLine/>
        <ToDoList/>
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
        <button className='btn btn-primary'>X</button>{task}
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
      <div>
        <input type="text" name="newTask" value={this.state.newTask} placeholder="task"/>
        <input type="submit" name="addToDo" value="Add ToDo"/>
      </div>
    )
  }

}
ReactDOM.render(
  <ToDoApp/>, document.getElementById('root'));
