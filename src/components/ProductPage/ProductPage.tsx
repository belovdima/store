import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductStore } from "../../store/productStore";
import { useCartStore } from "../../store/cartStore";
import styles from "./ProductPage.module.css";

export const ProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { products } = useProductStore();
    const { addToCart } = useCartStore();
    const navigate = useNavigate();

    const product = products.find((p) => p.id === Number(id));
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    if (!product) {
        return <h2 className={styles.notFound}>Product not found 😢</h2>;
    }

    return (
        <div className={styles.productPage}>
            {/* Стрелка "назад" */}
            <div className={styles.backArrow} onClick={() => navigate(-1)}>
                ← Back
            </div>

            <img
                className={styles.productImg}
                src={product.img}
                alt={product.title}
            />

            <div className={styles.productDetails}>
                <h1 className={styles.productTitle}>{product.title}</h1>

                <p className={styles.productColor}>
                    Color: <span>{product.color}</span>
                </p>

                <p className={styles.productPrice}>
                    {product.discountPrice ? (
                        <>
                            <span className={styles.oldPrice}>
                                ${product.price}
                            </span>
                            <span className={styles.discountPrice}>
                                ${product.discountPrice}
                            </span>
                        </>
                    ) : (
                        <span>${product.price}</span>
                    )}
                </p>

                {/* Size Selection */}
                <div className={styles.sizeSelector}>
                    <p>Select size:</p>
                    <div className={styles.sizes}>
                        {product.size.map((size) => (
                            <button
                                key={size}
                                className={`${styles.sizeButton} ${
                                    selectedSize === size ? styles.selected : ""
                                }`}
                                onClick={() => setSelectedSize(size)}>
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Add to Cart Button */}
                <button
                    className={styles.btnBuy}
                    onClick={() =>
                        selectedSize &&
                        addToCart({
                            id: product.id,
                            title: product.title,
                            price: product.discountPrice ?? product.price,
                            img: product.img,
                            quantity: 1,
                            size: selectedSize,
                        })
                    }
                    disabled={!selectedSize}>
                    {selectedSize ? "Add to Cart" : "Select size"}
                </button>
            </div>
        </div>
    );
};
