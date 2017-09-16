import React from 'react';

export default class Input extends React.Component{
  render(){
    return(
      <form onSubmit={this.props.onSubmitInput}>
        <input type="text" className='form-control' placeholder='Enter A Task'/>
        <button className='btn createbtn'><i className="fa fa-plus" aria-hidden="true"></i></button>
      </form>
    )
  }

}
