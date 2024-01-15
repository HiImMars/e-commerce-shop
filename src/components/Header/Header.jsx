import React from "react";
import { Link } from "react-router-dom";
import { selectTotalAmount } from "../../redux/selectors";
import { useSelector } from "react-redux";

const Header = () => {
  const totalAmount = useSelector(selectTotalAmount);

  return (
    <div>
      <Link to="/">
        <h2>Fake Store</h2>
      </Link>
      <Link to="/cart">
        <button>Cart ({totalAmount})</button>
      </Link>
    </div>
  );
};

export default Header;
