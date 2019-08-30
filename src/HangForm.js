import React from 'react';

import './HangForm.css';
import { UNITS_IMPERIAL, UNITS_METRIC, LENGTH_CHOICE_RIDGELINE, LENGTH_CHOICE_HAMMOCK, HANG_ANGLE_CHOICES } from './constants';

const HangForm = (props) => {
  const { 
    units,
    distanceBetweenTrees,
    lengthChoice,
    length,
    sitHeight,
    weight,
    hangAngle,
  } = props;

  const {
    setUnits,
    setDistanceBetweenTrees,
    setLengthChoice,
    setLength,
    setSitHeight,
    setWeight,
    setHangAngle,
  } = props;

  return (
    <form className="hang-form">

      <div className="units-imperial">
        <input type="radio" name={UNITS_IMPERIAL} checked={units === UNITS_IMPERIAL} onChange={(e) => setUnits(e.target.name)}/>
        <label htmlFor={UNITS_IMPERIAL}>Imperial</label>
      </div>
      <div className="units-metric">
        <input type="radio" name={UNITS_METRIC} checked={units === UNITS_METRIC} onChange={(e) => setUnits(e.target.name)}/>
        <label htmlFor={UNITS_METRIC}>Metric</label>
      </div>

      <label className="label-distance-between-trees" htmlFor="input-distance-between-trees">Distance between trees</label>
      <div className="distance-between-trees">
        <input type="number" step="1" name="input-distance-between-trees" value={distanceBetweenTrees} onChange={(e) => setDistanceBetweenTrees(+e.target.value)}/>
        <span className="units">{units === UNITS_IMPERIAL ? 'ft' : 'm'}</span>
      </div>

      <select className="length-choice" value={lengthChoice} onChange={(e) => setLengthChoice(e.target.value)}>
        <option value={LENGTH_CHOICE_RIDGELINE}>{LENGTH_CHOICE_RIDGELINE}</option>
        <option value={LENGTH_CHOICE_HAMMOCK}>{LENGTH_CHOICE_HAMMOCK}</option>
      </select>
      <div className="length">
        <input type="number" step="1" name="length" value={length} onChange={(e) => setLength(+e.target.value)}/>
        <span className="units">{units === UNITS_IMPERIAL ? 'in' : 'cm'}</span>
      </div>

      <label className="label-preferred-sit-height" htmlFor="input-preferred-sit-height">Preferred sit height</label>
      <div className="preferred-sit-height">
        <input type="number" step="1" name="input-preferred-sit-height" value={sitHeight} onChange={(e) => setSitHeight(+e.target.value)}/>
        <span className="units">{units === UNITS_IMPERIAL ? 'in' : 'cm'}</span>
      </div>

      <label className="label-weight-in-hammock" htmlFor="input-weight-in-hammock">Weight in hammock</label>
      <div className="weight-in-hammock">
        <input type="text" name="input-weight-in-hammock" value={weight} onChange={(e) => setWeight(+e.target.value)}/>
        <span className="units">{units === UNITS_IMPERIAL ? 'lbs' : 'kg'}</span>
      </div>

      <label className="label-hang-angle" htmlFor="input-hang-angle">Hang angle</label>
      <div className="hang-angle">
        <select name="input-hang-angle" value={hangAngle} onChange={(e) => setHangAngle(+e.target.value)}>
          {HANG_ANGLE_CHOICES.map((angle) => <option key={angle} value={angle}>{angle}</option>)}
        </select>
        <span className="units">&deg;</span>
      </div>

    </form>
  );
};

export default HangForm;
