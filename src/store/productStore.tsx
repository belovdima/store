import { create } from "zustand";

interface Product {
    id: number;
    title: string;
    price: number;
    discountPrice?: number;
    img: string;
    img2?: string;
    img3?: string;
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
            title: "Takumi Sen 10",
            price: 360,
            img: "https://img.brandshop.ru/cache/products/i/ih0862-5_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/i/ih0862-0_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/i/ih0862-1_1104x1104.jpg",
            category: "men",
            type: "shoes",
            color: "yellow",
            size: [],
        },
        {
            id: 2,
            title: "Shadow Original",
            price: 120,
            img: "https://img.brandshop.ru/cache/products/s/s2108-824-5_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/s/s2108-824-0_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/s/s2108-824-1_1104x1104.jpg",
            category: "men",
            type: "shoes",
            color: "yellow",
            size: [],
        },
        {
            id: 3,
            title: "Rally",
            price: 140,
            img: "https://img.brandshop.ru/cache/products/1/181563-70297-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/1/181563-70297-1_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/1/181563-70297-2_1104x1104.jpg",
            category: "men",
            type: "shoes",
            color: "green",
            size: [],
        },
        {
            id: 4,
            title: "N.92 Advance",
            price: 90,
            img: "https://img.brandshop.ru/cache/products/1/181441-d1230-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/1/181441-d1230-1_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/1/181441-d1230-2_1104x1104.jpg",
            category: "men",
            type: "shoes",
            color: "green",
            size: [],
        },
        {
            id: 5,
            title: "Deane",
            price: 180,
            img: "https://img.brandshop.ru/cache/products/c/cl25adn01-fcm-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/c/cl25adn01-fcm-1_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/c/cl25adn01-fcm-2_1104x1104.jpg",
            category: "men",
            type: "shoes",
            color: "white",
            size: [],
        },
        {
            id: 6,
            title: "Crazychaos 2000",
            price: 90,
            img: "https://img.brandshop.ru/cache/products/i/ih0305-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/i/ih0305-1_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/i/ih0305-2_1104x1104.jpg",
            category: "men",
            type: "shoes",
            color: "white",
            size: [],
        },
        {
            id: 7,
            title: "Steven 6970",
            price: 350,
            img: "https://img.brandshop.ru/cache/products/s/ste06970-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/s/ste06970-1_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/s/ste06970-2_1104x1104.jpg",
            category: "men",
            type: "shoes",
            color: "white",
            size: [],
        },
        {
            id: 8,
            title: "Rivalry Low",
            price: 150,
            img: "https://img.brandshop.ru/cache/products/i/if7129-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/i/if7129-1_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/i/if7129-2_1104x1104.jpg",
            category: "men",
            type: "shoes",
            color: "blue",
            size: [],
        },
        {
            id: 9,
            title: "Dunk Low Retro",
            price: 160,
            img: "https://img.brandshop.ru/cache/products/d/dd1391-601-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/d/dd1391-601-1_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/d/dd1391-601-2_1104x1104.jpg",
            category: "men",
            type: "shoes",
            color: "red",
            size: [],
        },
        {
            id: 10,
            title: "BB550VND Suede Pack",
            price: 160,
            discountPrice: 82,
            img: "https://img.brandshop.ru/cache/products/b/bb550vnd-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/b/bb550vnd-1_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/b/bb550vnd-2_1104x1104.jpg",
            category: "men",
            type: "shoes",
            color: "red",
            size: [],
        },
        {
            id: 11,
            title: "L003 Neo Shot",
            price: 180,
            img: "https://img.brandshop.ru/cache/products/7/749sfa0007-2d6-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/7/749sfa0007-2d6-1_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/7/749sfa0007-2d6-2_1104x1104.jpg",
            category: "women",
            type: "shoes",
            color: "blue",
            size: [],
        },
        {
            id: 12,
            title: "Samba OG",
            price: 120,
            img: "https://img.brandshop.ru/cache/products/j/ji2682-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/j/ji2682-1_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/j/ji2682-2_1104x1104.jpg",
            category: "women",
            type: "shoes",
            color: "pink",
            size: [],
        },
        {
            id: 13,
            title: "Mayze Classic",
            price: 110,
            img: "https://img.brandshop.ru/cache/products/3/384209-01-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/3/384209-01-1_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/3/384209-01-2_1104x1104.jpg",
            category: "women",
            type: "shoes",
            color: "white",
            size: [],
        },
        {
            id: 14,
            title: "VL Court Bold",
            price: 105,
            img: "https://img.brandshop.ru/cache/products/i/ih3081-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/i/ih3081-1_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/i/ih3081-2_1104x1104.jpg",
            category: "women",
            type: "shoes",
            color: "black",
            size: [],
        },
        {
            id: 15,
            title: "Gambetta SS25",
            price: 480,
            img: "https://img.brandshop.ru/cache/products/s/s59ws0236-p8086-t6137-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/s/s59ws0236-p8086-t6137-1_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/s/s59ws0236-p8086-t6137-2_1104x1104.jpg",
            category: "women",
            type: "shoes",
            color: "blue",
            size: [],
        },
        {
            id: 16,
            title: "Adistar Cushion",
            price: 210,
            img: "https://img.brandshop.ru/cache/products/i/ih0278-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/i/ih0278-1_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/i/ih0278-2_1104x1104.jpg",
            category: "women",
            type: "shoes",
            color: "yellow",
            size: [],
        },
        {
            id: 17,
            title: "Cross-d 376",
            price: 420,
            img: "https://img.brandshop.ru/cache/products/c/crod0376-000_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/c/crod0376-000-1_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/c/crod0376-000-2_1104x1104.jpg",
            category: "women",
            type: "shoes",
            color: "white",
            size: [],
        },
        {
            id: 18,
            title: "Astir SN",
            price: 160,
            img: "https://img.brandshop.ru/cache/products/h/hq6768-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/h/hq6768-1_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/h/hq6768-2_1104x1104.jpg",
            category: "women",
            type: "shoes",
            color: "white",
            size: [],
        },
        {
            id: 19,
            title: "Campus 00S",
            price: 160,
            img: "https://img.brandshop.ru/cache/products/i/ig2122-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/i/ig2122-1_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/i/ig2122-2_1104x1104.jpg",
            category: "women",
            type: "shoes",
            color: "red",
            size: [],
        },
        {
            id: 20,
            title: "Quinn-d 6947",
            price: 360,
            img: "https://img.brandshop.ru/cache/products/q/quid6947-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/q/quid6947-1_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/q/quid6947-2_1104x1104.jpg",
            category: "women",
            type: "shoes",
            color: "pink",
            size: [],
        },
        {
            id: 21,
            title: "Gazelle Indoor",
            price: 140,
            img: "https://img.brandshop.ru/cache/products/j/jq0175-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/j/jq0175-1_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/j/jq0175-2_1104x1104.jpg",
            category: "all",
            type: "shoes",
            color: "brown",
            size: [],
        },
        {
            id: 22,
            title: "Drop Step Low 2.0",
            price: 100,
            img: "https://img.brandshop.ru/cache/products/j/jq0066-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/j/jq0066-1_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/j/jq0066-2_1104x1104.jpg",
            category: "all",
            type: "shoes",
            color: "white",
            size: [],
        },
        {
            id: 23,
            title: "Gazelle",
            price: 400,
            img: "https://img.brandshop.ru/cache/products/j/jh8925-00_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/j/jh8925-01_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/j/jh8925-02_1104x1104.jpg",
            category: "all",
            type: "shoes",
            color: "black",
            size: [],
        },
        {
            id: 24,
            title: "Kaiwa",
            price: 460,
            img: "https://img.brandshop.ru/cache/products/i/if2047-00_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/i/if2047-01_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/i/if2047-02_1104x1104.jpg",
            category: "all",
            type: "shoes",
            color: "black",
            size: [],
        },
        {
            id: 25,
            title: "Adios Pro 3.0",
            price: 460,
            img: "https://img.brandshop.ru/cache/products/i/ih0865-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/i/ih0865-1_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/i/ih0865-2_1104x1104.jpg",
            category: "all",
            type: "shoes",
            color: "black",
            size: [],
        },
        {
            id: 26,
            title: "Acumik",
            price: 330,
            img: "https://img.brandshop.ru/cache/products/c/cfm4028lsvw-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/c/cfm4028lsvw-1_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/c/cfm4028lsvw-2_1104x1104.jpg",
            category: "all",
            type: "shoes",
            color: "white",
            size: [],
        },
        {
            id: 27,
            title: " Y-Moc",
            price: 260,
            img: "https://img.brandshop.ru/cache/products/d/dfm4306snso-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/d/dfm4306snso-1_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/d/dfm4306snso-2_1104x1104.jpg",
            category: "all",
            type: "shoes",
            color: "brown",
            size: [],
        },
        {
            id: 28,
            title: "Centennial 85 High",
            price: 180,
            img: "https://img.brandshop.ru/cache/products/g/gy2535-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/g/gy2535-1_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/g/gy2535-2_1104x1104.jpg",
            category: "all",
            type: "shoes",
            color: "brown",
            size: [],
        },
        {
            id: 29,
            title: "Samba XLG",
            price: 170,
            img: "https://img.brandshop.ru/cache/products/i/id3913-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/i/id3913-1_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/i/id3913-2_1104x1104.jpg",
            category: "all",
            type: "shoes",
            color: "green",
            size: [],
        },
        {
            id: 30,
            title: "Stan Smith CS",
            price: 120,
            img: "https://img.brandshop.ru/cache/products/i/id2040-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/i/id2040-1_1104x1104.jpg",
            img3: "https://img.brandshop.ru/cache/products/i/id2040-2_1104x1104.jpg",
            category: "all",
            type: "shoes",
            color: "grey",
            size: [],
        },
        {
            id: 31,
            title: "Classic Fit Embroidered Crocodile",
            price: 90,
            img: "https://img.brandshop.ru/cache/products/t/th7318-t03-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/t/th7318-t03-1_1104x1104.jpg",
            category: "men",
            type: "clothes",
            color: "pink",
            size: [],
        },
        {
            id: 32,
            title: "Hollywood Jumbo",
            price: 250,
            img: "https://img.brandshop.ru/cache/products/d/du01e3274-rn-11-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/d/du01e3274-rn-11-1_1104x1104.jpg",
            category: "men",
            type: "clothes",
            color: "white",
            size: [],
        },
        {
            id: 33,
            title: "Panther",
            price: 40,
            img: "https://img.brandshop.ru/cache/products/d/dk0a4z4iblk-0_1104x1104.jpg",
            img2: "https://img.brandshop.ru/cache/products/d/dk0a4z4iblk-1_1104x1104.jpg",
            category: "men",
            type: "clothes",
            color: "black",
            size: [],
        },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "men",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "men",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "men",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "men",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "men",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "men",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "men",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "women",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "women",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "women",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "women",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "women",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "women",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "women",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "women",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "women",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "women",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "all",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "all",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "all",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "all",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "all",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "all",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "all",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "all",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "all",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
        // {
        //     id: ,
        //     title: "",
        //     price: ,
        //     img: "",
        //     category: "all",
        //     type: "clothes",
        //     color: "",
        //     size: [],
        // },
    ],
}));
