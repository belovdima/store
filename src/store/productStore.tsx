import { create } from "zustand";

interface Product {
    id: number;
    title: string;
    price: number;
    discountPrice?: number;
    img: string;
    category: "men" | "women" | "all";
    type: "shoes" | "clothes";
    color: string;
    size: string[];
}

interface ProductStore {
    products: Product[];
}

export const useProductStore = create<ProductStore>(() => ({
    products: [
        {
            id: 1,
            title: "Elite Active",
            price: 200,
            img: "https://img.brandshop.ru/cache/products/7/749sma0002-08c-0_1104x1104.jpg",
            category: "men",
            type: "shoes",
            color: "white",
            size: ["40", "41", "42", "43", "44"],
        },
        {
            id: 2,
            title: "L003 Active Runway",
            price: 250,
            img: "https://img.brandshop.ru/cache/products/7/749sma0012-08c-0_1104x1104.jpg",
            category: "men",
            type: "shoes",
            color: "grey",
            size: ["40", "42", "43", "44"],
            discountPrice: 200,
        },
        {
            id: 3,
            title: "Ozmillen",
            price: 100,
            img: "https://img.brandshop.ru/cache/products/i/if9597-0_1104x1104.jpg",
            category: "men",
            type: "shoes",
            color: "white",
            size: ["40", "41", "42", "43", "44"],
        },
        {
            id: 4,
            title: "Takumi Sen 10",
            price: 350,
            img: "https://img.brandshop.ru/cache/products/i/if1972-0_1104x1104.jpg",
            category: "men",
            type: "shoes",
            color: "white",
            size: ["40", "41", "42"],
        },
        {
            id: 5,
            title: "Nova IIInfinity 001",
            price: 200,
            img: "https://img.brandshop.ru/cache/products/i/ih2813-0_1104x1104.jpg",
            category: "men",
            type: "shoes",
            color: "black",
            size: ["40", "41", "42", "43", "44"],
        },
        {
            id: 6,
            title: "ACS Pro Desert Pack",
            price: 300,
            img: "https://img.brandshop.ru/cache/products/l/l47428700-0_1104x1104.jpg",
            category: "men",
            type: "shoes",
            color: "white",
            size: ["42", "43"],
        },
        {
            id: 7,
            title: "Air Max Plus",
            price: 250,
            img: "https://img.brandshop.ru/cache/products/f/fz4622-001-0_1104x1104.jpg",
            category: "men",
            type: "shoes",
            color: "grey",
            size: ["40", "41", "42", "43", "44"],
        },
        {
            id: 8,
            title: "Dunk Low Retro SE",
            price: 150,
            img: "https://img.brandshop.ru/cache/products/f/fz0549-600-0_1104x1104.jpg",
            category: "men",
            type: "shoes",
            color: "green",
            size: ["40", "41", "42", "43", "44"],
        },
        {
            id: 9,
            title: "ISPA MindBody",
            price: 220,
            img: "https://img.brandshop.ru/cache/products/d/dh7546-101-0_1104x1104.jpg",
            category: "men",
            type: "shoes",
            color: "white",
            size: ["40", "41", "42"],
        },
        {
            id: 10,
            title: "Gazelle",
            price: 350,
            img: "https://img.brandshop.ru/cache/products/j/jh8924-0_1104x1104.jpg",
            category: "men",
            type: "shoes",
            color: "white",
            size: ["40", "41", "42", "43", "44"],
        },
    ],
}));
