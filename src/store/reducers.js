import * as math from 'mathjs';
import { combineReducers } from 'redux';

import { ACTIONS, DEFAULT_UNITS, UNITS_IMPERIAL, DEFAULT_LENGTH, DEFAULT_LENGTH_CHOICE, DEFAULT_SIT_HEIGHT, DEFAULT_WEIGHT, DEFAULT_DISTANCE_BETWEEN_TREES, DEFAULT_HANG_ANGLE } from '../constants';

function units(state = DEFAULT_UNITS, action) {
  if (action.type === ACTIONS.CHANGE_UNITS) {
    return action.units;
  } else {
    return state;
  }
}

function distanceBetweenTrees(state = DEFAULT_DISTANCE_BETWEEN_TREES, action) {
  if (action.type === ACTIONS.SET_DISTANCE_BETWEEN_TREES) {
    return action.distanceBetweenTrees;
  } else if (action.type === ACTIONS.CHANGE_UNITS) {
    if (action.units === UNITS_IMPERIAL) {
      return math.unit(state, 'm').toNumber('ft');
    } else {
      return math.unit(state, 'ft').toNumber('m');
    }
  } else {
    return state;
  }
}

function length(state = DEFAULT_LENGTH, action) {
  if (action.type === ACTIONS.SET_LENGTH) {
    return action.length;
  } else if (action.type === ACTIONS.CHANGE_UNITS) {
    if (action.units === UNITS_IMPERIAL) {
      return math.unit(state, 'cm').toNumber('in');
    } else {
      return math.unit(state, 'in').toNumber('cm');
    }
  } else {
    return state;
  }
}

function lengthChoice(state = DEFAULT_LENGTH_CHOICE, action) {
  if (action.type === ACTIONS.SET_LENGTH_CHOICE) {
    return action.lengthChoice;
  } else {
    return state;
  }
}

function sitHeight(state = DEFAULT_SIT_HEIGHT, action) {
  if (action.type === ACTIONS.SET_SIT_HEIGHT) {
    return action.sitHeight;
  } else if (action.type === ACTIONS.CHANGE_UNITS) {
    if (action.units === UNITS_IMPERIAL) {
      return math.unit(state, 'cm').toNumber('in');
    } else {
      return math.unit(state, 'in').toNumber('cm')
    }
  } else {
    return state;
  }
}

function weight(state = DEFAULT_WEIGHT, action) {
  if (action.type === ACTIONS.SET_WEIGHT) {
    return action.weight;
  } else if (action.type === ACTIONS.CHANGE_UNITS) {
    if (action.units === UNITS_IMPERIAL) {
      return math.unit(state, 'kg').toNumber('lb');
    } else {
      return math.unit(state, 'lb').toNumber('kg')
    }
  } else {
    return state;
  }
}

function hangAngle(state = DEFAULT_HANG_ANGLE, action) {
  if (action.type === ACTIONS.SET_HANG_ANGLE) {
    return action.hangAngle;
  } else {
    return state;
  }
}

const rootReducer = combineReducers({
  units,
  distanceBetweenTrees,
  lengthChoice,
  length,
  sitHeight,
  weight,
  hangAngle,
});

export default rootReducer;
