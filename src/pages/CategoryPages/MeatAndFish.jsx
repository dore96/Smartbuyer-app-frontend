import React from "react";
import Shop from "../Shop"
const MeatAndfish = ({products,handleAddToCart }) => {
    return (
        <Shop handleAddToCart={handleAddToCart} products={ products}/>
    )
};

export default MeatAndfish;