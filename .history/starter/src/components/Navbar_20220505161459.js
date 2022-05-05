import { CartIcon } from '../icons';

// *Redux
import { useSelector } from "react-redux";
import { amount, cartItem, total, isLoading } from "../Redux/Slices/cartSlice";



const Navbar = () => {

  const state_Amount = useSelector(amount);
  const state_cartItem = useSelector(cartItem);
  const state_total = useSelector(total);
  const state_isLoading = useSelector(isLoading);

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
