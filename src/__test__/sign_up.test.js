import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent,screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import SignUp from '../components/sign_up/sign_up'


  describe('SignUp component', () => {



    it('should render all the input fields and button', () => {
      const { getByLabelText, getByText } = render(<SignUp />);
      expect(getByLabelText(/First Name/i)).toBeInTheDocument();
      expect(getByLabelText(/Last Name/i)).toBeInTheDocument();
      expect(getByLabelText(/Email/i)).toBeInTheDocument();
      expect(getByLabelText(/Phone Number/i)).toBeInTheDocument();
      expect(getByText(/Sign Up/i)).toBeInTheDocument();
    });
  
    it('should update the state when user inputs text', () => {
      const { getByLabelText } = render(<SignUp />);
      const input = getByLabelText(/First Name/i);
      fireEvent.change(input, { target: { value: 'John' } });
      expect(input).toHaveValue('John');
    });
  
    it('should submit the form when the Sign Up button is clicked', () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(),
        })
      );
  
      const { getByLabelText, getByText } = render(<SignUp />);
      fireEvent.change(getByLabelText(/First Name/i), { target: { value: 'John' } });
      fireEvent.change(getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
      fireEvent.change(getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });
      fireEvent.click(getByText(/Sign Up/i));
  
      expect(global.fetch).toHaveBeenCalledWith('http://4.204.200.163:3000/register', {
  method: 'POST',
  headers: new Headers({
    'Content-Type': 'application/json',
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br'
  }),
  body: JSON.stringify({
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    password: '',
    address: '',
    phone_number: ''
  }),
        redirect: 'follow',
      });
    });
  });