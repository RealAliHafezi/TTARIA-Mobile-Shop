import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch } from "./redux/hooks";
import { getFetchingProductsFun } from "./redux/productsSlice";
// style
import "./styles/scss/App.scss";
// components
import Navbar from "./sections/Home/Header";
import Home from "./pages/Home/Home";
import Footer from "./sections/Footer/Footer";
import Products from "./pages/Products/Products";
import ProductsCategory from "./pages/ProductsCategory/ProductsCategory";
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFetchingProductsFun());
  }, [getFetchingProductsFun]);
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/:ProductsCategory" element={<ProductsCategory />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
