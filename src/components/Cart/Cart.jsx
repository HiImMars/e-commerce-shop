import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  removeFromCart,
} from "../../redux/slices/cartSlice";
import { selectCartItems, selectTotalPrice } from "../../redux/selectors";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleAddOneMore = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      <div>
        <h2>Your Cart</h2>
        <ul>
          {cartItems?.map((item) => (
            <li key={item.id}>
              <Link to={`/products/${item.id}`}>
                <img src={item.image} alt="product" width="200" />
              </Link>
              <div>
                <h3>{item.title}</h3>
              </div>
              <p>${item.totalPrice.toFixed(2)}</p>
              <div>
                <button onClick={() => handleRemoveFromCart(item)}>-</button>
                <p>{item.amount}</p>
                <button onClick={() => handleAddOneMore(item)}>+</button>
              </div>
            </li>
          ))}
        </ul>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <button onClick={handleClearCart}>Clear Cart</button>
      </div>
    </>
  );
};

export default Cart;
