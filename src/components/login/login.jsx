import React, { Component, Fragment } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './login.css';

function LoginSuccess({success}) {
    if (success) {
        return (
            <div>
            <Fragment>Login Success, start making </Fragment>
            <Button variant="text" href='/shopper'>orders</Button>
            </div>
        )
    }
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            login_success: false,
            error: false,
        };
    }

    handleChangeEmail = event => {
        this.setState({
            email: event.target.value,
        });
    };

    handleChangePassword = event => {
        this.setState({
            password: event.target.value,
        });
    };

    onSubmit = async event => {
        event.preventDefault();
        localStorage.setItem('email', JSON.stringify(this.state.email));
        localStorage.setItem('cartpool_token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyNjUxMUBnbWFpbC5jb20iLCJpYXQiOjE2ODAxMzk1ODUsImV4cCI6MTc0MDEzOTU4NX0.Gehn81-U01zCs31lYHcYSAkhvX8Y9NmGvSPxJnfJ0f0");
        
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "*/*");
        headers.append("Accept-Encoding", "gzip, deflate, br");

        let body = JSON.stringify({
            "email" : this.state.email,
            "password" : this.state.password
        });

        let requestOptions = {
            method: 'POST',
            headers: headers,
            body: body,
            redirect: 'follow',
        };

        fetch("http://4.204.200.163:3000/login", requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                response.json();
            })
            .then(data => {
                this.setState({ login_success: true});
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
                    '& .MuiTextField-root': { m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete='off'
            >
                <div className='contacttitle'>
                    <h1>Login!</h1>
                </div>
                <div>
                    <TextField
                        type="email"
                        label="Email"
                        value= {this.state.email}
                        onChange={this.handleChangeEmail}
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
                    <Button 
                        variant='contained'
                        onClick={this.onSubmit}>
                        Log In
                    </Button>
                </div>
                <div>
                    <LoginSuccess success={this.state.login_success} />
                </div>
                <div>
                    <Button 
                        variant="text"
                        onClick={this.handleClickForgotPassword}>
                        Forgot password?
                    </Button>
                </div>
                <div>
                    <Button
                        variant='contained'
                        href="/sign_up"
                        sx={{ backgroundColor: 'green' }}>
                            Create new account
                    </Button>
                </div>
            </Box>
            </div>
            </section>
        )
    }
}

export default Login;
