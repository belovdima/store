import { create } from "zustand";

interface Product {
    id: number;
    title: string;
    price: number;
    discountPrice?: number;
    img: string;
    category: "men" | "women";
}

interface ProductStore {
    products: Product[];
}

export const useProductStore = create<ProductStore>(() => ({
    products: [
        {
            id: 1,
            title: "Minimal Sneakers",
            price: 150,
            discountPrice: 120,
            img: "https://i1.proimagescdn.ru/images/bimages/1414/IF8577_1.jpg",
            category: "men",
        },
        {
            id: 2,
            title: "Black Hoodie",
            price: 90,
            discountPrice: 70,
            img: "https://i1.proimagescdn.ru/images/bimages/1378/HDZPFVCKBK_1.webp",
            category: "men",
        },
        {
            id: 3,
            title: "Classic T-Shirt",
            price: 45,
            img: "https://i1.proimagescdn.ru/images/bimages/1402/T24P109002LVNDR_1.jpg",
            category: "women",
        },
        {
            id: 4,
            title: "Oversized Coat",
            price: 250,
            img: "https://i1.proimagescdn.ru/images/bimages/1415/DK0A4XK4CH01_1.jpg",
            category: "women",
        },
    ],
}));
