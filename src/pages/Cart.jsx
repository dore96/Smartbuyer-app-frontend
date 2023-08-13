import React, {useContext} from "react";
import { useEffect,useState } from 'react';
import {Box, InputLabel, Typography} from "@mui/material";
import CartTable from "../components/CartTable";
import PopupMessage from "../components/PopupMessage";
import {usePopupMessage} from "../components/usePopupMessage";
import cities from "../cities.json";
import backendServerURL from "../config"
import TokenContext from "../components/TokenContext";
import { Select, MenuItem, Button } from "@mui/material";
import CartCalculationResults from "../components/CartCalculationResult";

const Cart = ({cartProducts,handleDeleteFromCart}) => {
    const {show , showPopup,popupMessage,setShowPopup} = usePopupMessage();
    const sortedCities = [...cities].sort((a, b) => a[0].localeCompare(b[0]));
    const [selectedCity, setSelectedCity] = useState("");
    const [calculatedData, setCalculatedData] = useState(null);
    const { token } = useContext(TokenContext);


    useEffect(() => {
        // Check for the pop-up message in localStorage
        const popupMessage = localStorage.getItem('popupMessage');
        if (popupMessage) {
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
        const calculatedData = await calculateCart(selectedCity);
        if (calculatedData) {
            setCalculatedData(calculatedData);
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
                    <InputLabel>Select a city</InputLabel>
                    <Select value={selectedCity} onChange={handleCityChange}>
                        <MenuItem value={selectedCity}>
                            Select a city
                        </MenuItem>
                        {sortedCities.map((city, index) => (
                            <MenuItem key={index} value={city}>
                                {city}
                            </MenuItem>
                        ))}
                    </Select>
                    <Button sx={{
                        backgroundColor: 'secondary.main', color: 'white',
                        '&:hover': {backgroundColor: 'secondary.dark',},
                        marginBottom: '16px',
                    }}
                            onClick={handleCalculateCart}>
                        Calculate Cart
                    </Button>
                    {calculatedData && (
                        <CartCalculationResults
                            calculatedData={calculatedData}
                            onClose={() => {
                                setCalculatedData(null);
                            }}
                        />
                    )}
                </>
            ) : (
                <Typography>No items in the cart.</Typography>
            )}
            {/* Render the PopupMessage component conditionally */}
            {showPopup && (
                <PopupMessage
                    message={popupMessage}
                    duration={2000}
                    onClose={() => setShowPopup(false)}
                    messageType={true}
                />
            )}
        </Box>
    );
};
export default Cart;