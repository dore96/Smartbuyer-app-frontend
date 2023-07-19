import Footer from "./components/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import routes from "./routes";
import {Box, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import CombinedNavbar from "./components/CombinedNavbar"

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

    const products = [
        {
            id: 1,
            name: 'תפוח',
            category: 'Fruits',
            unit: 'ק"ג',
            price: 1.5,
            imageURL: 'data:image/jpeg;base64,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',
        },
        {
            id: 2,
            name: 'תפוז',
            unit: 'ק"ג',
            category: 'Fruits',
            price: 2,
            imageURL: 'https://www.quanta.org/orange/orange.jpg'
        },
        {
            id: 3,
            name: 'בננה',
            unit: 'ק"ג',
            category: 'Fruits',
            price: 10,
            imageURL: 'https://m.media-amazon.com/images/I/51ebZJ+DR4L._AC_UF1000,1000_QL80_.jpg'
        },
        {
            id: 4,
            name: 'במבה',
            unit: 'יחידות',
            category: 'snacks',
            price: 1.5,
            imageURL: 'https://osemcat.signature-it.com/images/Fittings/osem-hq/Upload_Pictures/Prod_Pic/6919901/Catalog/6919901_7290000066318_L_Enlarge.jpg'
        },
        {
            id: 5,
            name: 'ביסלי',
            unit: 'יחידות',
            category: 'snacks',
            price: 2,
            imageURL: 'https://whattoeat.co.il/wp-content/uploads/2021/03/%D7%91%D7%99%D7%A1%D7%9C%D7%99-%D7%92%D7%A8%D7%99%D7%9C-%D7%90%D7%9C%D7%A8%D7%92%D7%A0%D7%99%D7%9D.jpg'
        },
        {
            id: 6,
            name: 'שוקולד פרה',
            unit: 'יחידות',
            category: 'snacks',
            price: 10,
            imageURL: 'https://www.babanicandy.co.il/wp-content/uploads/2021/12/%D7%A9%D7%95%D7%A7%D7%95%D7%9C%D7%93-%D7%A4%D7%A8%D7%94-%D7%97%D7%9C%D7%91-100-%D7%92%D7%A8%D7%9D-%D7%A2%D7%9C%D7%99%D7%AA.jpg'
        },
        {
            id: 7,
            name: 'חלב תנובה',
            unit: 'יחידות',
            category: 'dairy',
            price: 1.5,
            imageURL: 'https://www.tnuva.co.il/uploads/f_606ee43fa87cf_1617880127.jpg'
        },
        {
            id: 8,
            name: 'גבינה צהובה',
            unit: 'יחידות',
            category: 'dairy',
            price: 5.90,
            imageURL: 'https://www.tnuva.co.il/uploads/f_5eb2ca62457c8_1588775522.jpg'
        },
        {
            id: 9,
            name: 'אלפרו',
            unit: 'יחידות',
            category: 'dairy',
            price: 10,
            imageURL: 'https://images.ctfassets.net/s64jgdakkdiy/7v3Y4W8znm4lhb6XAvfZms/56c76cadcba0edbb0cea76e5c5c51306/webimage-1C63B246-4E8F-4F3F-99C35F692781F1AC.png?w=223&h=447&q=80&fit=pad'
        },
        {
            id: 10,
            name: 'אנטריקוט',
            unit: 'ק"ג',
            category: 'Meat&Fish',
            price: 2,
            imageURL: 'https://www.meatnet.co.il/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/w/e/webent.jpg'
        },
        {
            id: 11,
            name: 'בשר טחון',
            unit: 'ק"ג',
            category: 'Meat&Fish',
            price: 10,
            imageURL: 'data:image/jpeg;base64,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'
        },
        {
            id: 12,
            name: 'סלמון',
            unit: 'ק"ג',
            category: 'Meat&Fish',
            price: 80,
            imageURL: 'https://cdna.wobily.com/images/e940409a-a7e3-4b5b-8fcb-4838d64fa5d0_500.png'
        },
    ];

    // Add products to the cart
    const handleAddToCart = (product, quantity) => {
        const totalPrice = product.price * quantity;
        const { id, name, category, price, imageURL } = product;

        setCart((prevCart) => {
            const existingCartItem = prevCart.find((item) => item.id === id);

            if (existingCartItem) {
                // If the product already exists in the cart, increment the quantity
                const updatedCart = prevCart.map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity + quantity } : item
                );

                setCartTotalPrice((prevTotalPrice) => prevTotalPrice + totalPrice);
                return updatedCart;
            } else {
                // If the product doesn't exist in the cart, add it as a new item
                const updatedCart = [
                    ...prevCart,
                    { id, name, category, price, imageURL, quantity, totalPrice },
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
                        element={<route.component products={products} handleAddToCart={handleAddToCart} />}
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

