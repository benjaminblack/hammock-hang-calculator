import React from 'react';
import hangCalculatorGraphic from './hang-calculator.jpg';
import './App.css';

const App = () => {
  return (
    <main className="calc-app">
      <img className="calc-graphic" src={hangCalculatorGraphic} alt="Hammock Hang Calculator"/>
      <form className="calc-form">
        <div className="units-imperial">
          <input type="radio" name="input-units-imperial" checked={true}/> 
          <label for="input-units-imperial">Imperial</label>
        </div>
        <div className="units-metric">
          <input type="radio" name="input-units-metric" checked={false}/>
          <label for="radio-units-metric">Metric</label>
        </div>

        <label className="label-distance-between-trees" for="input-distance-between-trees">Distance between trees</label>
        <div className="distance-between-trees">
          <input type="text" name="input-distance-between-trees" value="15"/>
          <span class="units">ft</span>
        </div>

        <label className="label-preferred-sit-height" for="input-preferred-sit-height">Preferred sit height</label>
        <div className="preferred-sit-height">
          <input type="text" name="input-preferred-sit-height" value="18"/>
          <span class="units">in</span>
        </div>

        <label className="label-weight-in-hammock" for="input-weight-in-hammock">Weight in hammock</label>
        <div className="weight-in-hammock">
          <input type="text" name="input-weight-in-hammock" value="200"/>
          <span class="units">lbs</span>
        </div>

      </form>
    </main>
  );
};

export default App;
