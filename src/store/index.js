import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './reducers';
// import { loadState, saveState } from './localStorage';

// const persistedState = loadState();
const persistedState = {};

const store = createStore(rootReducer, persistedState, applyMiddleware(logger));

// subscribe to store to persist state in localStorage, throttled to 1000ms
// store.subscribe(() => {
//   const { playlist: { playlistVideos } } = store.getState();
//   saveState({ playlist: { playlistVideos } });
// });

export default store;
