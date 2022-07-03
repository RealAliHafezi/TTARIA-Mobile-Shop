import React from "react";
// components
import HomeAmazingOfferSlider from "../../components/home/HomeAmazingOffer/HomeAmazingOfferSlider";
// style
import "./../../styles/scss/home/amazingProducts/HomeAmazingOffer.scss";
const HomeAmazingOffer = () => {
  return (
    <section className="Home_AmazingOffer row g-0 d-flex align-items-center justify-content-between bg-primary w-100 rounded-1 px-4 mt-3">
      <aside className="Home_AmazingOffer_BannerBox col-2 h-auto">
        <img
          src="https://ttaria.com/images/banners/amazing.png"
          alt="Amazing Poducts Offer Banner"
          className="w-100"
        />
      </aside>
      <section className="Home_AmazingOffer_Slider col-10">
        <HomeAmazingOfferSlider />
      </section>
    </section>
  );
};

export default HomeAmazingOffer;
