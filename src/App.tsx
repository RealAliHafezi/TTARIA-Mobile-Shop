import React, { Fragment, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getFetchingProductsFun } from "./redux/productsSlice";
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
import AdminPanelMobiles from "./pages/AdminPanel/AdminPanelMobiles";
import AdminPanelWatch from "./pages/AdminPanel/AdminPanelWatches";
import AdminPanelSpeakers from "./pages/AdminPanel/AdminPanelSpeakers";
import AdminPanelUnAvailable from "./pages/AdminPanel/AdminPanelUnAvailable";
import AdminPanelAddProduct from "./pages/AdminPanel/AdminPanelAddProduct";
import AdminPanelEditProduct from "./pages/AdminPanel/AdminPanelEditProduct";
import AdminPanelSearch from "./pages/AdminPanel/AdminPanelSearch";
import Search from "./pages/Search/Search";
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
          <Route
            path="/panel/mobiles"
            element={
              <AccessForPanelPage>
                <AdminPanelMobiles />
              </AccessForPanelPage>
            }
          />
          <Route
            path="/panel/watches"
            element={
              <AccessForPanelPage>
                <AdminPanelWatch />
              </AccessForPanelPage>
            }
          />
          <Route
            path="/panel/speakers"
            element={
              <AccessForPanelPage>
                <AdminPanelSpeakers />
              </AccessForPanelPage>
            }
          />
          <Route
            path="/panel/unAvailable"
            element={
              <AccessForPanelPage>
                <AdminPanelUnAvailable />
              </AccessForPanelPage>
            }
          />
          <Route
            path="/panel/addProduct"
            element={
              <AccessForPanelPage>
                <AdminPanelAddProduct />
              </AccessForPanelPage>
            }
          />
          <Route
            path="/panel/editProduct/:EditID"
            element={
              <AccessForPanelPage>
                <AdminPanelEditProduct />
              </AccessForPanelPage>
            }
          />
          <Route
            path="/panel/search"
            element={
              <AccessForPanelPage>
                <AdminPanelSearch />
              </AccessForPanelPage>
            }
          />
          <Route path="/search/:SearchTxt" element={<Search />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
