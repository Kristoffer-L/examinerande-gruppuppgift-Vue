// /src/stores/cart.ts
import { defineStore } from 'pinia';

interface CartItem {
  id: number;
  title: string;
  image: string;
  participants: number;
  price: number;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('exp') || '[]') as CartItem[],
  }),

  getters: {
    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.participants, 0),
    itemCount: (state) => state.items.length,
  },

  actions: {
    addItem(item: CartItem) {
      this.items.push(item);
      const stored = JSON.parse(localStorage.getItem('exp') || '[]');
      stored.push(item);
      localStorage.setItem('exp', JSON.stringify(stored));
    },

    removeOnePerson(index: number) {
      const item = this.items[index];
      if (!item) return;

      if (item.participants > 1) item.participants -= 1;
      else this.items.splice(index, 1);

      localStorage.setItem('exp', JSON.stringify(this.items));
    },

    addOnePerson(index: number) {
      const item = this.items[index];
      if (!item) return;

      item.participants += 1;
      localStorage.setItem('exp', JSON.stringify(this.items));
    },

    removeItem(index: number) {
      this.items.splice(index, 1);
      localStorage.setItem('exp', JSON.stringify(this.items));
    },

    clearCart() {
      this.items = [];
      localStorage.removeItem('exp');
    },
  },
});
