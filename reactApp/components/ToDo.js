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
        <button type="button" className='btn btn-outline-success btn-sm'>X</button>{task}
      </li>
    )
  }
}

export default ToDo;
