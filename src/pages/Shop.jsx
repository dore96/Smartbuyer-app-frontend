import React, {useContext, useEffect, useState} from 'react';
import ProductCard from '../components/Product';
import { Box } from '@mui/material';
import PopupMessage from '../components/PopupMessage';
import {usePopupMessage} from "../components/usePopupMessage";
import SearchBar from '../components/SerchBar';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import TokenContext from "../components/TokenContext";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import products from "../products.json"
const Shop = ({ handleAddToCart }) => {
    const {show , showPopup,popupMessage,popupMessageType,setShowPopup} = usePopupMessage();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [groupedProducts, setGroupedProducts] = useState([]);
    const location = useLocation();
    const currentPath = location.pathname;
    const { isLoggedIn } = useContext(TokenContext);

    useEffect(() => {
        // Filter products based on the route path
        const filteredByPath =
            currentPath === '/shop'
                ? products // Display all products if the path is '/shop'
                : products.filter((product) =>
                    product.category.toLowerCase().includes(currentPath.replace('/shop/', ''))
                );

        // Group products by category
        const grouped = filteredByPath.reduce((grouped, product) => {
            const { category } = product;
            if (!grouped[category]) {
                grouped[category] = [];
            }
            grouped[category].push(product);
            return grouped;
        }, {});

        setFilteredProducts(filteredByPath);
        setGroupedProducts(grouped);
    }, [currentPath]);

    const handleAddToCartFromShop = (product, quantity) => {
        if(isLoggedIn){
            // Update the popup state variables
            show(`Added ${quantity} units of ${product.name} to the cart`,true);
            handleAddToCart(product, quantity);
        }
        else{
            show("You need to log in first.",false);
        }
    };

    const handleSearch = (searchValue) => {
        const filteredByPath =
            currentPath === '/shop'
                ? products // Display all products if the path is '/shop'
                : products.filter((product) =>
                    product.category.toLowerCase().includes(currentPath.replace('/shop/', ''))
                );

        const filtered = filteredByPath.filter((product) =>
            product.name.toLowerCase().includes(searchValue.toLowerCase())
        );

        // Group the filtered products
        const grouped = filtered.reduce((grouped, product) => {
            const { category } = product;
            if (!grouped[category]) {
                grouped[category] = [];
            }
            grouped[category].push(product);
            return grouped;
        }, {});

        setFilteredProducts(filtered);
        setGroupedProducts(grouped);
    };


    const CategoryHeaderStyle = {
        fontSize: '24px',
        variant: 'h3',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    };

// Function to determine the number of slides to show based on screen width and the number of items in a category
    const getSlidesToShow = (category) => {
        const screenWidth = window.innerWidth;
        const itemsInCategory = groupedProducts[category].length;
        let slidesToShow;

        if (screenWidth >= 1200) {
            slidesToShow = itemsInCategory >= 8 ? 8 : itemsInCategory;
        } else if (screenWidth >= 992) {
            slidesToShow = itemsInCategory >= 6 ? 6 : itemsInCategory;
        } else if (screenWidth >= 768) {
            slidesToShow = itemsInCategory >= 5 ? 5 : itemsInCategory;
        } else {
            slidesToShow = itemsInCategory >= 4 ? 4 : itemsInCategory;
        }

        return slidesToShow;
    };

// ProductCard component with fixed-size container and left alignment
    const ProductCardWrapper = ({ product }) => (
        <div style={{ maxWidth: '300px', margin: '0 auto', textAlign: 'left' }}>
            <ProductCard product={product} handleAddToCart={handleAddToCartFromShop} />
        </div>
    );


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
                    flexDirection: 'column',
                }}
            >
                {Object.keys(groupedProducts).map((category) => (
                    <div key={category} style={{ display: 'block' }}>
                        <Typography style={CategoryHeaderStyle} sx={{ backgroundColor: 'secondary.main' }}>
                            {category}
                        </Typography>
                        {/* Use the Slider component to wrap the product cards */}
                        <Slider
                            dots={true}
                            infinite={true}
                            speed={500}
                            slidesToShow={getSlidesToShow(category)}
                            slidesToScroll={getSlidesToShow(category)}
                            lazyLoad="ondemand"
                            style={{ textAlign: 'left' }}
                        >
                            {groupedProducts[category].map((product, index) => (
                                <ProductCardWrapper key={index} product={product} />
                            ))}
                        </Slider>
                    </div>
                ))}
            </Box>

            {showPopup && (
                <PopupMessage
                    message={popupMessage}
                    duration={2000}
                    onClose={() => setShowPopup(false)}
                    messageType={popupMessageType}
                />
            )}
        </div>
    );
};

export default Shop;
