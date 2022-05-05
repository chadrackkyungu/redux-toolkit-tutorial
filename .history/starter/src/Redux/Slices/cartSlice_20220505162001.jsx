//! This is our State
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  amount: 9,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
});



//go inside [initialState] & pull out me cartItems
export const cartItem = (state) => state.cart.cartItems
export const amount = (state) => state.cart.amount
export const total = (state) => state.cart.total
export const isLoading = (state) => state.cart.isLoading


// Export Slice
export default cartSlice.reducer;