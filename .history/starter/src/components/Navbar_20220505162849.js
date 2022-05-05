import React from 'react'
import { CartIcon } from '../icons';

// *Redux
import { useSelector } from "react-redux";
import { amount, cartItem, total, isLoading } from "../Redux/Slices/cartSlice"; // import our state

const Navbar = () => {

  const state_Amount = useSelector(amount); 

  return (
    <>
      <nav>
        <div className='nav-center'>
          <h3>redux toolkit</h3>
          <div className='nav-container'>
            <CartIcon />
            <div className='amount-container'>
              <p className='total-amount'>{state_Amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
