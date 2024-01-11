import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
// import Home from "./pages/Home";

const App = () => {
  return (
    <div className="header">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
