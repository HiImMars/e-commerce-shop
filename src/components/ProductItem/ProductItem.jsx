import React from "react";
import { Link, useLocation } from "react-router-dom";
import { addToCart } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const ProductItem = ({ id, title, price, category, image }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price, image }));
  };

  return (
    <li>
      <Link key={id} to={`/products/${id}`} state={location}>
        <img src={image} alt={title} width="200px" />
      </Link>
      <h3>{title}</h3>
      <p>Category: {category}</p>
      <p>${price}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </li>
  );
};

export default ProductItem;
