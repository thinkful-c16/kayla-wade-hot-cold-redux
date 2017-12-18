import store from './store';
import {RESTART_GAME, restartGame} from './actions';

console.log(store.getState());

store.dispatch(restartGame());

console.log(store.getState());


// import React from 'react';
// import ReactDOM from 'react-dom';

// import './reset.css';
// import './index.css';

// import Game from './components/game';



// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );
