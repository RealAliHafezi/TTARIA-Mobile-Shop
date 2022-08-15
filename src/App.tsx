import React, { Fragment, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getFetchingProductsFun } from "./redux/productsSlice";
// style & icon
import { TbDeviceMobile, HiMail } from "./assets/icons/icons";
import "./styles/scss/App.scss";
// components
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductsCategory from "./pages/ProductsCategory/ProductsCategory";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
function App() {
  const dispatch = useAppDispatch();
  const getProducts = useAppSelector((state) => state.Products.products);
  useEffect(() => {
    dispatch(getFetchingProductsFun());
  }, [getFetchingProductsFun]);
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/productsCategories/:ProductsCategory"
            element={<ProductsCategory />}
          />
          <Route path="/products/:Product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/loginWE" element={<Login />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
