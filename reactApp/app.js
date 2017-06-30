import React from 'react';
import ReactDOM from 'react-dom';


var dummyData = ["Laundry", "Meal Prep", "Netflix", "Take out the Trash"];

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
ReactDOM.render(<ToDoList />,
   document.getElementById('root'));
