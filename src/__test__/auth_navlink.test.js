import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import AuthNavLink from '../components/auth_navbar/auth_navlink';


// describe('AuthNavLink component', () => {

//     it('renders correctly', () => {
//         const div = document.createElement('div');
//         ReactDOM.render(<AuthNavLink />, div);
//         ReactDOM.unmountComponentAtNode(div);
//     });
    
//     it('should call closeMobileMenu function when link is clicked on mobile', () => {
//       const closeMobileMenu = jest.fn();
//       const { getByText } = render(<AuthNavLink isMobile={true} closeMobileMenu={closeMobileMenu} />);
//       const aboutLink = getByText('About Us');
//       fireEvent.click(aboutLink);
//       expect(closeMobileMenu).toHaveBeenCalled();
//     });

//   });

describe('AuthNavLink component', () => {
  it('should render a button', () => {
    render(<AuthNavLink />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should call the closeMobileMenu prop when link is clicked on mobile', () => {
    const closeMobileMenu = jest.fn();
    render(<AuthNavLink isMobile={true} closeMobileMenu={closeMobileMenu} />);
    const links = screen.getAllByRole('link');
    fireEvent.click(links[0]);
    expect(closeMobileMenu).toHaveBeenCalledTimes(1);
  });

  it('should call the logoutUser function when button is clicked', () => {
    const logoutUser = jest.spyOn(require('../controllers/auth_controller'), 'logoutUser');
    render(<AuthNavLink />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(logoutUser).toHaveBeenCalledTimes(1);
  });
});