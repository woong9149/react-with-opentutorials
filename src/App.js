import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';


class App extends Component{
  render(){
    return (
      <div className="App">
        <Subject title="WEB" sub="World Wide Web"></Subject>
        <TOC title="" desc=""></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
}
}

export default App;//TOC.js를 갖다쓰는 쪽에서 TOC라는 class를 갖다쓸 수 있게 해주는 코드;
