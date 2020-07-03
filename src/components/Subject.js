import React,{Component} from 'react';

class Subject extends Component{
    render(){//class안의 함수는 function을 생략하고 사용 가능
      //컴포넌트는 최상위태그 하나로 감싸져야한다.
      return (
        <header>
          {/* <h1><a href="/">{this.props.title}</a></h1>
                {this.props.sub} */}
          <h1><a href="/" onClick={function(e){
              console.log('e: ',e);
              e.preventDefault();
              // this.state.mode = 'Welcome';
             this.props.onChangePage();
              // this.setState({
              //   mode:'Welcome'
              // })
            }.bind(this)}>{this.props.title}</a></h1>
            {this.props.sub}
        </header>
  
      )
    }
  }

  export default Subject;