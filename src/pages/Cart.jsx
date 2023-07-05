import React from "react";
import {Box, Stack, Typography} from "@mui/material";
import CartTable from "../components/CartTable";

const Cart = ({cartProducts,handleDeleteFromCart}) => {
    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <CartTable cartProducts={cartProducts} handleDeleteFromCart={handleDeleteFromCart}/>
        </Box>
    );
};
export default Cart;