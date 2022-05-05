import { CartIcon } from '../icons';

// *Redux
import { useSelector } from "react-redux";
import { amount, cartItem, total, isLoading } from "../Redux/Slices/cartSlice";



const Navbar = () => {

  const amount = useSelector(amount);
  const total = useSelector(selectTotal);

  return (
    <>
      <nav>
        <div className='nav-center'>
          <h3>redux toolkit</h3>
          <div className='nav-container'>
            <CartIcon />
            <div className='amount-container'>
              <p className='total-amount'>{amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
