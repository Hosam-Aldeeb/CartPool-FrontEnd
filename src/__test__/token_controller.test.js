import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent,screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import getToken from '../controllers/token_controller';

describe('getToken', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('should return a default token if no token is found in local storage', () => {
    const token = getToken();
    expect(token).toEqual("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyNjUxMUBnbWFpbC5jb20iLCJpYXQiOjE2ODAxMzk1ODUsImV4cCI6MTc0MDEzOTU4NX0.Gehn81-U01zCs31lYHcYSAkhvX8Y9NmGvSPxJnfJ0f0");
  });

  it('should return the token from local storage if it exists', () => {
    localStorage.setItem('cartpool_token', 'test_token');
    const token = getToken();
    expect(token).toEqual('test_token');
  });
});
