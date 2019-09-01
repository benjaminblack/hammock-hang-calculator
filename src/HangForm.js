import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from './store/actions';
import './stylesheets/HangForm.css';
import { UNITS_IMPERIAL, UNITS_METRIC, LENGTH_CHOICE_RIDGELINE, LENGTH_CHOICE_HAMMOCK, HANG_ANGLE_CHOICES } from './constants';
import { unitSpan } from './lib';

const HangForm = (props) => {
  const state = useSelector((state) => ({
    distanceBetweenTrees: state.distanceBetweenTrees,
    hangAngle: state.hangAngle,
    length: state.length,
    lengthChoice: state.lengthChoice,
    sitHeight: state.sitHeight,
    units: state.units,
    weight: state.weight,
  }));

  const dispatch = useDispatch();
  
  return (
    <form className="hang-form">

      <div className="units-imperial">
        <input type="radio" id="units-imperial" name={UNITS_IMPERIAL} checked={state.units === UNITS_IMPERIAL} onChange={(e) => dispatch(actions.changeUnits(e.target.name))}/>
        <label htmlFor="units-imperial">Imperial</label>
      </div>
      <div className="units-metric">
        <input type="radio" id="units-metric" name={UNITS_METRIC} checked={state.units === UNITS_METRIC} onChange={(e) => dispatch(actions.changeUnits(e.target.name))}/>
        <label htmlFor="units-metric">Metric</label>
      </div>

      <label className="label-distance-between-trees" htmlFor="input-distance-between-trees">Distance between trees</label>
      <div className="distance-between-trees">
        <input type="number" min="0" step="1" id="input-distance-between-trees" name="input-distance-between-trees" value={state.distanceBetweenTrees.toLocaleString('en', {maximumFractionDigits: 1})} onChange={(e) => dispatch(actions.setDistanceBetweenTrees(+e.target.value))}/>
        {unitSpan(state.units, 'ft', 'm')}
      </div>

      <select className="length-choice" value={state.lengthChoice} onChange={(e) => dispatch(actions.setLengthChoice(e.target.value))}>
        <option value={LENGTH_CHOICE_RIDGELINE}>{LENGTH_CHOICE_RIDGELINE}</option>
        <option value={LENGTH_CHOICE_HAMMOCK}>{LENGTH_CHOICE_HAMMOCK}</option>
      </select>
      <div className="length">
        <input type="number" min="0" step="1" name="length" value={state.length.toLocaleString('en', {maximumFractionDigits: 1})} onChange={(e) => dispatch(actions.setLength(+e.target.value))}/>
        {unitSpan(state.units, 'in', 'cm')}
      </div>

      <label className="label-preferred-sit-height" htmlFor="input-preferred-sit-height">Preferred sit height</label>
      <div className="preferred-sit-height">
        <input type="number" min="0" step="1" id="input-preferred-sit-height" name="input-preferred-sit-height" value={state.sitHeight.toLocaleString('en', {maximumFractionDigits: 1})} onChange={(e) => dispatch(actions.setSitHeight(+e.target.value))}/>
        {unitSpan(state.units, 'in', 'cm')}
      </div>

      <label className="label-weight-in-hammock" htmlFor="input-weight-in-hammock">Weight in hammock</label>
      <div className="weight-in-hammock">
        <input type="number" min="0" step="1" id="input-weight-in-hammock" name="input-weight-in-hammock" value={state.weight.toLocaleString('en', {maximumFractionDigits: 1})} onChange={(e) => dispatch(actions.setWeight(+e.target.value))}/>
        {unitSpan(state.units, 'lbs', 'kg')}
      </div>

      <label className="label-hang-angle" htmlFor="input-hang-angle">Hang angle</label>
      <div className="hang-angle">
        <select id="input-hang-angle" name="input-hang-angle" value={state.hangAngle.toLocaleString('en', {maximumFractionDigits: 0})} onChange={(e) => dispatch(actions.setHangAngle(+e.target.value))}>
          {HANG_ANGLE_CHOICES.map((angle) => <option key={angle} value={angle}>{angle}</option>)}
        </select>
        <span className="units">&deg;</span>
      </div>

      <small className="disclaimer"><b>DISCLAIMER</b>: This program is for estimating and entertainment purposes only.</small>

    </form>
  );
};

export default HangForm;
