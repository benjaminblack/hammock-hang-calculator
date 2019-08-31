import { ACTIONS } from '../constants';

export function changeUnits(units) {
  return {
    type: ACTIONS.CHANGE_UNITS,
    units,
  };
}

export function setDistanceBetweenTrees(distanceBetweenTrees) {
  return {
    type: ACTIONS.SET_DISTANCE_BETWEEN_TREES,
    distanceBetweenTrees,
  };
}

export function setLengthChoice(lengthChoice) {
  return {
    type: ACTIONS.SET_LENGTH_CHOICE,
    lengthChoice,
  };
}

export function setLength(length) {
  return {
    type: ACTIONS.SET_LENGTH,
    length,
  };
}

export function setSitHeight(sitHeight) {
  return {
    type: ACTIONS.SET_SIT_HEIGHT,
    sitHeight,
  };
}

export function setWeight(weight) {
  return {
    type: ACTIONS.SET_WEIGHT,
    weight,
  };
}

export function setHangAngle(hangAngle) {
  return {
    type: ACTIONS.SET_HANG_ANGLE,
    hangAngle,
  };
}
