import { LOCALSTORAGE_KEY } from '../constants';

function loadState() {
  try {
    const serializedState = localStorage.getItem(LOCALSTORAGE_KEY);

    if (serializedState === null) {
      return undefined;   
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(LOCALSTORAGE_KEY, serializedState);
  } catch (err) {
    console.error(err);
  }
};

export { loadState, saveState };
