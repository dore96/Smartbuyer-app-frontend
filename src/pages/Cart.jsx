import React from "react";
import {Stack, Typography} from "@mui/material";
import CartTable from "../components/CartTable";

const Cart = ({cartProducts,handleDeleteFromCart}) => {
    return (
        <CartTable cartProducts={cartProducts} handleDeleteFromCart={handleDeleteFromCart}/>
        // <Stack sx={{
        //     flexGrow: 1,
        //     backgroundColor: 'whitesmoke',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        // }}>
        //
        // </Stack>
    );
};
export default Cart;