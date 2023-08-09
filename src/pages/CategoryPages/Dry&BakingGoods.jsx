import React from "react";
import Shop from "../Shop"
const DryAndBakingGoods = ({products,handleAddToCart }) => {
    return (
        <Shop handleAddToCart={handleAddToCart} products={ products}/>
    )
};

export default DryAndBakingGoods;