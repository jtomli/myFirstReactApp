import React from 'react';
import ReactDOM from 'react-dom';


var dummyData = ["Laundry", "Meal Prep", "Netflix", "Take out the Trash"];

class ToDoApp extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <InputLine />
      <ToDoList />
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
      <ul> {dummyData.map(task => {
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
    return (
      <li> <button className='btn btn-primary'>X</button>{this.props.task} </li>
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
ReactDOM.render(<ToDoApp />,
   document.getElementById('root'));
