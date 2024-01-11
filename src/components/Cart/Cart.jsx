import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../../slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div>
        <h2>Your Cart</h2>
        <ul>
          {cartItems?.map(({ id, title, image, price, quantity }) => (
            <li key={id}>
              <img src={image} alt="product" />
              <div>
                <h3>{title}</h3>
                <p>{quantity}</p>
              </div>
              <p>${price}</p>
              <button onClick={() => handleRemoveFromCart(id)}>Remove</button>
            </li>
          ))}
        </ul>
        <button onClick={handleClearCart}>Clear Cart</button>
      </div>
    </>
  );
};

export default Cart;
