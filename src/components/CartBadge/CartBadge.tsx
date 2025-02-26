import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";

export const CartBadge: React.FC = () => {
    const { cart } = useCartStore();
    const [animatedTotal, setAnimatedTotal] = useState(0);

    // Вычисляем общую сумму
    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    // Анимируем изменение общей суммы
    useEffect(() => {
        const start = animatedTotal;
        const end = totalPrice;
        const duration = 500; // Длительность анимации в мс
        let startTime: number | null = null;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / duration;
            const currentValue = start + (end - start) * Math.min(progress, 1);
            setAnimatedTotal(currentValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalPrice]);

    // Если корзина пуста — не отображаем "чёлку"
    if (cart.length === 0) return null;

    return (
        <Link to="/cart" className="cart-badge">
            <span className="cart-price">${animatedTotal.toFixed(2)}</span>
        </Link>
    );
};
