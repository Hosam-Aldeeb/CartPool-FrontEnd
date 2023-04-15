import { Button } from '@mui/material';
import React from 'react';
import './active_shopper.css';


function ActiveShopper() {
    const onSubmitCreateOrder = async event => {
        event.preventDefault();

        let headers = new Headers();
        headers.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyNjUxMUBnbWFpbC5jb20iLCJpYXQiOjE2ODAxMzk1ODUsImV4cCI6MTc0MDEzOTU4NX0.Gehn81-U01zCs31lYHcYSAkhvX8Y9NmGvSPxJnfJ0f0");
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "*/*");
        headers.append("Accept-Encoding", "gzip, deflate, br");


        let body = JSON.stringify({
            "active_shopper_id" : 1,
            "remote_shopper_id" : 2,
            "order_details" : "2 peaches, 1 watermelon, 3 cans of tuna"
        });

        let requestOptions = {
            method: 'POST',
            headers: headers,
            body: body,
            redirect: 'follow',
        };

        fetch("/createOrder", requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('There was a problem with the network request:', error);
            });
    };


    return (
      <div className='container'>
        <h1>ACTIVE SHOPPER</h1>
        <Button
            variant='contained'
            onClick={onSubmitCreateOrder}>
                Create Order
        </Button>
      </div>
    )
}

export default ActiveShopper;
