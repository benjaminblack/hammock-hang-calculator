import React from 'react';
import ReactDOM from 'react-dom';
import HangApp from './HangApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HangApp/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
