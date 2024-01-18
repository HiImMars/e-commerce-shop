import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { LuShoppingBag } from "react-icons/lu";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import "animate.css/animate.css";

const ProductItem = ({ id, title, price, category, image }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price, image }));
    setAddedToCart(true);
    Notify.success("Item successfully added to cart!");

    setTimeout(() => setAddedToCart(false), 1000);
  };

  return (
    <li
      key={id}
      className="w-[300px] h-[480px] flex flex-col justify-center items-center gap-2 bg-white rounded-md p-2 shadow-md basis-[95%] md:basis-1/3 xl:basis-1/4"
    >
      <Link to={`/products/${id}`}>
        <img
          src={image}
          alt={title}
          className="h-[280px] w-[220px] hover:scale-[1.05] focus:scale-[1.05] duration-[300ms]"
        />
      </Link>
      <h3 className="line-clamp-1 font-bold text-xl">{title}</h3>
      <p className="text-md text-grey">
        Category: <span className="text-md capitalize">{category}</span>
      </p>
      <p className="text-darkBlue text-lg">${price}</p>

      <LuShoppingBag
        onClick={handleAddToCart}
        className={`w-[40px] h-[40px] cursor-pointer hover:text-orange duration-200 animate__animated ${
          addedToCart ? "animate__heartBeat" : ""
        }`}
      />
    </li>
  );
};

export default ProductItem;
