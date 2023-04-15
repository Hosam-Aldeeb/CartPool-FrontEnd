import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent,screen,waitFor } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import Login from '../components/login/login'



  describe('Login component', () => {



    it('renders the login form', () => {
      render(<Login />);
      const emailInput = screen.getByLabelText(/Email/i);
      const passwordInput = screen.getByLabelText(/Password/i);
      const submitButton = screen.getByRole('button', { name: /Log In/i });
      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
    });
  
    it('displays success message after successful login', async () => {
        // Mock the fetch function
        global.fetch = jest.fn().mockImplementation(() =>
          Promise.resolve({
            ok: true,
            json: () => Promise.resolve({}),
          })
        );
      
        render(<Login />);
        const emailInput = screen.getByLabelText(/Email/i);
        const passwordInput = screen.getByLabelText(/Password/i);
        const submitButton = screen.getByRole('button', { name: /Log In/i });
      
        // Fill out the form and submit it
        fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        fireEvent.click(submitButton);
      
        // Wait for the success message to appear
        setTimeout(() => {
          const successMessage = screen.queryByText(/Login Success/i);
          expect(successMessage).toBeInTheDocument();
      
          // Verify that the fetch function was called with the correct arguments
          expect(fetch).toHaveBeenCalledWith('http://4.204.200.163:3000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: '*/*',
              'Accept-Encoding': 'gzip, deflate, br',
            },
            body: '{"email":"test@test.com","password":"password"}',
            redirect: 'follow',
          });
        }, 3000);
      });
  });
