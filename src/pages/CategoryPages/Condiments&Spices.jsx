import React from "react";
import Shop from "../Shop"

const CondimentsAndSpices = ({products,handleAddToCart }) => {
    return (
        <Shop handleAddToCart={handleAddToCart} products={ products}/>
    )
};

export default CondimentsAndSpices;