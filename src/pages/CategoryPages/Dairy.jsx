import React, {useState} from "react";
import {Box} from "@mui/material";
import Grid from "@mui/material/Grid";
import ProductCard from "../../components/Product";
import PopupMessage from "../../components/PopupMessage";
import SearchBar from "../../components/SerchBar";
const Dairy = ({products,handleAddToCart}) => {
    const [popupMessage, setPopupMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState(products);

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

    //show only products that correspond to the search
    const handleSearch = (searchValue) => {
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} products={products}/>
            <Box sx={{
                flexGrow: 1,
                backgroundColor: 'whitesmoke',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Grid container spacing={0.5}>
                    {filteredProducts.map((product, index) => (
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

export default Dairy;