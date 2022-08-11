import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// libraries
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// swiper
import "swiper/css/bundle";
import { BrowserRouter } from "react-router-dom";
// redux-toolkit
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
