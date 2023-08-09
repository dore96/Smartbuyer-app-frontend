import React from "react";
import Shop from "../Shop"
const HealthCare = ({products,handleAddToCart }) => {
    return (
        <Shop handleAddToCart={handleAddToCart} products={ products}/>
    )
};

export default HealthCare;