import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import App from '../App';

Object.defineProperty(global.Element.prototype, 'insertAdjacentElement', {
    value: jest.fn(),
    writable: true,
});

it('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});


