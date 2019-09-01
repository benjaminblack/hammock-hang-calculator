import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { unit } from 'mathjs';

import hangCalculatorGraphic from './hang-calculator.png';
import { unitSpan } from './lib';

import { UNITS_IMPERIAL, LENGTH_CHOICE_RIDGELINE, HANG_GRAPHIC_LQIP } from './constants';

import './stylesheets/HangFigure.css';

const shear = (weight, angle) => weight / (2 * Math.tan(angle * Math.PI / 180.0));
const tension = (weight, angle) => weight / (2 * Math.sin(angle * Math.PI / 180));
const format = (num) => <span className="num">{num.toLocaleString('en', {maximumFractionDigits: 1})}</span>;

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

  const distanceBetweenTreesInLengthUnits = state.units === UNITS_IMPERIAL ? unit(state.distanceBetweenTrees, 'ft').toNumber('in') : unit(state.distanceBetweenTrees, 'm').toNumber('cm')
  const suspensionLength = (distanceBetweenTreesInLengthUnits - length) / 2 / Math.cos(state.hangAngle * Math.PI / 180);
  const hangHeight = Math.tan(state.hangAngle * Math.PI / 180) * distanceBetweenTreesInLengthUnits / 2 + state.sitHeight;
  const shearForce = shear(state.weight, state.hangAngle);
  const tensileForce = tension(state.weight, state.hangAngle);

  return (
    <figure className="hang-figure">
      <img className={`hang-graphic ${isGraphicLoaded ? 'loaded' : ''}`} src={hangCalculatorGraphic} alt="Hammock Hang Calculator" onLoad={() => setGraphicLoaded(true)}/>
      {!isGraphicLoaded && <img className="hang-graphic lqip" src={HANG_GRAPHIC_LQIP} alt=""/>}
      <ul className="hang-calculations">
        <li className="hang-calc hang-calc-angle">
          {format(state.hangAngle)} <span className="units">&deg;</span>
        </li>
        <li className="hang-calc hang-calc-weight">
          {format(state.weight)} {unitSpan(state.units, 'lb', 'kg')}
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
          {format(shearForce)} {unitSpan(state.units, 'lb', 'kg')}
        </li>
        <li className="hang-calc hang-calc-tension">
          {format(tensileForce)} {unitSpan(state.units, 'lb', 'kg')}
        </li>
      </ul>
    </figure>
  );
};

export default HangFigure;
