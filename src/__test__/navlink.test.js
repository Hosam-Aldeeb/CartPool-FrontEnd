import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import NavLink from '../components/navbar/navlink';



describe('NavLink component', () => {



    it('should render all navlinks', () => {
      const { getByText } = render(<NavLink />);
      const aboutLink = getByText('About Us');
      const loginLink = getByText('Log In');
      const signUpLink = getByText('Sign Up');
      const contactLink = getByText('Contact');
      expect(aboutLink).toBeInTheDocument();
      expect(loginLink).toBeInTheDocument();
      expect(signUpLink).toBeInTheDocument();
      expect(contactLink).toBeInTheDocument();
    });
  
    it('should call closeMobileMenu function when link is clicked on mobile', () => {
      const closeMobileMenu = jest.fn();
      const { getByText } = render(<NavLink isMobile={true} closeMobileMenu={closeMobileMenu} />);
      const aboutLink = getByText('About Us');
      fireEvent.click(aboutLink);
      expect(closeMobileMenu).toHaveBeenCalled();
    });

    it('should call closeMobileMenu function when link is clicked on mobile', () => {
        const closeMobileMenu = jest.fn();
        const { getByText } = render(<NavLink isMobile={true} closeMobileMenu={closeMobileMenu} />);
        const loginLink = getByText('Log In');
        const signUpLink = getByText('Sign Up');
        const contactLink = getByText('Contact');
        fireEvent.click(loginLink);
        fireEvent.click(signUpLink);
        fireEvent.click(contactLink);
        expect(closeMobileMenu).toHaveBeenCalledTimes(3);
      });
  });