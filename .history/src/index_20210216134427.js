import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

import App from './App';
import reducer,  {inc, dec, reset }from './users/redux';

const store = createStore(reducer);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

