import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import store from './store/store.js';
import '../public/styles/index.css';

ReactDOM.render(
  <Provider store={store}>
    <div>Test</div>
  </Provider>,
  document.getElementById('app')
)
