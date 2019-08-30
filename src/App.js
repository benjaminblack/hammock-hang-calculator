import React, { useState } from 'react';
import hangCalculatorGraphic from './hang-calculator.jpg';
import './App.css';
import HangForm from './HangForm';
import { UNITS_IMPERIAL, DEFAULT_DISTANCE_BETWEEN_TREES, DEFAULT_LENGTH_CHOICE, DEFAULT_SIT_HEIGHT, DEFAULT_WEIGHT, DEFAULT_HANG_ANGLE, DEFAULT_LENGTH } from './constants';

const App = () => {
  const [units, setUnits] = useState(UNITS_IMPERIAL);
  const [distanceBetweenTrees, setDistanceBetweenTrees] = useState(DEFAULT_DISTANCE_BETWEEN_TREES);
  const [lengthChoice, setLengthChoice] = useState(DEFAULT_LENGTH_CHOICE);
  const [length, setLength] = useState(DEFAULT_LENGTH);
  const [sitHeight, setSitHeight] = useState(DEFAULT_SIT_HEIGHT);
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);
  const [hangAngle, setHangAngle] = useState(DEFAULT_HANG_ANGLE);

  const formProps = {
    units, setUnits,
    distanceBetweenTrees, setDistanceBetweenTrees,
    lengthChoice, setLengthChoice,
    length, setLength,
    sitHeight, setSitHeight,
    weight, setWeight,
    hangAngle, setHangAngle,
  };

  return (
    <main className="hang-app">
      <img className="hang-graphic" src={hangCalculatorGraphic} alt="Hammock Hang Calculator"/>
      <HangForm {...formProps}/>
    </main>
  );
};

export default App;
