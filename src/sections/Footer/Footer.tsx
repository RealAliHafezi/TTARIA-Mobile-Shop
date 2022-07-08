import React from "react";
import { Link } from "react-router-dom";
// data
import { FooterData } from "./../../Data";
// style
import "./../../styles/scss/Footer/Footer.scss";
// icon
import {
  RiArrowUpSLine,
  FaTelegramPlane,
  FaInstagram,
} from "./../../assets/icons/icons";
const Footer = () => {
  const handleBackToUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer id="Footer" className="border-top pt-5 pb-1">
      <section className="w-100 text-center">
        <button
          className="Footer_BackToUp fs-6 px-2 py-0 fw-bold CURSOR"
          onClick={() => handleBackToUp()}
        >
          <span className="fs-4">
            <RiArrowUpSLine />
          </span>
          <span>برگشت به بالا</span>
        </button>
      </section>
      <section className="Footer_Services g-0 row px-2 mt-5">
        {FooterData.services.map((service, index) => (
          <div
            className="col-12 col-sm-6 col-md-3 d-flex align-items-center px-2 mb-3 mb-lg-0"
            key={index}
          >
            <div className="Footer_Service_Logo d-flex align-items-end ms-2">
              <img
                src={service.logo}
                alt="Service pic..."
                className="w-100 h-100"
              />
            </div>
            <div className="Footer_Service_Lable d-flex flex-column justify-content-center CDEFAULT">
              <h6 className="fw-bold">{service.title}</h6>
              <span>{service.caption}</span>
            </div>
          </div>
        ))}
      </section>
      <section className="Footer_Links g-0 row mt-5">
        <div className="col-12 mb-5 mb-sm-0 col-sm-6 col-md-3 px-3">
          <span className="Footer_Links_Address fw-500 CDEFAULT">
            آدرس : تهران ، میدان ولیعصر ، مجتمع ایرانیان ، طبقه 8 ، واحد 6 ،
            تلفن : 02188800138
          </span>
        </div>
        <div className="col-6 col-sm-6 col-md-3 px-3">
          <ul>
            <li className="fw-bold mb-2 CDEFAULT fs-6">لینک های مفید</li>
            {FooterData.links[0].map((link, index) => (
              <li className="mb-2" key={index}>
                <Link to={link.link} className="LINK CURSOR w-auto">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-6 col-sm-6 col-md-3 px-3">
          <ul>
            <li className="fw-bold mb-2 CDEFAULT fs-6">دسترسی سریع</li>
            {FooterData.links[1].map((link, index) => (
              <li className="mb-2 CURSOR" key={index}>
                <Link to={link.link} className="LINK">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="Footer_Links_Logo col-12 mt-2 mt-sm-0 col-sm-6 col-md-3 px-2">
          <a
            href={`https://trustseal.enamad.ir/?id=222282&Code=1QncoAbOCCWtOuOu5V1m`}
            target="_blank"
            className="CURSOR"
          >
            <img
              src="https://www.p30web.org/wp-content/uploads/enamad/enamad-one-star.png"
              alt="Pic..."
              className="d-block me-3"
            />
          </a>
          <div className="mt-3">
            <h6 className="fw-bold CDEFAULT">
              فروشگاه آریا را در شبکه های اجتماعی دنبال کنید :{" "}
            </h6>
            <a href="https://instagram.com/ttaria" className="ms-2">
              <FaInstagram style={{ color: "#f44538" }} className="fs-4" />
            </a>
            <a href="https://telegram.com/ttaria">
              <FaTelegramPlane className="text-primary fs-4" />
            </a>
          </div>
        </div>
      </section>
      <section className="Footer_Copy mt-4 CDEFAULT">
        <p className="text-muted text-center m-0">
          © تمامی حقوق مادی و معنوی این وبسایت متعلق به شرکت طرفه تجارت آریا
          میباشد
        </p>
      </section>
    </footer>
  );
};

export default Footer;
