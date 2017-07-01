import React from 'react';

class ToDo extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    //console.log(this.props.)
    var task = this.props.task.completed
      ? <strike>
          {this.props.task.taskText}
        </strike>
      : this.props.task.taskText
    return (
      <li>
        <button onClick={() => this.props.xClick(this.props.index)} type="button" className='btn btn-outline-success btn-sm'>X</button>
        <span onClick={() => this.props.toggleTask(this.props.index)}>{task}</span>
      </li>
    )
  }
}

export default ToDo;
