import './index.css';
import React from 'react';
import ReactDom from 'react-dom';
import store from 'redux/store';
import { myAction } from './redux/actions';
import App from './App';

store.dispatch(myAction(5));

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root'),
);
