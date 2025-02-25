import React from "react";
import { useProductStore } from "./../../store/productStore";
import { useCartStore } from "./../../store/cartStore";

export const Shop: React.FC = () => {
    const { products } = useProductStore();
    const { addToCart } = useCartStore();

    return (
        <div className="shop container">
            <h1 className="shop-title">Shop</h1>
            <div className="products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.img} alt={product.title} />
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-price">${product.price}</p>
                        <button
                            className="btn-buy"
                            onClick={() =>
                                addToCart({ ...product, quantity: 1 })
                            } // 👈 Добавляем поле quantity
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
