import React, { useEffect } from "react";
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
import HomeLastReadable from "../../sections/Home/HomeLastReadable";
import HomeReadable from "../../sections/Home/HomeReadable";
import PagesLayout from "../../sections/PagesLayout/PageLayout";

const Home = () => {
  window.document.title =
    "فروشگاه آریا | خرید اقساطی گوشی موبایل ، لپ تاپ ، قطعات کامپیوتر";
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <PagesLayout>
      <article className="py-1 py-md-2 px-3" id="Home">
        <Intro />
        <HomeAmazingOffer />
        <ProductsBanner />
        <ProductsBrand
          brand="samsung"
          icon={<TbDeviceMobile />}
          title="موبایل سامسونگ"
        />
        <ProductsBrand
          brand="apple"
          icon={<TbDeviceMobile />}
          title="موبایل اپل"
        />
        <ProductsBrand
          brand="xiaomi"
          icon={<TbDeviceMobile />}
          title="موبایل شیائومی"
        />
        <ProductsBrand
          brand="Speaker"
          icon={<BsSpeakerFill />}
          title="اسپیکر"
        />
        <ProductsBetweenBanners numOne={0} numTwo={2} />
        <ProductsBrand
          brand="Watch"
          icon={<TbDeviceWatch />}
          title="ساعت هوشمند"
        />
        <ProductsBetweenBanners numOne={2} numTwo={4} />
        <HomeLastReadable />
        <HomeReadable />
      </article>
    </PagesLayout>
  );
};

export default Home;
