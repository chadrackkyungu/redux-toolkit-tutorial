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
      // state.cartItem = [];
      return { cartItem: [] };
    },
  },
});

//go inside [initialState] & pull me out cartItem
export const cartItem = (state) => state.cart.cartItem
export const amount = (state) => state.cart.amount
export const total = (state) => state.cart.total
export const isLoading = (state) => state.cart.isLoading

//Actions
export const { ClearCart } = cartSlice.actions;

// Export Slice
export default cartSlice.reducer;