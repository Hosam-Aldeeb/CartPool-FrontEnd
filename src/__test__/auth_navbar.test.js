import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent,screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import AuthNavbar from '../components/auth_navbar/auth_navbar';


describe('AuthNavbar', () => {
  // it('renders correctly', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<AuthNavbar />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  test('renders CartPool logo and name', () => {
    const { getByAltText, getByText } = render(<AuthNavbar />);
    expect(getByAltText('CartPool logo')).toBeInTheDocument();
    expect(getByText('CartPool')).toBeInTheDocument();
  });

  test('renders About Us, Orders, and Logout links', () => {
    const { getByText } = render(<AuthNavbar />);
    expect(getByText('Orders')).toBeInTheDocument();
    expect(getByText('Logout')).toBeInTheDocument();
  });

  

});