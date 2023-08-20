import React from "react";
import { Box, Typography, Container } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const About = () => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                backgroundColor: '#f4f4f4',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '80vh',
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
                    <InfoOutlinedIcon sx={{ fontSize: 48, color: '#009688' }} />
                    <Typography variant="h4" sx={{ marginBottom: '20px', color: '#009688' }}>
                        About Smart Buyer
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '30px' }}>
                        Welcome to Smart Buyer, your ultimate shopping companion. Our mission is to
                        simplify your grocery shopping experience while helping you save both time and
                        money. With Smart Buyer, you can effortlessly create your shopping cart and
                        find the best deals in your city. Our smart algorithm compares prices from
                        multiple stores, ensuring that you get the most value for your purchases.
                    </Typography>
                    <Typography variant="body1">
                        Whether you're a busy professional, a parent, or simply looking for a more
                        convenient way to shop, Smart Buyer Application is here for you. Say goodbye to the hassle
                        of visiting multiple stores or spending hours comparing prices. Join us on this
                        journey to smarter, more efficient grocery shopping. Happy shopping with Smart Buyer!
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default About;
