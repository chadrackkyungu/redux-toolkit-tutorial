import React from 'react'
import CartItem from './CartItem';
// import { openModal } from '../features/modal/modalSlice';

// *Redux
import { useSelector, useDispatch } from "react-redux";
import { amount, cartItem, total, isLoading } from "../Redux/Slices/cartSlice"; // import our state

const CartContainer = () => {

  const dispatch = useDispatch(); //This sis the action

  //This is the state
  const state_Amount = useSelector(amount); 
  const state_cartItem = useSelector(cartItem);
  const state_total = useSelector(total);

  console.log(state_cartItem);

  if (state_Amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className='cart'>
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {state_cartItem.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${state_total.toFixed(2)}</span>
          </h4>
        </div>
        {/* <button className='btn clear-btn' onClick={() => dispatch(openModal())}> */}
        <button className='btn clear-btn'>
          clear cart
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;
