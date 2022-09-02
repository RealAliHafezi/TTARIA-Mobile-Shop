import React, { Fragment, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
import LoginWE from "./pages/Login/LoginWE";
import LoginAdmin from "./pages/Login/LoginAdmin";
import AdminPanelHome from "./pages/AdminPanel/AdminPanelHome";
// types
interface AccessForPanelPageType {
  children: JSX.Element;
}
function App() {
  const dispatch = useAppDispatch();
  const getProducts = useAppSelector((state) => state.Products.products);
  const AdminAccess: true | null = useAppSelector(
    (state) => state.Access.AdminAccess
  );
  // access for panel page
  const AccessForPanelPage = ({ children }: AccessForPanelPageType) => {
    return AdminAccess === true ? children : <Navigate to={"/loginAdmin"} />;
  };
  console.log(AdminAccess);
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
          <Route path="/loginWE" element={<LoginWE />} />
          <Route path="/loginAdmin" element={<LoginAdmin />} />
          <Route
            path="/panel"
            element={
              <AccessForPanelPage>
                <AdminPanelHome />
              </AccessForPanelPage>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
