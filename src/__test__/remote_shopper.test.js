import React from 'react';
import ReactDOM from 'react-dom';
import RemoteShopper from '../components/remote_shopper/remote_shopper';

it('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RemoteShopper />, div);
    ReactDOM.unmountComponentAtNode(div);
});
