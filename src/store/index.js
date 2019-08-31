import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, applyMiddleware(logger));

store.subscribe(() => {
  const state = store.getState();
  saveState(state);
});

export default store;
