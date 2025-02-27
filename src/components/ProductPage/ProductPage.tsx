import React from "react";
import { useParams } from "react-router-dom";
import { useProductStore } from "../../store/productStore";
import { useCartStore } from "../../store/cartStore";
import styles from "./ProductPage.module.css"; // Импортируем стили

export const ProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Получаем id из URL
    const { products } = useProductStore();
    const { addToCart } = useCartStore();

    // Находим товар по id
    const product = products.find((p) => p.id === Number(id));

    // Если товара нет — показываем сообщение
    if (!product) {
        return <h2 style={{ textAlign: "center" }}>Товар не найден 😢</h2>;
    }

    return (
        <div className={styles.productPage}>
            <img
                className={styles.productImg}
                src={product.img}
                alt={product.title}
            />
            <div className={styles.productDetails}>
                <h1 className={styles.productTitle}>{product.title}</h1>

                {/* Цена */}
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

                {/* Кнопка "Добавить в корзину" */}
                <button
                    className={styles.btnBuy}
                    onClick={() => addToCart({ ...product, quantity: 1 })}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};
