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
          return <ToDo key={task._id} dbId={task._id} toggleTask={id => this.props.toggleTask(id)} task={task} xClick={id => this.props.todoXClick(id)}/>
        })}
      </ul>
    )
  }
}

export default ToDoList;
