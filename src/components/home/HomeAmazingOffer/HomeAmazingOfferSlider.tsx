import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Lazy, Navigation } from "swiper";
import "swiper/css/lazy";
import "swiper/css/free-mode";
// redux toolkit
import { useAppSelector } from "../../../redux/hooks";
// type
import { ProductsType } from "../../../assets/Types";
// components
import Card from "../Card";
// icon
import {
  RiArrowRightSLine,
  RiArrowLeftSLine,
} from "./../../../assets/icons/icons";
// style
import "./../../../styles/scss/HomeAmazingSlider.scss";
const HomeAmazingOfferSlider = () => {
  // buttons
  const NextBtn = useRef<null | any>(null);
  const PrevBtn = useRef<null | any>(null);
  //
  const [OfferProducts, setOfferProducts] = useState<Array<ProductsType>>([]);
  const Products = useAppSelector((state) => state.Products.products);
  useEffect(() => {
    Products.length > 1 &&
      setOfferProducts(
        Products.filter((product) => product.information.discount)
      );
  }, [Products]);
  return (
    <Swiper
      freeMode
      lazy
      navigation={{
        nextEl: NextBtn.current,
        prevEl: PrevBtn.current,
      }}
      spaceBetween={10}
      speed={600}
      slidesPerView={4}
      modules={[Lazy, FreeMode, Navigation]}
      className="Home_AmazingOffer_Slider_Swiper position-relative w-100 h-100"
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
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        500: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      }}
    >
      {OfferProducts.length > 0 &&
        OfferProducts.map((product, productIndex) => (
          <SwiperSlide
            key={productIndex}
            className="Home_AmazingOffer_Slider_SwiperSlide h-100"
          >
            <Card product={product} />
          </SwiperSlide>
        ))}
      <button
        ref={NextBtn}
        style={{ left: "10px" }}
        className="PrevNextBtn position-absolute d-flex align-items-center justify-content-center text-light rounded-circle bg-danger fs-4"
      >
        <RiArrowLeftSLine />
      </button>
      <button
        ref={PrevBtn}
        style={{ right: "10px" }}
        className="PrevNextBtn position-absolute d-flex align-items-center justify-content-center text-light rounded-circle bg-danger fs-4"
      >
        <RiArrowRightSLine />
      </button>
    </Swiper>
  );
};

export default HomeAmazingOfferSlider;
