import React from "react";
import Shop from "../Shop"
const Drinks = ({products,handleAddToCart }) => {
    return (
        <Shop handleAddToCart={handleAddToCart} products={ products}/>
    )
};

export default Drinks;