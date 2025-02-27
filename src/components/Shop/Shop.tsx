import React from "react";
import { useNavigate } from "react-router-dom";
import { useProductStore } from "../../store/productStore";
import { useCartStore } from "../../store/cartStore";

export const Shop: React.FC = () => {
    const { products } = useProductStore();
    const { addToCart } = useCartStore();
    const navigate = useNavigate();

    // Переход на страницу товара
    const handleCardClick = (e: React.MouseEvent, productId: number) => {
        if ((e.target as HTMLElement).closest(".btn-buy")) return;
        navigate(`/product/${productId}`);
    };

    return (
        <div className="shop container">
            <h1 className="shop-title">Shop</h1>
            <div className="products-grid">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="product-card"
                        onClick={(e) => handleCardClick(e, product.id)}>
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

                        <button
                            className="btn-buy"
                            onClick={(e) => {
                                e.stopPropagation();
                                addToCart({ ...product, quantity: 1 });
                            }}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
