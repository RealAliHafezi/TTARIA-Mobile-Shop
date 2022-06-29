import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/lazy";
import { FreeMode, Navigation, Thumbs, Autoplay, Lazy } from "swiper";
// style
import "./../../../styles/scss/HomeIntroSlider.scss";
// data ( images and button slider )
import {
  HomeIntroSliderImages,
  HomeIntroSliderImagesButton,
} from "./HomeIntroSliderImages";
//
// install Swiper's Thumbs component
const HomeIntroSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<null | any>(null);
  return (
    <>
      <Swiper
        speed={800}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        slidesPerView="auto"
        spaceBetween={10}
        navigation
        loop
        slideToClickedSlide
        centeredSlides
        freeMode
        lazy
        loopedSlides={HomeIntroSliderImages.length}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="Home_Intro_Slider_Swiper position-relative w-100 h-100"
      >
        {HomeIntroSliderImages.map((img, index) => (
          <SwiperSlide
            key={index}
            className="Home_Intro_Slider_SwiperSlide text-align-center"
          >
            <img src={img} alt="Pic" className="w-100 h-100" loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        speed={800}
        autoplay={{ delay: 3500 }}
        pagination={{ clickable: true }}
        slideToClickedSlide={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="Home_Intro_Slider_Swiper_Thumbs position-absolute w-100"
      >
        {HomeIntroSliderImagesButton.map((btn, index) => (
          <SwiperSlide
            key={index}
            className="Home_Intro_Slider_SwiperSlide_Thumbs w-auto"
          >
            <button className="bg-primary text-light d-block px-4 py-2 mx-2">
              {btn.lable}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeIntroSlider;
