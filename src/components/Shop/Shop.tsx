import React from "react";
import { useProductStore } from "../../store/productStore";
import { useCartStore } from "../../store/cartStore";

export const Shop: React.FC = () => {
    const { products } = useProductStore();
    const { addToCart } = useCartStore();

    return (
        <div className="shop container">
            <h1 className="shop-title">Shop</h1>
            <div className="products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        {/* Значок "SALE", если есть скидка */}
                        {product.discountPrice && (
                            <div className="sale-badge">SALE</div>
                        )}

                        <img src={product.img} alt={product.title} />
                        <h3 className="product-title">{product.title}</h3>

                        {/* Цена: если есть скидка - показываем старую цену */}
                        <p className="product-price">
                            {product.discountPrice ? (
                                <>
                                    <span className="old-price">
                                        ${product.price}
                                    </span>
                                    <span className="discount-price">
                                        ${product.discountPrice}
                                    </span>
                                </>
                            ) : (
                                <span>${product.price}</span>
                            )}
                        </p>

                        <button
                            className="btn-buy"
                            onClick={() =>
                                addToCart({ ...product, quantity: 1 })
                            }>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
