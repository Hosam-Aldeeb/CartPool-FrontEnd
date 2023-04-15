import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, waitFor,screen } from '@testing-library/react';
import ActiveShopper from '../components/active_shopper/active_shopper';


global.MutationObserver = class {
    constructor(callback) {}
    disconnect() {}
    observe(element, initObject) {}
  };

describe('ActiveShopper', () => {
    test('renders ActiveShopper component', () => {
      render(<ActiveShopper />);
    });
  
    test('clicking "Create Order" button should call fetch with correct parameters', async () => {
        const fetchMock = jest.fn(() => Promise.resolve({ ok: true, json: () => Promise.resolve({}) }));
        global.fetch = fetchMock;
      
        const { getByText } = render(<ActiveShopper />);
        const button = getByText('Create Order');
        fireEvent.click(button);
      
        await waitFor(() => {
          expect(fetchMock).toHaveBeenCalledTimes(1);
          expect(fetchMock).toHaveBeenCalledWith('/createOrder', {
            method: 'POST',
            headers: new Headers({
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyNjUxMUBnbWFpbC5jb20iLCJpYXQiOjE2ODAxMzk1ODUsImV4cCI6MTc0MDEzOTU4NX0.Gehn81-U01zCs31lYHcYSAkhvX8Y9NmGvSPxJnfJ0f0",
              "Content-Type": "application/json",
              "Accept": "*/*",
              "Accept-Encoding": "gzip, deflate, br"
            }),
            body: JSON.stringify({
              "active_shopper_id": 1,
              "remote_shopper_id": 2,
              "order_details": "2 peaches, 1 watermelon, 3 cans of tuna"
            }),
            redirect: 'follow',
          });
        });
      });
      
    });