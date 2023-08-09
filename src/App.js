import Footer from "./components/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import routes from "./routes";
import {Box, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import CombinedNavbar from "./components/CombinedNavbar"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
    // State variables for the cart and total price
    const [cart, setCart] = useState([]);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);
    const Theme = useTheme();
    const isMobile = useMediaQuery(Theme.breakpoints.down("sm"));

    // Define the theme
    const theme = createTheme({
        palette: {
            primary: {
                light: "#63b8ff",
                main: "#0989e3",
                dark: "#005db0",
                contrastText: "#FFF",
            },
            secondary: {
                main: "#4db6ac",
                light: "#82e9de",
                dark: "#00867d",
                contrastText: "#FFF",
            },
        },
    });

    // Add products to the cart
    const handleAddToCart = (product, quantity) => {
        const totalPrice = product.price * quantity;
        const {id , code, name, category, price, imageURL } = product;

        setCart((prevCart) => {
            const existingCartItem = prevCart.find((item) => item.code === code);

            if (existingCartItem) {
                // If the product already exists in the cart, increment the quantity
                const updatedCart = prevCart.map((item) =>
                    item.code === code ? { ...item, quantity: item.quantity + quantity } : item
                );

                setCartTotalPrice((prevTotalPrice) => prevTotalPrice + totalPrice);
                return updatedCart;
            } else {
                // If the product doesn't exist in the cart, add it as a new item
                const updatedCart = [
                    ...prevCart,
                    {id, code, name, category, price, imageURL, quantity, totalPrice },
                ];

                setCartTotalPrice((prevTotalPrice) => prevTotalPrice + totalPrice);
                return updatedCart;
            }
        });
    };

    // Delete products from the cart
    const handleDeleteFromCart = (idsToDelete) => {
        if (idsToDelete.length === 0)
        {
            return ;
        }
        setCart((prevCart) => {
            const updatedCart = prevCart.filter((product) => !idsToDelete.includes(product.id));

            // Calculate the new total amount
            const newTotalAmount = updatedCart.reduce((total, product) => {
                return total + product.price;
            }, 0);

            setCartTotalPrice(newTotalAmount);
            return updatedCart;
        });
    };

    // Map routes and deliver relevant functions/arguments by page needs
    const mapRoutes = (routes) => {
        // Filter the products based on the route path
        return routes.map((route) => {
            if (route.path === '/shop' || route.path === '/shop/dairy' || route.path === '/shop/meat&fish' || route.path === '/shop/snacks') {
                return (
                    <Route
                        key={route.key}
                        path={route.path}
                        element={<route.component handleAddToCart={handleAddToCart} />}
                    />
                );
            } else if (route.path === '/cart') {
                return (
                    <Route
                        key={route.key}
                        path={route.path}
                        element={
                            <route.component
                                cartProducts={cart}
                                handleDeleteFromCart={handleDeleteFromCart}
                                cartTotalPrice={cartTotalPrice}
                            />
                        }
                    />
                );
            } else {
                return <Route key={route.key} path={route.path} element={<route.component />} />;
            }
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box height={isMobile ? "auto":"100vh"} display="flex" flexDirection="column" sx={{ maxWidth: "100%" }}>
                <Router>
                    <CombinedNavbar itemsInCart={cart.length} />
                        <Routes>{mapRoutes(routes)}</Routes>
                    <Footer />
                </Router>
            </Box>
        </ThemeProvider>
    );
}

export default App;

