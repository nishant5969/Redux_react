import { createStore, applyMiddleware } from 'redux';
import promisseMiddleware from 'redux-promise';

import rootReducer from '../reducer/index';

let store = createStore(rootReducer,applyMiddleware(promisseMiddleware));

export default store;

