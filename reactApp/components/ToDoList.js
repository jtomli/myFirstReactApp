import React from 'react';
import ToDo from './ToDo'

class ToDoList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ul>
        {this.props.todos.map((task, index) => {
          return <ToDo index={index} toggleTask={(index) => this.props.toggleTask(index)} task={task} xClick={(index) => this.props.todoXClick(index)}/>
        })}
      </ul>
    )
  }
}

export default ToDoList;
