import React, { useState } from 'react';
import './orders.css';
import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material';

function Orders() {
    const [activeShopper, setActiveShopper] = useState(true);
    const [orderStatus, setOrderStatus] = useState('created');

    const onSubmitMakeActiveShoppers = () => {
      setActiveShopper(prevState => !prevState);
    }

    const handleStatusChange = (event, newStatus) => {
      setOrderStatus(newStatus);
    };

    return (
      <section className='about'>
         <div className="container about__container">
        <h1>Order Status</h1>
        
        {activeShopper && (
          <div className='button'>
                        <ToggleButtonGroup
              color="primary"
              value={orderStatus}
              exclusive
              onChange={handleStatusChange}
              aria-label="Platform"
            >
              <ToggleButton value="created">Created</ToggleButton>
              <ToggleButton value="payed">Payment Received</ToggleButton>
              <ToggleButton value="purchased">Purchased</ToggleButton>
              <ToggleButton value="completed">Completed</ToggleButton>
            </ToggleButtonGroup>
            <div className='order'>
              <p1>Items: </p1>
              <p> * 3 x Tomatoes</p>
              <p> * 1 x Takis Fuego</p>
              <p> * 5 x Limes</p>
              <p>Price: 30 CAD </p>
              <p>Emmanuel is taking care of your order</p>
              <p>Delivery Address: 203 Lester Street</p>
            <Button>Modify Order</Button>
            </div>
          </div>
        )}

        {!activeShopper && (
          <div className='order'>
            <p>No pending orders</p>
          </div>
        )}

        {}

        <Button onClick={onSubmitMakeActiveShoppers}>
                                { activeShopper ? 'Mode: Remote Shopper': 'Mode: Active Shopper'}
                            </Button>
        </div>
      </section>
    )
}

export default Orders;
