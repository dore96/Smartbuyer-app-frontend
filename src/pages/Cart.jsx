import React from "react";
import {Stack, Typography} from "@mui/material";
import CartTable from "../components/CartTable";

const Cart = ({cartProducts}) => {
    return (
        <CartTable cartProducts={cartProducts}/>
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