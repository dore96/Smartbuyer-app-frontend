import React, { useEffect, useState } from 'react';
import ProductCard from '../components/Product';
import { Box } from '@mui/material';
import PopupMessage from '../components/PopupMessage';
import SearchBar from '../components/SerchBar';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick'; // Import the react-slick carousel component
import 'slick-carousel/slick/slick.css'; // Import the slick-carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import the slick-carousel theme CSS

const Shop = ({ products, handleAddToCart }) => {
    const [popupMessage, setPopupMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [groupedProducts, setGroupedProducts] = useState([]);
    const location = useLocation();
    const currentPath = location.pathname;

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

    const closePopup = () => {
        setShowPopup(false);
        setPopupMessage('');
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

        if (screenWidth >= 600) {
            slidesToShow = itemsInCategory >= 5 ? 5 : itemsInCategory;
        } else {
            slidesToShow = itemsInCategory >= 3 ? 3 : itemsInCategory;
        }

        // For mobile devices, if itemsInCategory is less than 3, set slidesToShow to the length
        // For non-mobile devices, if itemsInCategory is less than 5, set slidesToShow to the length
        if (screenWidth < 600 && itemsInCategory < 3) {
            slidesToShow = itemsInCategory;
        } else if (screenWidth >= 600 && itemsInCategory < 5) {
            slidesToShow = itemsInCategory;
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
                            slidesToScroll={1}
                            style={{ textAlign: 'left' }}
                        >
                            {groupedProducts[category].map((product, index) => (
                                <ProductCardWrapper key={index} product={product} />
                            ))}
                        </Slider>
                    </div>
                ))}
            </Box>

            {showPopup && <PopupMessage message={popupMessage} duration={2000} onClose={closePopup} />}
        </div>
    );
};

export default Shop;
