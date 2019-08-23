import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Productos from './Productos';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Productos /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});