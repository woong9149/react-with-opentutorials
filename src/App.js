import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Nav extends Component{
  render(){
    return (
      <nav>
            <ul>
                <li><a href="1.html">HTML</a></li>  
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">JavaScript</a></li>
            </ul>
        </nav>
    )
  }
}

class Subject extends Component{
  render(){//class안의 함수는 function을 생략하고 사용 가능
    //컴포넌트는 최상위태그 하나로 감싸져야한다.
    return (
      <header>
        <h1>WEB</h1>
        World Wide Web!
      </header>

    )
  }
}

class App extends Component{
  render(){
    return (
      <div className="App">
        <Subject></Subject>
        <Nav></Nav>
      </div>
    );
}
}

export default App;
