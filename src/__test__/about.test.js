import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import About from '../components/about/about'

Object.defineProperty(global.Element.prototype, 'insertAdjacentElement', {
    value: jest.fn(),
    writable: true,
  });

it('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<About />, div);
    ReactDOM.unmountComponentAtNode(div);
});