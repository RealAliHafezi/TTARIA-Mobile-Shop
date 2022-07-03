import React, { useRef } from "react";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Lazy, Navigation } from "swiper";
import "swiper/css/lazy";
import "swiper/css/free-mode";
import {
  RiArrowRightSLine,
  RiArrowLeftSLine,
} from "./../../../assets/icons/icons";
// components
import Card from "./HomeBrandsCard";
// style
import "./../../../styles/scss/home/ProductsBrand/HomeProductsBrandSlider.scss";
// type
import { ProductsType } from "./../../../assets/Types";
interface PropsType {
  product: Array<ProductsType>;
}
const HomeProductsBrandSlider = ({ product }: PropsType) => {
  // buttons
  const NextBtn = useRef<null | any>(null);
  const PrevBtn = useRef<null | any>(null);
  return (
    <Swiper
      lazy
      freeMode
      navigation={{
        nextEl: NextBtn.current,
        prevEl: PrevBtn.current,
      }}
      speed={600}
      slidesPerView={5}
      modules={[Lazy, Navigation, FreeMode]}
      className="Home_ProductsBrand_Slider_Swiper position-relative w-100 h-100"
      onSwiper={(swiper) => {
        // Delay execution for the refs to be defined
        setTimeout(() => {
          // Override prevEl & nextEl now that refs are defined
          // swiper.params.navigation.prevEl = PrevBtn.current;
          // swiper.params.navigation.nextEl = NextBtn.current;

          // Re-init navigation
          swiper.navigation.destroy();
          swiper.navigation.init();
          swiper.navigation.update();
        });
      }}
      breakpoints={{
        1024: {
          slidesPerView: 5,
        },
        768: {
          slidesPerView: 4,
        },
        600: {
          slidesPerView: 3,
        },
        450: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      }}
    >
      {product.length > 0 &&
        product.map((prod, index) => (
          <SwiperSlide key={index}>
            <Card product={prod} />
          </SwiperSlide>
        ))}
      <button
        ref={NextBtn}
        style={{ left: "10px" }}
        className="Home_ProductsBrand_Slider_Swiper_ArrowBtn CURSOR rounded-circle text-light fs-4 position-absolute d-flex align-items-center justify-content-center"
      >
        <RiArrowLeftSLine />
      </button>
      <button
        ref={PrevBtn}
        style={{ right: "10px" }}
        className="Home_ProductsBrand_Slider_Swiper_ArrowBtn CURSOR rounded-circle text-light fs-4 position-absolute d-flex align-items-center justify-content-center"
      >
        <RiArrowRightSLine />
      </button>
    </Swiper>
  );
};

export default HomeProductsBrandSlider;
