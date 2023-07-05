import React from "react";
import {Box, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import ProductCard from "../../components/Product";
import ShopNavbar from "../../components/ShopNavbar";
const Snacks = ({products,handleAddToCart }) => {
    return (
        <div>
            <ShopNavbar/>
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Grid container spacing={0.5}>
                {products.map((product, index) => (
                    <Grid item xs={12} sm={6} md={1.5} key={index}>
                        <ProductCard
                            product={product}
                            handleAddToCart ={handleAddToCart}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
            </div>
    );
};

export default Snacks;