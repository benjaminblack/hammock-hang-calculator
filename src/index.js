import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import HangApp from './HangApp';
import * as serviceWorker from './serviceWorker';

import './index.css';

console.log(store.getState());

const render = () => ReactDOM.render(
  <Provider store={store}>
    <HangApp/>
  </Provider>,
  document.querySelector('#root')
);

store.subscribe(render);

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
