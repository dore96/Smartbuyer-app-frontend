import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {NavLink} from "react-router-dom";
import PopupMessage from "./PopupMessage";
import { useState } from 'react';
import backendServerURL from '../config'

export default function SignUp() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupMessageType, setPopupMessageType] = useState(false); // false for error, true for success

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const options ={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Set the Content-Type header to JSON
            },
            body: JSON.stringify({
                first_name: data.get('firstName'),
                last_name: data.get('lastName'),
                email: data.get('email'),
                password: data.get('password')
            })
        };

        fetch(`${backendServerURL}/user`, options)
            .then((response) => {
                if (response.status === 200) {
                    setPopupMessage("Registration successful"); // Set success message
                    setPopupMessageType(true); // Set success message type
                    setShowPopup(true); // Show the PopupMessage
                } else if (response.status === 409) {
                    setPopupMessage("User already exists"); // Set error message
                    setPopupMessageType(false); // Set error message type
                    setShowPopup(true); // Show the PopupMessage
                } else {
                    setPopupMessage("Error"); // Set error message for other cases
                    setPopupMessageType(false); // Set error message type
                    setShowPopup(true); // Show the PopupMessage
                }
            })
            .catch((error) => {
                console.log("There has been an error", error);
                setPopupMessage("Error"); // Set error message for unexpected errors
                setPopupMessageType(false); // Set error message type
                setShowPopup(true); // Show the PopupMessage
            });
    };

    return (
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
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                color="secondary"
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                color="secondary"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                color="secondary"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                color="secondary"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        color="secondary"
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link  key="Login-route" component={NavLink} to="/Login" variant="body2">
                                Already have an account? Sign in
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
    );
}