import React, { useState} from "react";
import { useEffect } from 'react';
import {Box, Typography} from "@mui/material";
import CartTable from "../components/CartTable";
import PopupMessage from "../components/PopupMessage";

const Cart = ({cartProducts,handleDeleteFromCart,cartTotalPrice}) => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    useEffect(() => {
        // Check for the pop-up message in localStorage
        const popupMessage = localStorage.getItem('popupMessage');
        if (popupMessage) {
            setPopupMessage(popupMessage);
            setShowPopup(true);
            localStorage.removeItem('popupMessage');
        }
    }, []);


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
                    <Typography sx={{ textAlign: 'right' }}>Cart Price: {cartTotalPrice.toFixed(2)} ₪</Typography>
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