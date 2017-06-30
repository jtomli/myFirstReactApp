import React from 'react';
import ToDo from './ToDo'

class ToDoList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ul>
        {this.props.todos.map(task => {
          return <ToDo task={task}/>
        })}
      </ul>
    )
  }
}

export default ToDoList;
