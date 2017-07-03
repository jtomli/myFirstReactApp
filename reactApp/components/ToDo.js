import React from 'react';

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
        <button onClick={() => this.props.xClick(this.props.dbId)} type="button" className='btn btn-outline-success btn-sm'>X</button>
        <span onClick={() => this.props.toggleTask(this.props.dbId)}>{task}</span>
      </li>
    )
  }
}

export default ToDo;
