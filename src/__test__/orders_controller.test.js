import React from 'react';
import ReactDOM from 'react-dom';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { createOrder } from '../controllers/orders_controller';

describe('createOrder', () => {
  beforeEach(() => {
    jest.spyOn(window, 'fetch');
  });

  afterEach(() => {
    window.fetch.mockRestore();
  });

  it('should call fetch with the correct arguments', async () => {
    const token = 'abc123';
    const active_shopper_id = 1;
    const remote_shopper_id = 2;
    const order_details = [{ item: 'apple', quantity: 3 }, { item: 'banana', quantity: 2 }];
    const expectedHeaders = new Headers ({
      'authorization': 'Bearer abc123',
      'Content-Type': 'application/json'
    });
    const expectedBody = JSON.stringify({
      "active_shopper_id" : 1,
      "remote_shopper_id" : 2,
      "order_details" : order_details
    });
    const expectedUrl = '/createOrder';
    const expectedOptions = {
      method: 'POST',
      headers: expectedHeaders,
      body: expectedBody,
      redirect: 'follow',
    };
    window.fetch.mockResolvedValueOnce({ ok: true, json: jest.fn() });
    await createOrder(token, active_shopper_id, remote_shopper_id, order_details);
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith(expectedUrl, expect.objectContaining({
      method: expectedOptions.method,
      headers: expect.any(Headers),
      body: expectedOptions.body,
      redirect: expectedOptions.redirect,
    }));
  });
});
