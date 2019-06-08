import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import rootReducer from './reducers';

const middlewares = [logger];

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(...middlewares)
);
export default store;
