import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

// Styled component for the product card
const ProductCardWrapper = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    alignItems: 'center',
    borderRadius: theme.spacing(1),
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: 200, // Adjust the maximum width of the card
    margin: theme.spacing(1), // Add margin to create space between cards
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
}));

// Styled component for the quantity container
const QuantityContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
}));

// Styled component for the card content
const ProductCardContent = styled(CardContent)({
    flexGrow: 1,
    textAlign: 'center',
});

// ProductCard component
const ProductCard = ({ product, handleAddToCart }) => {
    const { name, category, price, imageURL } = product;
    const [quantity, setQuantity] = useState(0);

    const handleAddToItemQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleReduceItemFromCart = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCartFromProduct = () => {
        handleAddToCart(product, quantity);
        setQuantity(0);
    };

    return (
        <ProductCardWrapper>
            {/* Card Media */}
            <CardMedia
                component="img"
                height="150"
                image={imageURL}
                alt={name}
                sx={{ objectFit: 'cover' }}
            />

            {/* Card Content */}
            <ProductCardContent>
                {/* Product Name */}
                <Typography gutterBottom variant="h6" component="h3">
                    {name}
                </Typography>

                {/* Product Category */}
                <Typography variant="body2" color="textSecondary" component="p">
                    {category}
                </Typography>
            </ProductCardContent>

            <CardContent>
                {/* Product Price */}
                <Typography variant="h6" color="textPrimary" align="center">
                    {price.toFixed(2)} ₪
                </Typography>

                {/* Quantity Container */}
                <QuantityContainer>
                    {/* Decrease Quantity Button */}
                    <Button onClick={handleReduceItemFromCart} disabled={quantity === 0}>-</Button>
                    <span>{quantity}</span>
                    {/* Increase Quantity Button */}
                    <Button onClick={handleAddToItemQuantity}>+</Button>
                </QuantityContainer>
            </CardContent>

            {/* Add to Cart Button */}
            <Button onClick={handleAddToCartFromProduct} disabled={quantity === 0}>
                Add to cart
            </Button>
        </ProductCardWrapper>
    );
};

export default ProductCard;
