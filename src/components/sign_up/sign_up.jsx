import React, { Component, Fragment } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './sign_up.css';

function SignUpSuccess({success}) {
    if (success) {
        return (
            <> 
            <Fragment>Sign Up Successful!</Fragment>
            <Button href="/login"> Click here to login! </Button>
            </>
            
        )
    }
}

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirm: '',
            address: '',
            phone_number: '',
            registered: false,
            success: false,
        };
    }

    handleChangeFirstName = event => {
        this.setState({
            first_name: event.target.value,
        });
    };

    handleChangeLastName = event => {
        this.setState({
            last_name: event.target.value,
        });
    };

    handleChangeEmail = event => {
        this.setState({
            email: event.target.value,
        })
    };

    handleChangePhoneNumber = event => {
        this.setState({
            phone_number: event.target.value,
        })
    };

    handleChangePassword = event => {
        this.setState({
            password: event.target.value,
        })
    };

    handleChangePasswordConfirm = event => {
        this.setState({
            password_confirm: event.target.value,
        })
    };

    onSubmit = async event => {
        event.preventDefault();
        
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "*/*");
        headers.append("Accept-Encoding", "gzip, deflate, br");

        var body = JSON.stringify({
            "first_name" : this.state.first_name,
            "last_name" : this.state.last_name,
            "email" : this.state.email,
            "password" : this.state.password,
            "address" : this.state.address,
            "phone_number" : this.state.phone_number
        });

        var requestOptions = {
            method: 'POST',
            headers: headers,
            body: body,
            redirect: 'follow',
        };

        fetch("http://4.204.200.163:3000/register", requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error when trying to register');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                this.setState({ success: true});
            })
            .catch(error => {
                this.setState({ error : true });
                console.error('There was a problem with the network request', error);
            });
    }

    render() {
        return (
            <section id='contact'>
            <div className='container contact__container'>
            <Box
                component='form'
                sx={{
                    paddingTop: '5rem',
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete='off'
            >
                <div className='contacttitle'>
                    <h1>Register!</h1>
                </div>
                <div>
                    <TextField
                        type="text"
                        label='First Name'
                        value={this.state.first_name}
                        onChange={this.handleChangeFirstName}
                    />
                </div>
                <div>
                    <TextField
                        type="text"
                        label="Last Name"
                        value={this.state.last_name}
                        onChange={this.handleChangeLastName}
                    />
                </div>
                <div>
                    <TextField
                        type="email"
                        label="Email"
                        value={this.state.email}
                        onChange={this.handleChangeEmail}
                    />
                </div>
                <div>
                    <TextField
                        type="phone"
                        label="Phone Number"
                        value={this.state.phone_number}
                        onChange={this.handleChangePhoneNumber}
                    />
                </div>
                <div>
                    <TextField
                        type="password"
                        label="Password"
                        value={this.state.password}
                        onChange={this.handleChangePassword}
                    />
                </div>
                <div>
                    <TextField
                        type="password"
                        label="Confirm Password"
                        value={this.state.password_confirm}
                        onChange={this.handleChangePasswordConfirm}
                    />
                </div>
                <div>
                    <Button 
                        variant='contained'
                        onClick={this.onSubmit}>
                        Sign Up
                    </Button>
                </div>
                <div>
                    <SignUpSuccess success={this.state.success} />
                </div>
                <div>
                    <Fragment>Already have an account?</Fragment>
                    <Button variant="text" href='/login'>Log In</Button>
                </div>
            </Box>
            </div>
            </section>
        )
    }
}

export default SignUp;
