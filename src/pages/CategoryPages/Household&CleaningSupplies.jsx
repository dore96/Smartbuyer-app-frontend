import React from "react";
import Shop from "../Shop"
const HouseholdAndCleaningSupplies = ({products,handleAddToCart }) => {
    return (
        <Shop handleAddToCart={handleAddToCart} products={ products}/>
    )
};

export default HouseholdAndCleaningSupplies;