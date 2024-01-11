import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, title, image, price } = action.payload;

      const product = state.items.find((item) => item.id === id);

      if (product) {
        product.quantity += 1;
      } else {
        state.items.push({ id, title, image, price, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const productIndex = state.items.findIndex((item) => item.id === id);

      if (productIndex !== -1) {
        const updatedItems = [...state.items];
        const product = updatedItems[productIndex];

        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          updatedItems.splice(productIndex, 1);
        }

        state.items = updatedItems;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
