import React from "react";
import Shop from "../Shop"
const Frozen = ({products,handleAddToCart }) => {
    return (
        <Shop handleAddToCart={handleAddToCart} products={ products}/>
    )
};

export default Frozen;