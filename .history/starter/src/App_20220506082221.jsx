import React from 'react';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';

import { useDispatch, useSelector } from 'react-redux';
import { cartItem } from "../Redux/Slices/cartSlice"; // import our state

import { calculateTotals } from './Redux/Slices/cartSlice';

function App() {
  
  const state_cartItem = useSelector(cartItem);
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(calculateTotals())
  }, [cartItem]);

  return (
    <>
    <Navbar />
    <CartContainer />
    </>
  )
}
export default App;