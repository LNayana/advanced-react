import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (<h1> Hello World, I am from ReactJS. </h1>);  
};

let mountNode = document.getElementById('appContainer');
ReactDOM.render(<App/>, mountNode);