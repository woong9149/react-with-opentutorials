import React,{Component} from 'react';

class Control extends Component{
    render(){//class안의 함수는 function을 생략하고 사용 가능
      //컴포넌트는 최상위태그 하나로 감싸져야한다.
      return (
        <ul>
          <li><a href="/create" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('create');
          }.bind(this)}>create</a></li>
          <li><a href="/update" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('update');
          }.bind(this)}>update</a></li>
          <li><input onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('delete');
          }.bind(this)} type="button" value="delete" ></input></li>
        </ul>
  
      )
    }
  }

  export default Control;