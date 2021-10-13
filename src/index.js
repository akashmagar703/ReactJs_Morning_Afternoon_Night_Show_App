import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let curDate = new Date();
curDate = curDate.getHours();
let greet = '';

if(curDate >=1 && curDate <12){
  greet = 'Good Morning'
}else if(curDate >=12 && curDate<19){
  greet='Good Afternoon'
}else{
  greet='Good Night'
}

ReactDOM.render(
  <>
  <h1>Hello Guys , {greet} </h1>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
