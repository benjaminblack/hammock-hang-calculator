import React from 'react';
import * as math from 'mathjs';

import hangCalculatorGraphic from './hang-calculator.png';

import { UNITS_IMPERIAL, LENGTH_CHOICE_RIDGELINE } from './constants';

import './HangFigure.css';

const shear = (weight, angle) => weight / (2 * Math.tan(angle * Math.PI / 180.0));
const tension = (weight, angle) => weight / (2 * Math.sin(angle * Math.PI / 180));

const HangFigure = (props) => {
  const {
    units,
    distanceBetweenTrees,
    lengthChoice,
    sitHeight,
    weight,
    hangAngle,
  } = props;

  const length = lengthChoice === LENGTH_CHOICE_RIDGELINE 
    ? props.length 
    : props.length * Math.cos(hangAngle * Math.PI / 180);

  const distanceBetweenTreesInLengthUnits = units === UNITS_IMPERIAL ? math.unit(distanceBetweenTrees, 'ft').toNumber('in') : math.unit(distanceBetweenTrees, 'm').toNumber('cm')
  const suspensionLength = (distanceBetweenTreesInLengthUnits - length) / 2 / Math.cos(hangAngle * Math.PI / 180);
  const hangHeight = Math.tan(hangAngle * Math.PI / 180) * distanceBetweenTreesInLengthUnits / 2 + sitHeight;

  return (
    <figure className="hang-figure">
      <img className="hang-graphic" src={hangCalculatorGraphic} alt="Hammock Hang Calculator"/>
      <ul className="hang-calculations">
        <li className="hang-calc hang-calc-angle">{[hangAngle.toLocaleString('en', {maximumFractionDigits: 1}), <span className="units">&deg;</span>]}</li>
        <li className="hang-calc hang-calc-weight">{[weight.toLocaleString('en', {maximumFractionDigits: 1}), <span className="units">{`${units === UNITS_IMPERIAL ? 'lb' : 'kg'}${weight === 1 ? '' : 's'}`}</span>]}</li>
        <li className="hang-calc hang-calc-ridgeline">{[length.toLocaleString('en', {maximumFractionDigits: 1}), <span className="units">{units === UNITS_IMPERIAL ? 'in' : 'cm'}</span>]}</li>
        <li className="hang-calc hang-calc-suspension-length">{[suspensionLength.toLocaleString('en', {maximumFractionDigits: 1}), <span className="units">{units === UNITS_IMPERIAL ? 'in' : 'cm'}</span>]}</li>
        <li className="hang-calc hang-calc-hang-height">{[hangHeight.toLocaleString('en', {maximumFractionDigits: 1}), <span className="units">{units === UNITS_IMPERIAL ? 'in' : 'cm'}</span>]}</li>
        <li className="hang-calc hang-calc-sit-height">{[sitHeight.toLocaleString('en', {maximumFractionDigits: 1}), <span className="units">{units === UNITS_IMPERIAL ? 'in' : 'cm'}</span>]}</li>
        <li className="hang-calc hang-calc-tree-distance">{[distanceBetweenTrees.toLocaleString('en', {maximumFractionDigits: 1}), <span className="units">{units === UNITS_IMPERIAL ? 'ft' : 'm'}</span>]}</li>
        <li className="hang-calc hang-calc-shear">{[shear(weight, hangAngle).toLocaleString('en', {maximumFractionDigits: 1}), <span className="units">{`${units === UNITS_IMPERIAL ? 'lb' : 'kg'}${weight === 1 ? '' : 's'}`}</span>]}</li>
        <li className="hang-calc hang-calc-tension">{[tension(weight, hangAngle).toLocaleString('en', {maximumFractionDigits: 1}), <span className="units">{`${units === UNITS_IMPERIAL ? 'lb' : 'kg'}${weight === 1 ? '' : 's'}`}</span>]}</li>
      </ul>
    </figure>
  );
};

export default HangFigure;
