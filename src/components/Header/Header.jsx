import React from "react";
import { Link } from "react-router-dom";
import { selectTotalAmount } from "../../redux/selectors";
import { useSelector } from "react-redux";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  const totalAmount = useSelector(selectTotalAmount);

  return (
    <header className="shadow-md sticky z-50 top-0 bg-header">
      <div className="container flex justify-between items-center">
        <Link to="/">
          <h2 className="text-4xl font-bold text-darkBlue p-4 hover:text-lightBlue focus:text-lightBlue">
            Fake Store
          </h2>
        </Link>
        <Link
          to="/cart"
          className="p-4 text-lg flex justify-center items-center relative group"
        >
          <CiShoppingCart className="text-orange h-9 w-9 stroke-1 group-hover:text-lightOrange group-focus:text-lightOrange" />
          {totalAmount > 0 && (
            <span className="text-darkBlue bg-orange rounded-full w-5 h-5 text-sm font-bold flex justify-center items-center absolute top-3 right-3">
              {totalAmount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
