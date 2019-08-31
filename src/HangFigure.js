import React from 'react';
import * as math from 'mathjs';

import hangCalculatorGraphic from './hang-calculator.png';

import { UNITS_IMPERIAL, LENGTH_CHOICE_RIDGELINE } from './constants';

import './stylesheets/HangFigure.css';

const shear = (weight, angle) => weight / (2 * Math.tan(angle * Math.PI / 180.0));
const tension = (weight, angle) => weight / (2 * Math.sin(angle * Math.PI / 180));

const format = (num) => num.toLocaleString('en', {maximumFractionDigits: 1});

const unitStr = (units, imperialUnit, metricUnit, pluralize = false, value) => {
  let u = units === UNITS_IMPERIAL ? imperialUnit : metricUnit;

  if (pluralize && value === 1.0) {
    u += 's';
  }

  return <span className="units">{u}</span>;
}

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
  const shearForce = shear(weight, hangAngle);
  const tensileForce = tension(weight, hangAngle);

  return (
    <figure className="hang-figure">
      <img className="hang-graphic" src={hangCalculatorGraphic} alt="Hammock Hang Calculator"/>
      <ul className="hang-calculations">
        <li className="hang-calc hang-calc-angle">
          {format(hangAngle)} <span className="units">&deg;</span>
        </li>
        <li className="hang-calc hang-calc-weight">
          {format(weight)} {unitStr(units, 'lb', 'kg', true, weight)}
        </li>
        <li className="hang-calc hang-calc-ridgeline">
          {format(length)} {unitStr(units, 'in', 'cm')}
        </li>
        <li className="hang-calc hang-calc-suspension-length">
          {format(suspensionLength)} {unitStr(units, 'in', 'cm')}
        </li>
        <li className="hang-calc hang-calc-hang-height">
          {format(hangHeight)} {unitStr(units, 'in', 'cm')}
        </li>
        <li className="hang-calc hang-calc-sit-height">
          {format(sitHeight)} {unitStr(units, 'in', 'cm')}
        </li>
        <li className="hang-calc hang-calc-tree-distance">
          {format(distanceBetweenTrees)} {unitStr(units, 'ft', 'm')}
        </li>
        <li className="hang-calc hang-calc-shear">
          {format(shearForce)} {unitStr(units, 'lb', 'kg', true, shearForce)}
        </li>
        <li className="hang-calc hang-calc-tension">
          {format(tensileForce)} {unitStr(units, 'lb', 'kg', true, tensileForce)}
        </li>
      </ul>
    </figure>
  );
};

export default HangFigure;
