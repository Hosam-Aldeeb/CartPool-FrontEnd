import React from 'react';
import ReactDOM from 'react-dom';
import Tools from '../components/tools/tools'

it('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tools />, div);
    ReactDOM.unmountComponentAtNode(div);
});
