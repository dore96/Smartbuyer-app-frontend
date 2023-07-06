import React, {useState} from "react";
import {Box, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import ProductCard from "../../components/Product";
import ShopNavbar from "../../components/ShopNavbar";
import PopupMessage from "../../components/PopupMessage";
const Snacks = ({products,handleAddToCart }) => {
    const [popupMessage, setPopupMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleAddToCartFromShop = (product, quantity) => {
        // Update the popup state variables
        setShowPopup(true);
        setPopupMessage(`Added ${quantity} ${product.unit} of ${product.name} to the cart`);

        // Reset the popup state variables after a certain duration
        setTimeout(() => {
            setShowPopup(false);
            setPopupMessage('');
        }, 2000); // 2 seconds

        handleAddToCart(product, quantity);
    };

    const closePopup = () => {
        setShowPopup(false);
        setPopupMessage('');
    };
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
                            handleAddToCart ={handleAddToCartFromShop}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
            {/* Popup message */}
            {showPopup && (
                <PopupMessage message={popupMessage} duration={2000} onClose={closePopup} />
            )}
            </div>
    );
};

export default Snacks;