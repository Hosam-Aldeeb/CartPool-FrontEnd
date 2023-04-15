import React from 'react';
import './profile.css';
import ProfilePicture from '../../assets/lionel.jpg';
import { Button } from '@mui/material';

function Profile() {

    return (
      <div className='container'>
        <h1>User Profile</h1>
        <div class="avatar-holder">
          <img src={ProfilePicture} alt='Smart shopping'/>
        </div>
        <div className='buttons_profile'>
          <Button>Update Profile</Button>
          <Button>Help</Button>
          <Button href='/orders'>Orders</Button>
        </div>
      </div>
    )
}

export default Profile;
