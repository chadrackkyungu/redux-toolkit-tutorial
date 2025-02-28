import React, {useEffect}from 'react';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';

import { useDispatch, useSelector } from 'react-redux';
import { cartItem, calculateTotals } from "./Redux/Slices/cartSlice"; // import our state
import { isOpen } from "./Redux/Slices/modalSlice"; // import our state
import Modal from './components/Modal';


function App() {
  
  //update the amoun and the basket whenever there is an update
  const state_cartItem = useSelector(cartItem);
  const state_isOpen = useSelector(isOpen);
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(calculateTotals())
  }, [state_cartItem]);

  return (
    <>
    {state_isOpen && <Modal />}
    <Navbar />
    <CartContainer />
    </>
  )
}
export default App;