import store from './store';
import { Provider } from 'react-redux';
import {restartGame, makeGuess, setAuralStatus} from './actions';
import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';

console.log(store.getState());

store.dispatch(restartGame());

console.log(store.getState());

store.dispatch(makeGuess(3));

console.log(store.getState());

store.dispatch(makeGuess(73));

console.log(store.getState());

store.dispatch(makeGuess(33));

console.log(store.getState());

store.dispatch(makeGuess(13));

console.log(store.getState());

store.dispatch(makeGuess(93));

console.log(store.getState());

store.dispatch(setAuralStatus());

console.log(store.getState());

ReactDOM.render(
<Provider store={store}>
  <Game />
</Provider>,
  document.getElementById('root')
);
