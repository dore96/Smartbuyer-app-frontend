import Footer from "./components/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import routes from "./routes";
import {Box, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React, {useContext, useEffect, useState} from "react";
import { useTheme } from "@mui/material/styles";
import CombinedNavbar from "./components/CombinedNavbar"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import backendServerURL from "./config";
import TokenContext from "./components/TokenContext";

function App() {
    // State variables for the cart and total price
    const [cart, setCart] = useState([]);
    const Theme = useTheme();
    const isMobile = useMediaQuery(Theme.breakpoints.down("sm"));
    const { token, isLoggedIn } = useContext(TokenContext);

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

    // Fetch cart data when the component mounts and the user is logged in
    useEffect(() => {
        const fetchCartData = async () => {
            const options = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`, // Replace with actual token
                },
            };

            try {
                const response = await fetch(`${backendServerURL}/cart`, options);
                if (response.ok) {
                    const data = await response.json();
                    setCart(data.cart_items);
                }
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        };

        // Call the fetchCartData function only if the user is logged in
        if (isLoggedIn) {
            fetchCartData();
        }
    }, [isLoggedIn, token]);

    // Add products to the cart
    const handleAddToCart = (product, quantity) => {
        const totalPrice = product.price * quantity;
        const {id , code, name, category, price, imageURL } = product;

        setCart((prevCart) => {
            const existingCartItem = prevCart.find((item) => item.code === code);
            if (existingCartItem) {
                // If the product already exists in the cart, increment the quantity
                return prevCart.map((item) =>
                    item.code === code ? { ...item, quantity: item.quantity + quantity } : item
                );

            }
            else {
                // If the product doesn't exist in the cart, add it as a new item
                return [
                    ...prevCart,
                    {id, code, name, category, price, imageURL, quantity, totalPrice },
                ];
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
            return  prevCart.filter((product) => !idsToDelete.includes(product.id));
        });
    };

    // Map routes and deliver relevant functions/arguments by page needs
    const mapRoutes = (routes) => {
        // Filter the products based on the route path
        return routes.map((route) => {
            if (route.path.startsWith('/shop')) {
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

