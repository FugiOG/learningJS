import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
// import {v1 as uuidv1} from 'uuid';


// let reformedServerData = [];

// fetch('http://localhost:3000/data')
//     .then(data => data.json())
//     .then(res => res.forEach(item => reformedServerData.push({...item, id: uuidv1()})));


// console.log(reformedServerData) 

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

