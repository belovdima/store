import { create } from "zustand";

interface CartItem {
    id: number;
    title: string;
    price: number;
    discountPrice?: number;
    img: string;
    quantity: number;
}

interface CartStore {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
    cart: [],

    addToCart: (item) =>
        set((state) => {
            const existingItem = state.cart.find((i) => i.id === item.id);
            const price = item.discountPrice ?? item.price;

            const updatedCart = existingItem
                ? state.cart.map((i) =>
                      i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                  )
                : [...state.cart, { ...item, price, quantity: 1 }];

            return { cart: updatedCart };
        }),

    removeFromCart: (id) =>
        set((state) => ({
            cart: state.cart.filter((item) => item.id !== id),
        })),

    increaseQuantity: (id) =>
        set((state) => ({
            cart: state.cart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            ),
        })),

    decreaseQuantity: (id) =>
        set((state) => ({
            cart: state.cart.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ),
        })),

    clearCart: () => set({ cart: [] }),
}));
