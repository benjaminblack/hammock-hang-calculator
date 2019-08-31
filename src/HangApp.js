import React from 'react';

import HangForm from './HangForm';
import HangFigure from './HangFigure';

import './stylesheets/HangApp.css';

const HangApp = () => (
  <main className="hang-app">
    <HangFigure/>
    <HangForm/>
  </main>
);

export default HangApp;
