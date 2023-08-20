import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Home = () => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                backgroundColor: '#f0f0f0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Container maxWidth="md">
                <Box
                    sx={{
                        backgroundColor: 'white',
                        padding: '40px',
                        borderRadius: '8px',
                        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h3" sx={{ marginBottom: '20px', color: '#009688' }}>
                        Welcome to Smart Buyer!
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '30px' }}>
                        Discover a smarter way to shop for groceries with Smart Buyer. Our platform
                        helps you find the best deals on your favorite products across multiple stores
                        in your city. Say goodbye to time-consuming price comparisons and hello to
                        efficient and savvy shopping.
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<ShoppingCartIcon />}
                        href="/shop"
                    >
                        Start Shopping
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Home;
