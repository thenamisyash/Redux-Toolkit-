import React, { createContext } from "react";
import './Cart.css';
import { ContextCart } from "./ContextCart";
import { products } from "./Products";
export const CartContext = createContext();
export const Cart = () => {
    return (
        <>
            <CartContext.Provider value={products}>
                <ContextCart />
            </CartContext.Provider>
        </>
    )
}