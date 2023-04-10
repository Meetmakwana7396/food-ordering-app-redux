import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalitems: 0,
    total: 0,
  },

  reducers: {
    addToCart(state, action) {
      state.totalitems++;

      let index = state.items.findIndex((x) => x.id === action.payload.id);
      state.total = state.total + action.payload.price;

      if (index !== -1) {
        state.items[index].qunatity = state.items[index].qunatity + 1;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem(state, action) {
      console.log(action, "delete action");
      let index = state.items.findIndex((x) => x.id === action.payload);
      state.totalitems = state.totalitems - state.items[index].qunatity;
      state.total =
        state.total - state.items[index].qunatity * state.items[index].price;
      state.items.splice(index, 1);
      // state.total = state.total - action.payload.price;
    },

    clearCart(state, action) {
      return [];
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, clearCart, removeItem } = cartSlice.actions;
