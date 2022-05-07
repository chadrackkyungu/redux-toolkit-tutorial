//! This is our State
import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems'; //an array

const initialState = {
  cartItem: cartItems,
  amount: 6,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState, // state

  reducers: {

    ClearCart: (state) => {
      state.cartItem = []; // empty the state
      state.amount = 0
    },

    removeItem: (state, action) => {
      console.log(action);

      const id = action.payload; // action payload it is the ID
      state.cartItem = state.cartItem.filter((item) => item.id !== id);
    },

    increase: (state, { payload }) => {
      console.log(payload);

      const cartItem = state.cartItem.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },

    decrease: (state, { payload }) => {
      const cartItem = state.cartItem.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },

    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItem.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },

  },
});

//go inside [initialState] & pull me out cartItem
export const cartItem = (state) => state.cart.cartItem
export const amount = (state) => state.cart.amount
export const total = (state) => state.cart.total
export const isLoading = (state) => state.cart.isLoading

//Actions
export const { ClearCart, removeItem } = cartSlice.actions;

// Export Slice
export default cartSlice.reducer;