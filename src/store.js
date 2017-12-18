import {createStore} from 'redux';

import {gameRestartReducer} from './reducers';

export default createStore(gameRestartReducer);