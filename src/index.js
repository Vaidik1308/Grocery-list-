import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  //you have to call this file to attach these styles
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// rather than root.render() you can use below one also
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.querySelector('#root')
// );


