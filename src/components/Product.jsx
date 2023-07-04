import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ProductCardWrapper = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    borderRadius: theme.spacing(1),
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: 200, // Adjust the maximum width of the card
    margin: theme.spacing(1), // Add margin to create space between cards
}));

const ProductCardContent = styled(CardContent)({
    flexGrow: 1,
});

const ProductCard = ({ name, category, price, imageURL }) => {
    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => {
        setQuantity(quantity + 1);
    };

    const handleRemoveFromCart = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <ProductCardWrapper>
            <CardMedia component="img" height="150" image={imageURL} alt={name} sx={{ objectFit: 'cover' }} />
            <ProductCardContent>
                <Typography gutterBottom variant="h6" component="h3">
                    {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Category: {category}
                </Typography>
            </ProductCardContent>
            <CardContent>
                <Typography variant="h6" color="textPrimary">
                    ${price}
                </Typography>
                <div>
                    <Button onClick={handleRemoveFromCart} disabled={quantity === 0}>
                        -
                    </Button>
                    <span>{quantity}</span>
                    <Button onClick={handleAddToCart}>+</Button>
                </div>
            </CardContent>
        </ProductCardWrapper>
    );
};

export default ProductCard;

