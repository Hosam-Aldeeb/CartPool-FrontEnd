import React, {useState} from 'react';
import './remote_shopper.css';
import { Button } from '@mui/material';

function RemoteShopper() {
    const[activeShopper, setActiveShopper] = useState(true);
    const[userInfo, setUserInfo] = useState(false);
    const[userItems, setUserItems] = useState([]);
    const[noItems, setNoItems] = useState(0);
    const[showForm, setShowForm] = useState(false);
    const[placedOrder, setPlacedOrder] = useState(false);
    const[toLocation, setToLocation] = useState("");
    const[time, setTime] = useState("");
    const[requestRaised, setRequestRaised] = useState(false);
    const[activeShopperUsers, setActiveShopperUsers] = useState(null);
    const [showOrderDetails, setShowOrderDetails] = useState(false);
    const [userID, setUserId] = useState(0);
    

    const onSubmitListActiveShoppers = async event => {
        event.preventDefault();

        var headers = new Headers();
        headers.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyNjUxMUBnbWFpbC5jb20iLCJpYXQiOjE2ODAxMzk1ODUsImV4cCI6MTc0MDEzOTU4NX0.Gehn81-U01zCs31lYHcYSAkhvX8Y9NmGvSPxJnfJ0f0");
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "*/*");
        headers.append("Accept-Encoding", "gzip, deflate, br");

        var requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };
  
        fetch("http://4.204.200.163:3000/listActiveShoppers", requestOptions)
            .then(response => { 
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json()
            })
            .then(result => {
                setActiveShopperUsers(result.data);
                result.data.forEach(row => {
                    console.log(row);
                    setUserInfo(true);
                });
            })
            .catch(error => console.log('Network error', error));
    }

    const onSubmitMakeActiveShoppers = async event => {
        event.preventDefault();
        let email = localStorage.getItem('email');
        email = email.replace(/^"(.*)"$/, '$1');

        var headers = new Headers();
        headers.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyNjUxMUBnbWFpbC5jb20iLCJpYXQiOjE2ODAxMzk1ODUsImV4cCI6MTc0MDEzOTU4NX0.Gehn81-U01zCs31lYHcYSAkhvX8Y9NmGvSPxJnfJ0f0");
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "*/*");
        headers.append("Accept-Encoding", "gzip, deflate, br");

        var body = JSON.stringify({
            "email" : email,
            "address" : "kitchener"
        });

        var requestOptions = {
            method: 'POST',
            headers: headers,
            body: body,
            redirect: 'follow'
        };

        fetch("http://4.204.200.163:3000/makeActiveShopper", requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(result => {
                setActiveShopper(prevState => !prevState);
                setShowForm(prevState => !prevState || activeShopper);
            })
            .catch(error => console.log('error', error));
    }

    const formShown = id => {
        setShowForm(true);
        console.log(id);
        setUserId(id);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
            const itemsArr = Array.from({length:noItems},(_,i)=>({
                id:i,
                name:'',
        }))
        setUserItems(itemsArr);
    }

    const handleInput = (event, id) => {
        const updatedUserItems = [...userItems];
        const index=updatedUserItems.findIndex((item) => item.id === id);
        updatedUserItems[index].name = event.target.value;
        setUserItems(updatedUserItems);
    }

    const placeOrder = async event => {
        setPlacedOrder(true);
        let items = "";

        userItems.forEach(item => {
          items = items.concat(", ", item.name);
        })

        event.preventDefault();

        let headers = new Headers();
        headers.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyNjUxMUBnbWFpbC5jb20iLCJpYXQiOjE2ODAxMzk1ODUsImV4cCI6MTc0MDEzOTU4NX0.Gehn81-U01zCs31lYHcYSAkhvX8Y9NmGvSPxJnfJ0f0");
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "*/*");
        headers.append("Accept-Encoding", "gzip, deflate, br");

        let body = JSON.stringify({
          "active_shopper_id" : userID,
          "remote_shopper_id" : 100,
          "order_details" : items
        });
  
        let requestOptions = {
            method: 'POST',
            headers: headers,
            body: body,
            redirect: 'follow'
        };
  
        fetch("http://4.204.200.163:3000/createOrder", requestOptions)
            .then(response => { 
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json()
            })
            .then(result => {
              console.log(result)
            })
            .catch(error => console.log('Network error', error));
    };

    const orderSuccess=()=>{
        setPlacedOrder(false);
        setUserInfo(false);
        setShowForm(false);
        setUserItems([]);
        setNoItems(0);
        setShowOrderDetails(false);
    }

    const locationConfirmation=(e)=>{
      setToLocation(e.target.value);
    }
    const timeConfirmation=(e)=>{
      setTime(e.target.value);
    }
    const handleLocation=(e)=>{
      e.preventDefault();
      setToLocation("");
      setTime('');
      if (!activeShopper){
        setRequestRaised(true);
        
      }
    }

    const orderDetails=()=>{
      setShowOrderDetails(true);
    }

    return (
        <div className='container_remote_shopper'>
            { activeShopper && !placedOrder && (
                <form onSubmit={onSubmitListActiveShoppers}>
                {userInfo ? null :
                    <button className='button1' variant='contained' type='submit'>Order Groceries</button>
                }

                { activeShopperUsers && userInfo && !showForm && !placedOrder && (
                <div className='userInfo'>
                { activeShopperUsers.map(user => (
                    <button key={user.as_id} onClick={() => formShown(user.as_id)} >
                <div >

                    <div class="ds-top"></div>
                <div class="avatar-holder">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Profile">
                    </img>
            </div>
            <div class="name">
          <p>{user.first_name} {user.last_name}</p>
           <div>
          <p>{user.address} <i class="fas fa-user-plus"></i></p>
            </div>
  
                    </div>
                    <div class="ds-info">
                        
                        <div class="ds pens">
                        <h6 >Deliveries <i class="fas fa-edit"></i></h6>
                        <p>29</p>
                        </div>
                        
                        <div class="ds projects">
                        <h6 >Ratings <i class="fas fa-project-diagram"></i></h6>
                        <p>4.5 / 5</p>
                        </div>
                        <div class="ds posts">
                        <h6 >Years <i class="fas fa-comments"></i></h6>
                        <p>1</p>
                        </div>
                    </div>
                    </div>
  
                </button>
                ))}
            </div>
            )}
            </form>
            )}
        
            {showForm && !placedOrder && (
            <div>
            {!activeShopper && (
                <form onSubmit={handleLocation}>
                <label htmlFor='destination'>Going to?</label>
                <input type='text' id='destination' value={toLocation} onChange={locationConfirmation} />
                <br />
                <label htmlFor='time'>Time:</label>
                <input type='time' id='time' value={time} onChange={timeConfirmation} />
                <br />
                <button className="button1_rs" type='submit'>Submit</button>
                <a className='viewRequests'href="/orders">View Requests</a>
                
                {requestRaised && (
                    <p> Request has been successfully raised!</p>
                )}
                
                </form>
                
                
            )}

            {activeShopper && (
            <form onSubmit={handleSubmit}>
            <label> 
            How many Items would you like to add?
            <input
            type='number'
            min='0'
            value={noItems}
            onChange={(e)=> setNoItems(e.target.value)}
            />
            </label>
            <button className="button1_rs" type='submit'> Confirm
            </button>
            </form>
            )}
            </div>
            )}
            {userItems.length>0 && !placedOrder && (
            <div>
            {userItems.map((item)=>(
            <div key={item.id}>
                <label>
                Item {item.id+1}:
                <input
                type='text'
                value={item.name}
                onChange={(e)=> handleInput(e,item.id)}
                />
                </label>
            </div>
            ))}
            <button onClick={placeOrder}> Place Order</button>
            </div>
            )}
            {placedOrder &&(
            <div>
                <p> Your Order has been placed!</p>
                <button onClick={orderSuccess}>Return</button>
                <button onClick={orderDetails}>View Your Order</button>
                </div>
            )}
            {showOrderDetails &&  (
                <div>
                <p>Order Details:</p>
                {userItems.map((item) => (
                    <p key={item.id}>Item {item.id + 1}: {item.name}</p>
                ))}
                </div>
            )}
                    {!placedOrder && activeShopper && (
                        <div className="buttonContainer">
                            <Button onClick={onSubmitMakeActiveShoppers}>
                                {activeShopper ? 'Mode: Remote Shopper': 'Mode: Active Shopper'}
                            </Button>
                            <Button  href='/orders'>Orders</Button>
                            <Button  href='/profile'>Profile</Button>
                        </div>
                    )}

                    {!placedOrder && !activeShopper && (
                        <div className="buttonContainer">
                            <Button onClick={onSubmitMakeActiveShoppers}>
                                { activeShopper ? 'Mode: Remote Shopper': 'Mode: Active Shopper'}
                            </Button>
                        </div>
                    )}
        </div>
    );
}

export default RemoteShopper;
