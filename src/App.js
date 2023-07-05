import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  routes  from "./routes";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import {useState, useEffect} from "react";

function App() {
    const [cart, setCart] = useState([]);

    // define theme
    const theme = createTheme({
    palette: {
      primary: {
        light: "#63b8ff",
        main: "#0989e3",
        dark: "#005db0",
        contrastText: "#000",
      },
      secondary: {
        main: "#4db6ac",
        light: "#82e9de",
        dark: "#00867d",
        contrastText: "#000",
      },
    },
  });

    const products = [
        {
            id: 1,
            name: 'Apple',
            category: 'Fruits',
            price: 1.5,
            imageURL: 'data:image/jpeg;base64,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',
        },
        {
            id: 2,
            name: 'Orange',
            category: 'Fruits',
            price: 2,
            imageURL: 'https://www.quanta.org/orange/orange.jpg'
        },
        {
            id: 3,
            name: 'Banana',
            category: 'Fruits',
            price: 10,
            imageURL: 'https://m.media-amazon.com/images/I/51ebZJ+DR4L._AC_UF1000,1000_QL80_.jpg'
        },
    ];

    const handleAddToCart = (product, quantity) => {
        const totalPrice = product.price * quantity
        const {id,name, category, price, imageURL} = product;
        setCart([...cart, {id, name, category, price, imageURL, quantity, totalPrice}]);
    };



    // useEffect(() => {
    //     for (const mapElement of cart) {
    //         console.log(mapElement);
    //     }
    // }, [cart]);

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box height="100vh" display="flex" flexDirection="column">
            <Router>
                <Navbar />
                <Routes>
                    {routes.map((route) => {
                        if (route.path === '/shop') {
                            return (
                                <Route
                                    key={route.key}
                                    path={route.path}
                                    element={<route.component products={products} handleAddToCart={handleAddToCart} />}
                                />
                            );
                        }
                        else if (route.path === '/cart') {
                            return (
                                <Route
                                    key={route.key}
                                    path={route.path}
                                    element={<route.component cartProducts={cart} />}
                                />
                            );
                        } else {
                            return (
                                <Route
                                    key={route.key}
                                    path={route.path}
                                    element={<route.component />}
                                />
                            );
                        }
                    })}

                </Routes>
                <Footer />
            </Router>
        </Box>
      </ThemeProvider>
  );
}

export default App;
