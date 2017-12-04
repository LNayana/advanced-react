import React from 'react';
import ReactDOM from 'react-dom';

//const App = () => {
//  return (<h1> Hello World, I am from ReactJS. </h1>);  
//};

class DemoApp extends React.Component{
          state={year:2018}
          
          render(){
	  return (<h1> Welcome in {this.state.year} </h1>);
  }
}          
          
          
let mountNode = document.getElementById('appContainer');
ReactDOM.render(<DemoApp/>, mountNode);