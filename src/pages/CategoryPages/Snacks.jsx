import React from "react";
import Shop from "../Shop"
const Snacks = ({products,handleAddToCart }) => {
    return (
        <Shop handleAddToCart={handleAddToCart} products={products}/>
    )
};

export default Snacks;