import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent,screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import emailjs from 'emailjs-com';
import Contact from '../components/contact/contact';

jest.mock('emailjs-com', () => ({
    init: jest.fn(),
    sendForm: jest.fn().mockImplementation(() => Promise.resolve('Success')),
  }));



describe('Contact component', () => {

    it('renders correctly', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Contact />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders contact form with required input fields and button', () => {
        const { getByPlaceholderText, getByRole } = render(<Contact />);
        expect(getByPlaceholderText('Your Name')).toBeInTheDocument();
        expect(getByPlaceholderText('Your Email')).toBeInTheDocument();
        expect(getByPlaceholderText('Your Message')).toBeInTheDocument();
        expect(getByRole('button')).toBeInTheDocument();
      });

        it('calls sendForm when form is submitted', () => {
          render(<Contact />);
          const form = document.querySelector('form');
          fireEvent.submit(form);
          expect(emailjs.sendForm).toHaveBeenCalled();
        });

  });
