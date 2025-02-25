import React from "react";

const products = [
    {
        id: 1,
        title: "Minimal Sneakers",
        price: "$150",
        img: "https://i1.proimagescdn.ru/images/bimages/1414/IF8577_1.jpg",
    },
    {
        id: 2,
        title: "Black Hoodie",
        price: "$90",
        img: "https://i1.proimagescdn.ru/images/bimages/1378/HDZPFVCKBK_1.webp",
    },
    {
        id: 3,
        title: "Classic T-Shirt",
        price: "$45",
        img: "https://i1.proimagescdn.ru/images/bimages/1402/T24P109002LVNDR_1.jpg",
    },
    {
        id: 4,
        title: "Oversized Coat",
        price: "$250",
        img: "https://i1.proimagescdn.ru/images/bimages/1415/DK0A4XK4CH01_1.jpg",
    },
];

export const App: React.FC = () => {
    return (
        <div>
            {/* Навигация */}
            <nav className="navbar">
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>

            {/* Заголовок */}
            <div className="container section text-center">
                <h1 className="h1">Discover Our Collection</h1>
            </div>

            {/* Сетка товаров */}
            <div className="container products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.img} alt={product.title} />
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-price">{product.price}</p>
                        <button className="btn btn-buy">Add to Cart</button>
                    </div>
                ))}
            </div>

            {/* Футер */}
            <footer className="footer">
                <p>© 2025 Minimalist Store. All rights reserved.</p>
            </footer>
        </div>
    );
};
