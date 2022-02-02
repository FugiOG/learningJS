import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Header} from './App';

// const elem = <h2>Hello World!</h2>; //jsx

// const elem = React.createElement('h2', {className: 'random'}, 'Hello World!'); // without jsx 

// const text = 'Hello World!';

// const elem = (
//     <div>
//         <h2 className="text">Текст: {text}</h2>
//         <input type="text" />
//         <label htmlFor=""></label>
//         <button tabIndex="0">Click!</button>
//     </div>
// );

ReactDOM.render(
  <StrictMode>
    <App/>
  </StrictMode>,
  document.getElementById('root')
);

