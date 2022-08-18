import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
      state.changed = false;
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        const itemObj = {
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
        };
        state.items.push(itemObj);
      } else {
        existingItem.quantity++;
      }
      state.totalQuantity++;
      state.changed = true;
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      existingItem.quantity--;
      if (existingItem.quantity === 0) {
        state.items = state.items.filter((item) => item.id !== id);
      }
      state.totalQuantity--;
      state.changed = true;
    },
  },
});
export const cartActions = cartSlice.actions;

export default cartSlice;
