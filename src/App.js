import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB', sub: 'World Wide Web'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information...'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive...'}
      ]
    }


  }

  render(){
    return (
      <div className="App">
        <Subject title = {this.state.title} sub = {this.state.sub}></Subject>
        <TOC data = {this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
}
}

export default App;//TOC.js를 갖다쓰는 쪽에서 TOC라는 class를 갖다쓸 수 있게 해주는 코드;
