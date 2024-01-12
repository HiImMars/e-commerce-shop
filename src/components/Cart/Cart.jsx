import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../../redux/slices/cartSlice";
import { selectCartItems, selectTotalPrice } from "../../redux/selectors";

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
  return (
    <>
      <div>
        <h2>Your Cart</h2>
        <ul>
          {cartItems?.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt="product" />
              <div>
                <h3>{item.title}</h3>
                <p>({item.amount})</p>
              </div>
              <p>${item.totalPrice.toFixed(2)}</p>
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total Price: ${Math.ceil(totalPrice).toFixed(2)}</p>
        <button onClick={handleClearCart}>Clear Cart</button>
      </div>
    </>
  );
};

export default Cart;
