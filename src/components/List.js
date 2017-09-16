import React from 'react';
import Table from './Table'

export default class List extends React.Component{
  render(){
const listStuff=this.props.entries.map((todo,i)=>{
  return(
    <Table
    key={todo.key}
    task={todo.task}
    deleteList={this.props.deleteList}/>
  )
})
    return(
      <div className='table-responsive'>
      <table className='table table-bordered table-hover'>
          <thead>
            <tr>
              <th className='task'>
              <h4>Task</h4>
              </th>
                <th className='actionDelete'>
                <h4>Action</h4>
                </th>
            </tr>
          </thead>
          <tbody>
            {listStuff}
          </tbody>
      </table>
      </div>
    )
  }

}
