import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "./../../store/cartStore";

export const CartBadge: React.FC = () => {
    const { cart } = useCartStore();

    // Если корзина пуста — не отображаем "чёлку"
    if (cart.length === 0) return null;

    // Считаем общую сумму
    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <Link to="/cart" className="cart-badge">
            <span className="cart-price">${totalPrice.toFixed(2)}</span>
        </Link>
    );
};
