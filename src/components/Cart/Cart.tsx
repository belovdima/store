import React from "react";
import { useCartStore } from "../../store/cartStore";

export const Cart: React.FC = () => {
    const {
        cart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
    } = useCartStore();

    // Подсчет общей суммы
    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="cart container">
            <h1 className="cart-title">Your Cart</h1>

            {cart.length === 0 ? (
                <p className="cart-empty">Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.img} alt={item.title} />
                            <div className="cart-info">
                                <h3>{item.title}</h3>
                                <p>
                                    ${item.price} × {item.quantity}
                                </p>

                                <div className="cart-controls">
                                    <button
                                        className="btn-quantity"
                                        onClick={() =>
                                            decreaseQuantity(item.id)
                                        }>
                                        -
                                    </button>
                                    <span className="cart-quantity">
                                        {item.quantity}
                                    </span>
                                    <button
                                        className="btn-quantity"
                                        onClick={() =>
                                            increaseQuantity(item.id)
                                        }>
                                        +
                                    </button>
                                </div>

                                <button
                                    className="btn-remove"
                                    onClick={() => removeFromCart(item.id)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h2>Total: ${totalPrice.toFixed(2)}</h2>
                        <button className="btn-clear" onClick={clearCart}>
                            Clear Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
