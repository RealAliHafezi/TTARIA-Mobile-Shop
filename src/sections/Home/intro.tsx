import React from "react";
import { Link } from "react-router-dom";
// components
import HomeIntroSlider from "../../components/home/intro/HomeIntroSlider";
// style
import "./../../styles/scss/intro.scss";
const Intro = () => {
  return (
    <section className="Home_Intro p-0 m-0">
      <nav className="Home_Intro_Nav_Banner w-100 pb-3">
        <img
          className="w-100 h-100"
          src="https://static.ttaria.com/banners/2022/06/02/aa20b3863572d5f336f0836aff717819.jpg"
          alt="Banner"
        />
      </nav>
      <main className="Home_Intro_Main row">
        <section className="col-12 col-lg-8 position-relative mb-2 mb-lg-0">
          <HomeIntroSlider />
        </section>
        <section className="Home_Intro_Main_ImagesBox row col-12 col-lg-4 p-0 m-0 pe-lg-3">
          <Link
            to={`https://instagram.com/ttaria`}
            className="col-12 col-md-6 col-lg-12"
            target="_blank"
          >
            <img
              className="w-100 h-100 pb-1 pt-1 ps-md-1 pt-md-0 pb-md-0 pb-lg-1 ps-lg-0 CURSOR"
              src="https://static.ttaria.com/banners/2022/06/15/a4da1262c85b580ebd5c0a6cec9c5f28.jpg"
              alt="Banner"
            />
          </Link>
          <Link
            to={`https://instagram.com`}
            className="col-12 col-md-6 col-lg-12"
            target="_blank"
          >
            <img
              className="w-100 h-100 pt-1 pe-md-1 pt-md-0 pt-lg-1 pe-lg-0 CURSOR"
              src="https://static.ttaria.com/banners/2022/05/28/a57a0555dd5d275385a161c398117d28.jpg"
              alt="Banner"
            />
          </Link>
        </section>
      </main>
    </section>
  );
};

export default Intro;
