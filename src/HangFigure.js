import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as math from 'mathjs';

import hangCalculatorGraphic from './hang-calculator.png';
import { unitSpan } from './lib';

import { UNITS_IMPERIAL, LENGTH_CHOICE_RIDGELINE, HANG_GRAPHIC_LQIP } from './constants';

import './stylesheets/HangFigure.css';

const format = (num) => <span className="num">{num.toLocaleString('en', {maximumFractionDigits: 1})}</span>;

function tension(units, weight, angle) {
  const mass = units === UNITS_IMPERIAL ? math.unit(weight, 'lb') : math.unit(weight, 'kg');
  const halfMass = math.multiply(mass, 0.5);
  const force = halfMass.multiply(math.unit(9.8, 'm / s^2'));
  const xForce = math.multiply(force, math.sin(math.unit(angle, 'deg')));

  return units === UNITS_IMPERIAL ? xForce.toNumber('lbf') : xForce.toNumber('N');
}

function shear(units, weight, angle) {
  const mass = units === UNITS_IMPERIAL ? math.unit(weight, 'lb') : math.unit(weight, 'kg');
  const halfMass = math.multiply(mass, 0.5);
  const force = halfMass.multiply(math.unit(9.8, 'm / s^2'));
  const xForce = math.multiply(force, math.cos(math.unit(angle, 'deg')));
  return units === UNITS_IMPERIAL ? xForce.toNumber('lbf') : xForce.toNumber('N');
}

const HangFigure = (props) => {
  const state = useSelector((state) => ({
    distanceBetweenTrees: state.distanceBetweenTrees,
    hangAngle: state.hangAngle,
    length: state.length,
    lengthChoice: state.lengthChoice,
    sitHeight: state.sitHeight,
    units: state.units,
    weight: state.weight,
  }));

  const [isGraphicLoaded, setGraphicLoaded] = useState(false);

  const length = state.lengthChoice === LENGTH_CHOICE_RIDGELINE 
    ? state.length
    : state.length * Math.cos(state.hangAngle * Math.PI / 180);

  const distanceBetweenTreesInLengthUnits = state.units === UNITS_IMPERIAL ? math.unit(state.distanceBetweenTrees, 'ft').toNumber('in') : math.unit(state.distanceBetweenTrees, 'm').toNumber('cm')
  const suspensionLength = (distanceBetweenTreesInLengthUnits - length) / 2 / Math.cos(state.hangAngle * Math.PI / 180);
  const hangHeight = Math.tan(state.hangAngle * Math.PI / 180) * distanceBetweenTreesInLengthUnits / 2 + state.sitHeight;
  const shearForce = shear(state.units, state.weight, state.hangAngle);
  const tensileForce = tension(state.units, state.weight, state.hangAngle);

  return (
    <figure className="hang-figure">
      <img className={`hang-graphic ${isGraphicLoaded ? 'loaded' : ''}`} src={hangCalculatorGraphic} alt="Hammock Hang Calculator" onLoad={() => setGraphicLoaded(true)}/>
      {!isGraphicLoaded && <img className="hang-graphic lqip" src={HANG_GRAPHIC_LQIP} alt=""/>}
      <ul className="hang-calculations">
        <li className="hang-calc hang-calc-angle">
          {format(state.hangAngle)} <span className="units">&deg;</span>
        </li>
        <li className="hang-calc hang-calc-weight">
          {format(state.weight)} {unitSpan(state.units, 'lbs', 'kg')}
        </li>
        <li className="hang-calc hang-calc-ridgeline">
          {format(length)} {unitSpan(state.units, 'in', 'cm')}
        </li>
        <li className="hang-calc hang-calc-suspension-length">
          {format(suspensionLength)} {unitSpan(state.units, 'in', 'cm')}
        </li>
        <li className="hang-calc hang-calc-hang-height">
          {format(hangHeight)} {unitSpan(state.units, 'in', 'cm')}
        </li>
        <li className="hang-calc hang-calc-sit-height">
          {format(state.sitHeight)} {unitSpan(state.units, 'in', 'cm')}
        </li>
        <li className="hang-calc hang-calc-tree-distance">
          {format(state.distanceBetweenTrees)} {unitSpan(state.units, 'ft', 'm')}
        </li>
        <li className="hang-calc hang-calc-shear">
          {format(shearForce)} {unitSpan(state.units, 'lbf', 'N')}
        </li>
        <li className="hang-calc hang-calc-tension">
          {format(tensileForce)} {unitSpan(state.units, 'lbf', 'N')}
        </li>
      </ul>
    </figure>
  );
};

export default HangFigure;
