import React from 'react';

class InputLine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      typedText: ''
    }
  }

  handleTaskInputChange(e) {
    this.setState({typedText : e.target.value})
  }

  handleSubmit(e) {
    this.props.submit(this.state.typedText);
    this.setState({typedText : ""});
  }

  render() {
    return (
      <div className='input-container'>
        <input onChange={e => this.handleTaskInputChange(e)} type="text" name="newTask" value={this.state.typedText} placeholder="New task..."/>
        <input onClick={e => this.handleSubmit(e)} type="submit" className="btn btn-success" name="addToDo" value="Add ToDo"/>
      </div>
    )
  }
}

export default InputLine;
