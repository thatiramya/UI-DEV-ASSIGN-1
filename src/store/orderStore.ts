import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Order } from '../types';
import { mockOrders } from '../data/mockOrders';

interface OrderStore {
  orders: Order[];
  addOrder: (order: Order) => void;
}

const initialOrders = Array.isArray(mockOrders) ? mockOrders : [];

export const useOrderStore = create<OrderStore>()(
  persist(
    (set) => ({
      orders: initialOrders,
      addOrder: (order: Order) => {
        if (!order?.id) return; // Validate order before adding
        set((state) => ({
          orders: [order, ...(state.orders || [])]
        }));
      },
    }),
    {
      name: 'order-storage',
      version: 1,
    }
  )
);