import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProductStore } from "../../store/productStore";
import { useCartStore } from "../../store/cartStore";

export const Shop: React.FC = () => {
    const { products } = useProductStore();
    const { addToCart } = useCartStore();
    const navigate = useNavigate();

    // Отслеживание наведённой карточки
    const [hoveredProductId, setHoveredProductId] = useState<number | null>(
        null
    );

    return (
        <div className="shop container">
            <h1 className="shop-title">Shop</h1>
            <div className="products-grid">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="product-card"
                        onClick={() => navigate(`/product/${product.id}`)}
                        onMouseEnter={() => setHoveredProductId(product.id)}
                        onMouseLeave={() => setHoveredProductId(null)}>
                        <img src={product.img} alt={product.title} />
                        <h3 className="product-title">{product.title}</h3>

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

                        {/* Показываем размеры только при наведении */}
                        {hoveredProductId === product.id && (
                            <div className="size-options">
                                {product.size.map((size) => (
                                    <button
                                        key={size}
                                        className="size-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToCart({
                                                ...product,
                                                quantity: 1,
                                                size,
                                            });
                                        }}>
                                        {size}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
