import React, {
  useState,
  useRef,
  MutableRefObject,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// icon
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "./../../../assets/icons/icons";
// style
import "./../../../styles/scss/product/ProductInformation/ProductInformationGallery.scss";
// components
import { ProductInformationImageZoom } from "./ProductInformationImageEffect";
// type
import { ProductsType } from "./../../../assets/Types";
interface propsType {
  product: ProductsType;
  resultVisibility: boolean;
  setResultVisibility: Dispatch<SetStateAction<boolean>>;
}

const ProductInformationGallery = ({
  product,
  resultVisibility,
  setResultVisibility,
}: propsType) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<null | any>(null);
  const [screenResizeMode, setScreenResizeMode] = useState<boolean>(true);
  const NextBtn = useRef<null | any>(null);
  const PrevBtn = useRef<null | any>(null);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenResizeMode(false);
    });
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        pagination
        className="w-100 Product_Information_Gallery_mySwiper2"
        modules={[FreeMode, Thumbs, Pagination]}
        breakpoints={{
          768: {
            pagination: {
              enabled: false,
            },
          },
          0: {
            pagination: {
              dynamicBullets: true,
              enabled: true,
            },
            thumbs: { swiper: null },
            modules: [Pagination, FreeMode],
          },
        }}
      >
        {product.information.banners.length > 0 &&
          product.information.banners.map((img, index) => (
            <SwiperSlide
              onMouseEnter={() => {
                screenResizeMode &&
                  ProductInformationImageZoom(
                    "Product_Information_IMG",
                    "Product_Information_Image_Result"
                  );
                setResultVisibility(true);
                setScreenResizeMode(true);
              }}
              onMouseLeave={() => {
                setResultVisibility(false);
              }}
              key={index}
              className="Product_Information_Gallery_mySwiper2_SwiperSlide align-center d-flex align-items-center justify-content-center"
            >
              <img
                loading="lazy"
                src={img}
                alt="Product Pic..."
                className="Product_Information_IMG d-block w-100 h-100 rounded-2 px-3"
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        speed={900}
        spaceBetween={10}
        slidesPerView={3}
        freeMode
        watchSlidesProgress
        navigation={{
          nextEl: NextBtn.current,
          prevEl: PrevBtn.current,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="Product_Information_Gallery_mySwiper d-none d-md-block position-relative w-100 py-1 px-3"
      >
        {product.information.banners.length > 0 &&
          product.information.banners.map((img, index) => (
            <SwiperSlide
              className="text-center d-flex align-items-center justify-content-center h-100 CURSOR"
              key={index}
            >
              <img
                loading="lazy"
                src={img}
                alt="Product Pic..."
                className="d-block w-100 h-100"
              />
            </SwiperSlide>
          ))}
        <button
          style={{ right: "10px" }}
          ref={PrevBtn}
          className="position-absolute rounded-circle btn btn-primary fs-5"
        >
          <RiArrowRightSLine />
        </button>
        <button
          style={{ left: "10px" }}
          ref={NextBtn}
          className="position-absolute rounded-circle btn btn-primary fs-5"
        >
          <RiArrowLeftSLine />
        </button>
      </Swiper>
    </>
  );
};

export default ProductInformationGallery;
