import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../components/footer/footer'

it('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
});
