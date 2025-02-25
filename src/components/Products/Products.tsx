import React from "react";

const products = [
    {
        id: 1,
        title: "Minimal Sneakers",
        price: "$150",
        sale: false,
        img: "https://i1.proimagescdn.ru/images/bimages/1414/IF8577_1.jpg",
    },
    {
        id: 2,
        title: "Black Hoodie",
        price: "$90",
        oldPrice: "$120",
        sale: true,
        img: "https://i1.proimagescdn.ru/images/bimages/1378/HDZPFVCKBK_1.webp",
    },
    {
        id: 3,
        title: "Classic T-Shirt",
        price: "$45",
        sale: false,
        img: "https://i1.proimagescdn.ru/images/bimages/1402/T24P109002LVNDR_1.jpg",
    },
    {
        id: 4,
        title: "Oversized Coat",
        price: "$250",
        oldPrice: "$300",
        sale: true,
        img: "https://i1.proimagescdn.ru/images/bimages/1415/DK0A4XK4CH01_1.jpg",
    },
];

export const Products: React.FC = () => {
    return (
        <>
            {/* Заголовок */}
            <div className="container section text-center">
                <h1 className="h1">Discover Our Collection</h1>
            </div>

            {/* Сетка товаров */}
            <div className="container products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        {product.sale && (
                            <span className="sale-badge">Sale</span>
                        )}
                        <img src={product.img} alt={product.title} />
                        <div className="product-info">
                            <h3 className="product-title">{product.title}</h3>
                            <p className="product-price">
                                {product.sale ? (
                                    <>
                                        <span>{product.price}</span>
                                        <span className="old-price">
                                            {product.oldPrice}
                                        </span>
                                    </>
                                ) : (
                                    <span>{product.price}</span>
                                )}
                            </p>
                        </div>
                        <button className="btn-buy">Add to Cart</button>
                    </div>
                ))}
            </div>
        </>
    );
};
