import { User } from '@/types/user';
import { create } from 'zustand'

type AppPage =
  | "vendors"
  | "products"
  | "product-detail"
  | "signin"
  | "signup"
  | "business-reg"
  | "business-images"
  | "seller-dashboard"
  | "escrow-portal"
  | "profile"
  | "orders"
  | "order-detail"
  | "transactions";

type DashboardPage = "home" | "products" | "product-details" | "orders" | "teams" | "transactions" | "settings";

type SettingsTab = "profile" | "business" | "wallet" | "notifications";

export const useDashboardPageState = create<{
  currentPage: DashboardPage;
  setCurrentPage: (page: DashboardPage) => void;
}>((set) => ({
  currentPage:'home',
  setCurrentPage: (page) => set({ currentPage: page }),
}))


export const useDashboardTab = create<{
  activeSettingsTab: SettingsTab;
  setActiveSettingsTab: (page: SettingsTab) => void;
}>((set) => ({
  activeSettingsTab:'profile',
  setActiveSettingsTab: (page) => set({ activeSettingsTab: page }),
}))

export const usePagesState = create<{
  currentPage: AppPage;

  setCurrentPage: (page: AppPage) => void;
}>((set) => ({
  currentPage: "vendors",
  setCurrentPage: (page) => set({ currentPage: page }),
}))

export const useUser = create<{
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}>((set) => ({
  currentUser: null,
  setCurrentUser: (user) => set({ currentUser: user }),
}))

export const useShop = create<{
  shopAddress: string;
  setShopAddress: (address: string) => void;
}>((set) => ({
  shopAddress: '',
  setShopAddress: (address) => set({ shopAddress: address }),
}))


type CartItem = {
  id: string | number;
  name: string;
  price: number;
  image: string;
  vendorId: string;
  vendorName: string;
  quantity: number;
  // You can add more fields as needed (e.g., variant, options)
};

export const useCartState = create<{
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeFromCart: (id: string | number) => void;
  clearCart: () => void;
  updateQuantity: (id: string | number, quantity: number) => void;
}>((set, get) => ({
  items: [],
  addToCart: (item) => {
    set((state) => {
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        // If item exists, increase quantity
        return {
          items: state.items.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + (item.quantity ?? 1) }
              : i
          ),
        };
      } else {
        // Add new item
        return {
          items: [
            ...state.items,
            {
              ...item,
              quantity: item.quantity ?? 1,
            },
          ],
        };
      }
    });
  },
  removeFromCart: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },
  clearCart: () => set({ items: [] }),
  updateQuantity: (id, quantity) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    }));
  },
}));

// export const hand



