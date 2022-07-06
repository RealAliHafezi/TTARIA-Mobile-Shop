import React from "react";
// icon
import { FaUserCircle, MdOutlineWatchLater } from "./../../assets/icons/icons";
// data
import { HomeLastReadableData } from "./../../Data";
// style
import "./../../styles/scss/home/HomeLastReadable/HomeLastReadable.scss";
// icon
import { RiBookMarkFill } from "./../../assets/icons/icons";
const HomeLastReadable = () => {
  return (
    <section className="Home_LastReadable mt-5 px-3">
      <div className="Home_LastReadable_Lable d-flex align-items-center justify-content-start mb-3">
        <span className="Home_LastReadable_Lable_IconBox d-flex align-items-center justify-content-center rounded-circle ms-3">
          <RiBookMarkFill />
        </span>
        <span className="Home_LastReadable_Lable_Title">آخرین خواندنی ها</span>
      </div>
      <div className="Home_LastReadable_Card row">
        {HomeLastReadableData.map((readable, index) => (
          <div
            className="col-12 col-sm-6 col-md-3 mb-4 mb-sm-2 mb-md-0 gx-3"
            key={index}
          >
            <div className="card">
              <div className="Home_LastReadable_Card_ImgBox overflow-hidden position-relative w-100">
                <img
                  src={readable.img}
                  className="Home_LastReadable_Card_Img card-img-top w-100 CURSOR"
                  alt="Banner"
                />
              </div>
              <div className="card-body pb-0 pb-md-3 text-center">
                <h5 className="card-title txtHoverPrimary CURSOR">
                  {readable.caption}
                </h5>
              </div>
              <div className="d-flex align-items-center justify-content-between px-2">
                <div className="Home_LastReadable_Card_WriterBox d-flex align-items-center justify-content-start CDEFAULT">
                  <span className="Home_LastReadable_Card_WriterIcon d-flex align-items-center rounded-circle ms-1">
                    <FaUserCircle />
                  </span>
                  <span className="Home_LastReadable_Card_Writer txtHoverPrimary CURSOR">
                    {readable.writerName}
                  </span>
                </div>
                <div className="Home_LastReadable_Card_DateBox d-flex align-items-center CDEFAULT">
                  <span className="Home_LastReadable_Card_DateIcon ms-1">
                    <MdOutlineWatchLater />
                  </span>
                  <span className="Home_LastReadable_Card_Date text-muted">
                    {readable.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeLastReadable;
