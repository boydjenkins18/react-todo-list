import React from 'react';

export default class Table extends React.Component{
  render(){
    return(
      <tr>
        <td className='myTask'>{this.props.task}</td>
        <td>
        <button
        onClick={this.props.deleteList.bind(this,this.props.task)}
        className='btn btn-danger deletebtn'>Delete</button>
        </td>

      </tr>
    );
  }

}
