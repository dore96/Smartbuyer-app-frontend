import React from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from '../components/Product'; // Replace with the actual path to the ProductCard component

const Shop = ({products, handleAddToCart}) => {
    return (
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
    );
};

export default Shop;
