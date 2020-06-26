import React,{Component} from 'react';

class Subject extends Component{
    render(){//class안의 함수는 function을 생략하고 사용 가능
      //컴포넌트는 최상위태그 하나로 감싸져야한다.
      return (
        <header>
          <h1>{this.props.title}</h1>
                {this.props.sub}
        </header>
  
      )
    }
  }

  export default Subject;