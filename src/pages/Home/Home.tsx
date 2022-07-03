import React from "react";
// icons
import {
  TbDeviceMobile,
  TbDeviceWatch,
  BsSpeakerFill,
} from "./../../assets/icons/icons";
// style
import "./../../styles/scss/home/Home.scss";
// components
import Intro from "../../sections/Home/intro";
import HomeAmazingOffer from "../../sections/Home/HomeAmazingOffer";
import ProductsBanner from "../../sections/Home/ProductsBanner";
import ProductsBrand from "../../sections/Home/ProductsBrand";
import ProductsBetweenBanners from "../../sections/Home/ProductsBetweenBanners";

const Home = () => {
  window.document.title =
    "فروشگاه آریا | خرید اقساطی گوشی موبایل ، لپ تاپ ، قطعات کامپیوتر";
  return (
    <article className="py-1 py-md-2 px-3" id="Home">
      <Intro />
      <HomeAmazingOffer />
      <ProductsBanner />
      <ProductsBrand brand="samsung" icon={<TbDeviceMobile />} />
      <ProductsBrand brand="apple" icon={<TbDeviceMobile />} />
      <ProductsBrand brand="xiaomi" icon={<TbDeviceMobile />} />
      <ProductsBrand brand="Speaker" icon={<BsSpeakerFill />} />
      <ProductsBetweenBanners numOne={0} numTwo={2} />
      <ProductsBrand brand="Watch" icon={<TbDeviceWatch />} />
      <ProductsBetweenBanners numOne={2} numTwo={4} />
    </article>
  );
};

export default Home;
