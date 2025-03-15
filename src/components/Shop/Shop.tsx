import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProductStore } from "../../store/productStore";
import { useCartStore } from "../../store/cartStore";

export const Shop: React.FC = () => {
    const { products } = useProductStore();
    const { addToCart } = useCartStore();
    const navigate = useNavigate();

    const [hoveredProductId, setHoveredProductId] = useState<number | null>(
        null
    );

    // Фильтры и сортировка
    const [sortOption, setSortOption] = useState<string>("default");
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [selectedColor, setSelectedColor] = useState<string>("");
    const [selectedSize, setSelectedSize] = useState<string>("");
    const [selectedType, setSelectedType] = useState<string>("all");

    // Уникальные параметры для фильтрации
    const uniqueColors = [...new Set(products.map((p) => p.color))];
    const uniqueSizes = [...new Set(products.flatMap((p) => p.size))].sort(
        (a, b) => Number(a) - Number(b)
    );

    // Фильтрация товаров
    const filteredProducts = products.filter((product) => {
        return (
            (selectedCategory === "all" ||
                product.category === selectedCategory) &&
            (selectedColor === "" || product.color === selectedColor) &&
            (selectedSize === "" || product.size.includes(selectedSize)) &&
            (selectedType === "all" || product.type === selectedType)
        );
    });

    // Сортировка товаров
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortOption) {
            case "priceLowHigh":
                return (
                    (a.discountPrice ?? a.price) - (b.discountPrice ?? b.price)
                );
            case "priceHighLow":
                return (
                    (b.discountPrice ?? b.price) - (a.discountPrice ?? a.price)
                );
            case "alphaAZ":
                return a.title.localeCompare(b.title);
            case "alphaZA":
                return b.title.localeCompare(a.title);
            default:
                return 0;
        }
    });

    return (
        <div className="shop container">
            <h1 className="shop-title">Shop</h1>

            {/* Панель фильтров */}
            <div className="filters">
                <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    value={selectedCategory}>
                    <option value="all">All Categories</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                </select>

                <select
                    onChange={(e) => setSelectedType(e.target.value)}
                    value={selectedType}>
                    <option value="all">All Types</option>
                    <option value="shoes">Shoes</option>
                    <option value="clothes">Clothes</option>
                </select>

                <select
                    onChange={(e) => setSelectedColor(e.target.value)}
                    value={selectedColor}>
                    <option value="">All Colors</option>
                    {uniqueColors.map((color) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </select>

                <select
                    onChange={(e) => setSelectedSize(e.target.value)}
                    value={selectedSize}>
                    <option value="">All Sizes</option>
                    {uniqueSizes.map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>

                <select
                    onChange={(e) => setSortOption(e.target.value)}
                    value={sortOption}>
                    <option value="default">Sort by</option>
                    <option value="priceLowHigh">Price: Low to High</option>
                    <option value="priceHighLow">Price: High to Low</option>
                    <option value="alphaAZ">Alphabet: A-Z</option>
                    <option value="alphaZA">Alphabet: Z-A</option>
                </select>
            </div>

            <div className="products-grid">
                {sortedProducts.map((product) => (
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
