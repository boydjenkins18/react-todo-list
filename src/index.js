import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/Input';
import List from './components/List';
import _ from 'lodash';

class App extends React.Component{
constructor(props){
  super(props);
  this.state={lists:[{
        task: this.onTitleCase('code'),
        key:'1stTask'
      },{
        task: this.onTitleCase('sleep'),
        key:'2ndTask'
    },{
        task: this.onTitleCase('eat'),
        key:'3rdTask'
    }
  ]};
}
  render(){
    return(
        <div className='container'>
          <h1>React To-Do List</h1>
          <Input onSubmitInput={this.onClickButton.bind(this)}/>
          <List
          entries={this.state.lists}
          deleteList={this.deleteList.bind(this)}/>
          <h5>Coded By <a href="https://codepen.io/boydjenkins18">Boyd Jenkins</a></h5>
        </div>
    );
  }

onClickButton(e){
  e.preventDefault();
  var input = document.querySelector('input');
  var itemsArr=this.state.lists;
  if(input.value==='' || null){
    input.value=''
    return alert('Please Enter A Task');
  }
    for (let i=0;i<this.state.lists.length;i++){

      if(this.state.lists[i].task===this.onTitleCase(input.value)){
        input.value='';
        return alert('Task Already Exist')
      }
    }
  itemsArr.push({
    task: this.onTitleCase(input.value),
    key:this.state.lists.length+1
  });
  this.setState({lists:itemsArr});
  input.value='';
}
onTitleCase(str){
    let arr=str.split(' ');
    for(let i=0;i<arr.length;i++){
      let lCase=arr[i];
      let upCase=lCase.charAt(0).toUpperCase();
      lCase=lCase.slice(1,lCase.length).toLowerCase();
      arr[i]=upCase.concat(lCase);
    }
    str=arr.join(' ');
    return str;
  }

deleteList(listToDelete){
  _.remove(this.state.lists,todo=>todo.task === listToDelete);
  this.setState({lists:this.state.lists})
  console.log(this.state.lists.length)
  }
}

ReactDOM.render(<App />,document.getElementById('app'));
