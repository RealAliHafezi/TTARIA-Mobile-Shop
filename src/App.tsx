import React, { Fragment, useEffect, Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getFetchingProductsFun } from "./redux/productsSlice";
import "./styles/scss/App.scss";
// components

const Home = lazy(() => import("./pages/Home/Home"));
const Products = lazy(() => import("./pages/Products/Products"));
const ProductsCategory = lazy(
  () => import("./pages/ProductsCategory/ProductsCategory")
);
const Product = lazy(() => import("./pages/Product/Product"));
const Login = lazy(() => import("./pages/Login/Login"));
const LoginWE = lazy(() => import("./pages/Login/LoginWE"));
const LoginAdmin = lazy(() => import("./pages/Login/LoginAdmin"));
const AdminPanelHome = lazy(() => import("./pages/AdminPanel/AdminPanelHome"));
const AdminPanelMobiles = lazy(
  () => import("./pages/AdminPanel/AdminPanelMobiles")
);
const AdminPanelWatch = lazy(
  () => import("./pages/AdminPanel/AdminPanelWatches")
);
const AdminPanelSpeakers = lazy(
  () => import("./pages/AdminPanel/AdminPanelSpeakers")
);
const AdminPanelUnAvailable = lazy(
  () => import("./pages/AdminPanel/AdminPanelUnAvailable")
);
const AdminPanelAddProduct = lazy(
  () => import("./pages/AdminPanel/AdminPanelAddProduct")
);
const AdminPanelEditProduct = lazy(
  () => import("./pages/AdminPanel/AdminPanelEditProduct")
);
const AdminPanelSearch = lazy(
  () => import("./pages/AdminPanel/AdminPanelSearch")
);
const Search = lazy(() => import("./pages/Search/Search"));
const LazyLoad = lazy(() => import("./components/LazyLoad"));

// import ProductsCategory from "";
// import Product from "";
// import Login from "";
// import LoginWE from "";
// import LoginAdmin from "";
// import AdminPanelHome from "";
// import AdminPanelMobiles from "";
// import AdminPanelWatch from "";
// import AdminPanelSpeakers from "";
// import AdminPanelUnAvailable from "";
// import AdminPanelAddProduct from "";
// import AdminPanelEditProduct from "";
// import AdminPanelSearch from "";
// import Search from "";
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
      <Suspense fallback={<LazyLoad />}>
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
      </Suspense>
    </>
  );
}

export default App;
