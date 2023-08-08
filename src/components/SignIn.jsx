import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {NavLink} from "react-router-dom";
import {useContext, useState} from "react";
import backendServerURL from '../config'
import PopupMessage from "./PopupMessage";
import TokenContext from "./TokenContext";
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupMessageType, setPopupMessageType] = useState(false); // false for error, true for success
    const { setToken, isLoggedIn } = useContext(TokenContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const options ={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Set the Content-Type header to JSON
            },
            body: JSON.stringify({
                email: data.get('email'),
                password: data.get('password')
            })
        };

        fetch(`${backendServerURL}/user/login`, options)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else if (response.status === 401) {
                    return { error: 'Invalid credentials' };
                } else {
                    return { error: 'Error' };
                }
            })
            .then((data) => {
                if (data && data.token) {
                    setToken(data.token); // Save the token to the context
                    // Store the pop-up message and login status in localStorage
                    localStorage.setItem('popupMessage', 'Login successful');
                    navigate("/cart")
                } else {
                    setPopupMessage(data.error || "Error");
                    setPopupMessageType(false);
                    setShowPopup(true);
                }
            })
            .catch((error) => {
                console.log("There has been an error", error);
                setPopupMessage("Error");
                setPopupMessageType(false);
                setShowPopup(true);
            });
    };

    return !isLoggedIn ? (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            color="secondary"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            color="secondary"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="secondary" />}
                            label="Remember me"
                        />
                        <Button
                            color="secondary"
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link  key="SignUpPage-route" component={NavLink} to="/sign-up" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                {/* Render the PopupMessage component conditionally */}
                {showPopup && (
                    <PopupMessage
                        message={popupMessage}
                        duration={2000}
                        onClose={() => setShowPopup(false)}
                        messageType={popupMessageType}
                    />
                )}
            </Container>
    ) : (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'whitesmoke',
            }}
        >
            <Typography>You are already logged in</Typography>
        </Box>);
}

