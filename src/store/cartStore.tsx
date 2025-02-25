import { create } from "zustand";

// Интерфейс для товаров в корзине
interface CartItem {
    id: number;
    title: string;
    price: number;
    img: string;
    quantity: number;
}

// Интерфейс состояния корзины
interface CartStore {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
}

// Функция для загрузки корзины из localStorage
const loadCartFromStorage = (): CartItem[] => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
};

export const useCartStore = create<CartStore>((set) => ({
    cart: loadCartFromStorage(), // Загружаем сохранённые товары

    addToCart: (item) =>
        set((state) => {
            const existingItem = state.cart.find((i) => i.id === item.id);
            const updatedCart = existingItem
                ? state.cart.map((i) =>
                      i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                  )
                : [...state.cart, { ...item, quantity: 1 }];

            localStorage.setItem("cart", JSON.stringify(updatedCart)); // Сохраняем в localStorage
            return { cart: updatedCart };
        }),

    removeFromCart: (id) =>
        set((state) => {
            const updatedCart = state.cart.filter((item) => item.id !== id);
            localStorage.setItem("cart", JSON.stringify(updatedCart)); // Обновляем localStorage
            return { cart: updatedCart };
        }),

    clearCart: () => {
        localStorage.removeItem("cart"); // Удаляем из localStorage
        set({ cart: [] });
    },
}));
