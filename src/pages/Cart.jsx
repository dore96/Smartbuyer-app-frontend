import React, {useContext} from "react";
import { useEffect,useState } from 'react';
import {Box, Grid, InputLabel, Typography} from "@mui/material";
import CartTable from "../components/CartTable";
import PopupMessage from "../components/PopupMessage";
import {usePopupMessage} from "../components/usePopupMessage";
import cities from "../cities.json";
import backendServerURL from "../config"
import TokenContext from "../components/TokenContext";
import { Select, MenuItem, Button } from "@mui/material";
import CartCalculationResults from "../components/CartCalculationResult";

const Cart = ({cartProducts,handleDeleteFromCart}) => {
    const {show , showPopup,popupMessage,popupMessageType, setShowPopup} = usePopupMessage();
    const sortedCities = [...cities].sort((a, b) => a[0].localeCompare(b[0]));
    const [selectedCity, setSelectedCity] = useState("");
    const [calculatedData, setCalculatedData] = useState(null);
    const { token } = useContext(TokenContext);


    useEffect(() => {
        // Check for the pop-up message in localStorage
        const popupMessage = localStorage.getItem('popupMessage');
        if (popupMessage != null) {
            show(popupMessage,true);
            localStorage.removeItem('popupMessage');
        }
    }, [show]);

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    async function calculateCart(city) {
        const options = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                city: city,
                data: cartProducts, // Pass your cart products here
            }),
        };

        try {
            const response = await fetch(`${backendServerURL}/cart/calculate`, options);
            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                show('Error calculating cart.', false);
            }
        } catch (error) {
            show('Error calculating cart:' + error.message, false);
            return null;
        }
    }
    const handleCalculateCart = async () => {
        if (selectedCity !== '') {
            const calculatedData = await calculateCart(selectedCity);
            if (calculatedData) {
                setCalculatedData(calculatedData);
            }
        }
        else{
            show("Need to select a city first", false);
        }
    };

    const handleSaveCart = async () => {
        try {
            const response = await saveCartToBackend(cartProducts, token);
            if ('error' in response) {
                show('Error:'+ response.error,false);
            } else {
                show('Cart data saved successfully', true);
            }
        } catch (error) {
            show('An error occurred while saving cart data:'+ error.message, false);
        }
    };

    const saveCartToBackend = async (cart, token) => {
        const url = `${backendServerURL}/cart`;
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        };

        const data = {data: cart,};

        try {
            const response = await fetch(url, {method: 'POST', headers: headers, body: JSON.stringify(data),});
            const responseData = await response.json();

            if (response.ok) {
                return responseData;
            } else {
                return { error: responseData };
            }
        } catch (error) {
            return { error: 'Failed to save cart data' };
        }
    };


    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            {cartProducts && cartProducts.length > 0 ? (
                <>
                    <CartTable cartProducts={cartProducts} handleDeleteFromCart={handleDeleteFromCart}/>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} >
                            <Button variant="contained" color="secondary" onClick={handleSaveCart} fullWidth>
                                save cart
                            </Button>
                            <Button variant="contained" color="secondary" onClick={handleCalculateCart} fullWidth sx={{ marginTop: '20px' }}>
                                Calculate Cart
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel sx={{ textAlign: 'center' }}>Select a city:</InputLabel>
                            <Select value={selectedCity} onChange={handleCityChange} fullWidth sx={{ marginBottom: '20px' }}>
                                <MenuItem value="">
                                    <em>Select a city</em>
                                </MenuItem>
                                {sortedCities.map((city, index) => (
                                    <MenuItem key={index} value={city}>
                                        {city}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                    {calculatedData && (
                        <CartCalculationResults
                            calculatedData={calculatedData}
                            onClose={() => {setCalculatedData(null);}}
                            city ={selectedCity}
                        />
                    )}
                </>
            ) : (
                <Typography>No items in the cart.</Typography>
            )}
            {/* Render the PopupMessage component conditionally */}
            {showPopup && (
                <PopupMessage message={popupMessage} duration={2000} onClose={() => setShowPopup(false)} messageType={popupMessageType}/>
            )}
        </Box>
    );
};
export default Cart;