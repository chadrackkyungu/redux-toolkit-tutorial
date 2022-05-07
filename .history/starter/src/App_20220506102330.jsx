import React, {useEffect}from 'react';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';

import { useDispatch, useSelector } from 'react-redux';
import { cartItem, calculateTotals } from "./Redux/Slices/cartSlice"; // import our state


function App() {
  
  const state_cartItem = useSelector(cartItem);
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(calculateTotals())
  }, [state_cartItem]);

  return (
    <>
    <Navbar />
    <CartContainer />
    </>
  )
}
export default App;