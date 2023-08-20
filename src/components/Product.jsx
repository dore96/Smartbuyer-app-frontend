    import React, { useState} from 'react';
    import Card from '@mui/material/Card';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import Typography from '@mui/material/Typography';
    import { styled } from '@mui/material/styles';
    import Button from '@mui/material/Button';
    import Box from '@mui/material/Box';
    import Tooltip from '@mui/material/Tooltip';


    // Styled component for the quantity container
    const QuantityContainer = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // Center the buttons horizontally
        margin: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center', // Center the buttons vertically on mobile
        },
    }));

    // Styled component for the card content
    const ProductCardContent = styled(CardContent)({
        flexGrow: 1,
        textAlign: 'center',
    });

    // ProductCard component
    const ProductCard = ({ product, handleAddToCart }) => {
        const { name, category, image_path } = product;
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

        // Suppress the specific warning message
        console.error = (message) => {
            if (message.startsWith("Warning: Failed %s type: %s%s")) {
                return;
            }
            throw new Error(message);
        };

        return (
            <Tooltip title={name} placement="top"> {/* Wrap Card with Tooltip */}
                <Card sx={{ margin: '2%', textAlign: 'center' ,objectFit: 'cover'}}>
                    {/* Card Media */}
                    <CardMedia
                        component="img"
                        height="120"
                        width="100%"
                        src={process.env.PUBLIC_URL + "/" + encodeURIComponent(image_path)}
                        alt={name}
                        sx={{ objectFit: 'contain' }}
                    />
                        {/* Card Content */}
                        <ProductCardContent style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: 'calc(100% - 120px)', // Calculate remaining height after subtracting CardMedia height
                        }}>
                            {/* Product Name */}
                                <Typography gutterBottom variant="body1" component="h3" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {name}
                                </Typography>
                            {/* Product Category */}
                            <Typography variant="body2" color="textSecondary" component="p">
                                {category}
                            </Typography>
                        </ProductCardContent>


                    <CardContent>
                        {/* Quantity Container */}
                        <QuantityContainer>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                {/* Decrease Quantity Button */}
                                <Button onClick={handleReduceItemFromCart} disabled={quantity === 0}>
                                    -
                                </Button>
                                <span style={{ margin: '0 8px' }}>{quantity}</span>
                                {/* Increase Quantity Button */}
                                <Button onClick={handleAddToItemQuantity}>+</Button>
                            </Box>
                        </QuantityContainer>
                    </CardContent>

                    {/* Add to Cart Button */}
                    <Button onClick={handleAddToCartFromProduct} disabled={quantity === 0}>
                        Add to cart
                    </Button>
                </Card>
            </Tooltip>
        );
    };

    export default ProductCard;
