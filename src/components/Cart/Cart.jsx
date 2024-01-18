import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  removeFromCart,
} from "../../redux/slices/cartSlice";
import { selectCartItems, selectTotalPrice } from "../../redux/selectors";
import { Link } from "react-router-dom";
import { Notify } from "notiflix/build/notiflix-notify-aio";

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

  const handleBuy = () => {
    return Notify.success("Congratulations! You order is coming to you!");
  };

  return (
    <section className="min-h-[90vh] py-[40px]">
      <div className="container px-10 flex flex-col justify-center gap-7">
        <h2 className="self-center text-[40px] font-bold text-grey">
          Your Cart
        </h2>
        <ul className="flex flex-col justify-center items-center gap-10">
          {cartItems?.map((item) => (
            <li
              key={item.id}
              className="bg-white rounded-md p-2 shadow-md flex flex-col justify-center items-center gap-2 w-[300px] h-[500px] sm:flex-row sm:justify-evenly sm:w-[600px] sm:h-[500px] sm:px-10 md:justify-between md:w-[700px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px]"
            >
              <div className="flex flex-col justify-center items-center gap-8">
                <Link to={`/products/${item.id}`}>
                  <img
                    src={item.image}
                    alt="product"
                    className="h-[280px] w-[220px] hover:scale-[1.05] focus:scale-[1.05] duration-[300ms]"
                  />
                </Link>
                <h3 className="text-lg font-bold text-grey">{item.title}</h3>
              </div>
              <div className="flex flex-col justify-center items-center gap-8">
                <div className="flex justify-evenly items-center gap-2">
                  <button
                    onClick={() => handleRemoveFromCart(item)}
                    className="text-[30px] font-semibold text-red w-10 h-10 rounded-full shadow-[0_1px_2px_0_rgb(60,64,67,0.3),0_2px_6px_2px_rgb(60,64,67,0.15)] flex items-center justify-center p-1 active:scale-[1.10] duration-100"
                  >
                    -
                  </button>
                  <p className="text-[30px] font-semibold text-grey">
                    {item.amount}
                  </p>
                  <button
                    onClick={() => handleAddOneMore(item)}
                    className="text-[30px] font-semibold text-green w-10 h-10 rounded-full shadow-[0_1px_2px_0_rgb(60,64,67,0.3),0_2px_6px_2px_rgb(60,64,67,0.15)] flex items-center justify-center p-1 active:scale-[1.10] duration-100"
                  >
                    +
                  </button>
                </div>
                <p className="text-xl text-darkBlue font-semibold">
                  ${item.totalPrice.toFixed(2)}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-2xl font-semibold text-darkBlue">
          Total Price: ${totalPrice.toFixed(2)}
        </p>
        <div className="flex justify-center items-center gap-10">
          <button
            onClick={handleClearCart}
            className="p-5 shadow-[0_1px_2px_0_rgb(60,64,67,0.3),0_2px_6px_2px_rgb(60,64,67,0.15)] rounded-lg self-center text-orange bg-white font-bold text-[18px] md:text-[26px] hover:text-white hover:bg-lightGrey duration-200"
          >
            Clear Cart
          </button>
          <button
            onClick={handleBuy}
            className="p-5 shadow-[0_1px_2px_0_rgb(60,64,67,0.3),0_2px_6px_2px_rgb(60,64,67,0.15)] rounded-lg self-center text-green bg-white font-bold text-[18px] md:text-[26px] hover:text-white hover:bg-lightGrey duration-200"
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
