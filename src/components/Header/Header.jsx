import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>Fake Store</h2>
      <Link to="/cart">
        <button>Cart</button>
      </Link>
    </div>
  );
};

export default Header;
