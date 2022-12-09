import React from "react";
// style
import "./../styles/scss/components/LazyLoad.scss";
// gif
import { Loading } from "../assets/image/Images";
const LazyLoad = () => {
  return (
    <div className="d-flex align-items-center justify-content-center LazyLoad">
      <img src={Loading} className="img-fluid" alt="Loading" />
    </div>
  );
};

export default LazyLoad;
