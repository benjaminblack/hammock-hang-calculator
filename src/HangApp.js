import React, { useState } from 'react';
import * as math from 'mathjs';
import HangForm from './HangForm';
import HangFigure from './HangFigure';
import { UNITS_IMPERIAL, DEFAULT_DISTANCE_BETWEEN_TREES, DEFAULT_LENGTH_CHOICE, DEFAULT_SIT_HEIGHT, DEFAULT_WEIGHT, DEFAULT_HANG_ANGLE, DEFAULT_LENGTH } from './constants';

import './HangApp.css';

export { math };

const HangApp = () => {
  const [units, setUnits] = useState(UNITS_IMPERIAL);
  const [distanceBetweenTrees, setDistanceBetweenTrees] = useState(DEFAULT_DISTANCE_BETWEEN_TREES);
  const [lengthChoice, setLengthChoice] = useState(DEFAULT_LENGTH_CHOICE);
  const [length, setLength] = useState(DEFAULT_LENGTH);
  const [sitHeight, setSitHeight] = useState(DEFAULT_SIT_HEIGHT);
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);
  const [hangAngle, setHangAngle] = useState(DEFAULT_HANG_ANGLE);

  const changeUnits = (newUnits) => {
    if (newUnits === units) {
      return;
    }

    setUnits(newUnits);

    if (newUnits === UNITS_IMPERIAL) {
      setDistanceBetweenTrees(math.unit(distanceBetweenTrees, 'm').toNumber('ft'));
      setLength(math.unit(length, 'cm').toNumber('in'));
      setSitHeight(math.unit(sitHeight, 'cm').toNumber('in'));
      setWeight(math.unit('kg').toNumber('lb'));
    } else {
      setDistanceBetweenTrees(math.unit(distanceBetweenTrees, 'ft').toNumber('m'));
      setLength(math.unit(length, 'in').toNumber('cm'));
      setSitHeight(math.unit(sitHeight, 'in').toNumber('cm'));
      setWeight(math.unit('lb').toNumber('kg'));
    }
  };

  const formProps = {
    units, changeUnits,
    distanceBetweenTrees, setDistanceBetweenTrees,
    lengthChoice, setLengthChoice,
    length, setLength,
    sitHeight, setSitHeight,
    weight, setWeight,
    hangAngle, setHangAngle,
  };

  const figureProps = {
    units,
    distanceBetweenTrees,
    lengthChoice,
    length,
    sitHeight,
    weight,
    hangAngle,
  };

  return (
    <main className="hang-app">
      <HangFigure {...figureProps}/>
      <HangForm {...formProps}/>
    </main>
  );
};

export default HangApp;
