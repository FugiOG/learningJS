import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Button} from './App';
import styled from 'styled-components';
import BootstrapTest from './BootstrapTest';

import 'bootstrap/dist/css/bootstrap.min.css';

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

const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
  text-align: center;
`;

ReactDOM.render(
  <StrictMode>
    <App/>
    <BigButton as="a">Отправить отчёт</BigButton>
    <BootstrapTest/>
  </StrictMode>,
  document.getElementById('root')
);

