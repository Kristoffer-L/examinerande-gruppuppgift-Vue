// /src/stores/cart.ts
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as {
      id: number;
      title: string;
      image: string;
      participants: number;
      price: number;
    }[],
  }),

  getters: {
    totalPrice: (state) => state.items.reduce((sum, item) => sum + item.price, 0),
    itemCount: (state) => state.items.length,
  },

  actions: {
    addItem(item: any) {
      this.items.push(item);
    },

    removeItem(id: number) {
      this.items = this.items.filter((i) => i.id !== id);
    },
    clearCart() {
      this.items = [];
    },
  },
});
