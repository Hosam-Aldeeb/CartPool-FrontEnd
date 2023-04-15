import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent,screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { registerUser, loginUser, logoutUser, createHeaders } from '../controllers/auth_controller';

describe('Authentication functions', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: { auth_token: { access: { token: 'some-token' } } } }),
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('registerUser', () => {
    it('should call fetch with the correct arguments', async () => {
      await registerUser('John', 'Doe', 'john.doe@example.com', 'password', '123 Main St', '555-555-5555');
      expect(global.fetch).toHaveBeenCalledWith('/register', expect.objectContaining({
        method: 'POST',
        headers: expect.any(Headers),
        body: JSON.stringify({
          first_name: 'John',
          last_name: 'Doe',
          email: 'john.doe@example.com',
          password: 'password',
          address: '123 Main St',
          phone_number: '555-555-5555',
        }),
      }));
    });
  });

  describe('loginUser', () => {
    it('should call fetch with the correct arguments', async () => {
      await loginUser('john.doe@example.com', 'password');
      expect(global.fetch).toHaveBeenCalledWith('/login', expect.objectContaining({
        method: 'POST',
        headers: expect.any(Headers),
        body: JSON.stringify({
          email: 'john.doe@example.com',
          password: 'password',
        }),
      }));
    });

    it('should store the token in local storage', async () => {
      await loginUser('john.doe@example.com', 'password');
      expect(localStorage.getItem('cartpool_token')).toEqual(JSON.stringify('some-token'));
    });
  });

  describe('logoutUser', () => {
    it('should remove the token and email from local storage', () => {
      localStorage.setItem('cartpool_token', 'some-token');
      localStorage.setItem('email', 'john.doe@example.com');
      logoutUser();
      expect(localStorage.getItem('cartpool_token')).toBeNull();
      expect(localStorage.getItem('email')).toBeNull();
    });
  });
});
