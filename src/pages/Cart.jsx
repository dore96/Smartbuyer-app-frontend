import React from "react";
import { useEffect } from 'react';
import {Box, Typography} from "@mui/material";
import CartTable from "../components/CartTable";
import PopupMessage from "../components/PopupMessage";
import {usePopupMessage} from "../components/usePopupMessage";

const Cart = ({cartProducts,handleDeleteFromCart,cartTotalPrice}) => {
    const {show , showPopup,popupMessage,setShowPopup} = usePopupMessage();

    useEffect(() => {
        // Check for the pop-up message in localStorage
        const popupMessage = localStorage.getItem('popupMessage');
        if (popupMessage) {
            show(popupMessage,true);
            localStorage.removeItem('popupMessage');
        }
    }, [show]);


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