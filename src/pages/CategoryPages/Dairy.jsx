import React from "react";
import Shop from "../Shop"
const Dairy = ({products,handleAddToCart }) => {
    return (
        <Shop handleAddToCart={handleAddToCart} products={ products}/>
    )
};

export default Dairy;