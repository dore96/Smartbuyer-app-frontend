import React, {useEffect, useState} from 'react';
import ProductCard from '../components/Product';
import {Box} from "@mui/material";
import PopupMessage from '../components/PopupMessage';
import SearchBar from "../components/SerchBar";
import Typography from "@mui/material/Typography";
import { useLocation } from 'react-router-dom';

const Shop = ({ products, handleAddToCart }) => {
    const [popupMessage, setPopupMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => {
        // Filter the products based on the route path
        const filtered =
            currentPath === "/shop"
                ? products // Display all products if the path is '/shop'
                : products.filter((product) =>
                    product.category
                        .toLowerCase()
                        .includes(currentPath.replace("/shop/", ""))
                );
        setFilteredProducts(filtered);
    }, [currentPath, products]);

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

    //show only products that correspond to the search
    const handleSearch = (searchValue) => {
        const filtered = filteredProducts.filter((product) =>
            product.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    const closePopup = () => {
        setShowPopup(false);
        setPopupMessage('');
    };

    // Group products by category
    const groupedProducts = filteredProducts.reduce((grouped, product) => {
        const { category } = product;
        if (!grouped[category]) {
            grouped[category] = [];
        }
        grouped[category].push(product);
        return grouped;
    }, {});

    const CategoryHeaderStyle = {
        fontSize: '24px',
        varient: "h3",
        fontWeight: 'bold',
        color: "white",
        textAlign:'center',
    };

    // Render grouped products
    return (
        <div>
            <SearchBar onSearch={handleSearch} products={filteredProducts} />
            <Box
                sx={{
                    flexGrow: 1,
                    backgroundColor: 'whitesmoke',
                    display: 'flex',
                    justifyContent: 'left',
                    alignItems: 'left',
                    flexDirection: 'column'
                }}
            >
                {Object.keys(groupedProducts).map(category => (
                    <div key={category} style={{ display: 'Block' }}>
                        <Typography  style={CategoryHeaderStyle}  sx={{backgroundColor: 'secondary.main'}}>
                            {category}
                        </Typography>
                        <div style={{ display: 'flex' }}>
                            {groupedProducts[category].map((product, index) => (
                                <div key={index} style={{ display: 'block' }}>
                                    <ProductCard
                                        product={product}
                                        handleAddToCart={handleAddToCartFromShop}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </Box>

            {/* Popup message */}
            {showPopup && (
                <PopupMessage message={popupMessage} duration={2000} onClose={closePopup} />
            )}
        </div>
    );

};


export default Shop;
