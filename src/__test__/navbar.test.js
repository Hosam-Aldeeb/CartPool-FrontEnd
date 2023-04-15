import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import Navbar from '../components/navbar/navbar'



describe('Navbar component', () => {

 

    it('should render the logo and links correctly', () => {
        const { getByAltText, getByText } = render(<Navbar />);
        const logo = getByAltText('CartPool logo');
        const aboutLink = getByText('About Us');
        const loginLink = getByText('Log In');
        const signUpLink = getByText('Sign Up');
        const contactLink = getByText('Contact');
        expect(logo).toBeInTheDocument();
        expect(aboutLink).toBeInTheDocument();
        expect(loginLink).toBeInTheDocument();
        expect(signUpLink).toBeInTheDocument();
        expect(contactLink).toBeInTheDocument();
      });
    
  });
