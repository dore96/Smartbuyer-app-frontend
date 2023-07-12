import React from "react";
import {Box, Typography} from "@mui/material";
import CartTable from "../components/CartTable";

const Cart = ({cartProducts,handleDeleteFromCart,cartTotalPrice}) => {
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
        </Box>
    );
};
export default Cart;