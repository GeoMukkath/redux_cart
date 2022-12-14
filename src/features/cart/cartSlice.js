import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 5,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.amount = cartItem.amount - 1;
    },
    totalCount: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount = item.amount + amount;
        total = total + item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease, totalCount } =
  cartSlice.actions;

export default cartSlice.reducer;
