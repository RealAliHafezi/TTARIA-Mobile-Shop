import React from "react";
// style
import "./../../styles/scss/home/HomeReadable/HomeReadable.scss";
// data
import { HomeRedableData } from "../../Data";
const HomeReadable = () => {
  return (
    <section className="Home_Readable border mt-3 mb-5 px-3 py-4">
      {HomeRedableData.map((read, index) => (
        <div key={index}>
          {read.title.length > 0 && <h2 className="fw-bolder mb-3">{read.title}</h2>}
          {read.titleBlue.length > 0 && (
            <h3 className="fw-bolder text-primary mb-3">{read.titleBlue}</h3>
          )}
          {read.pictureOne.length > 0 && (
            <div className="Home_Readable_PictureOneBox d-flex justify-content-center my-5">
              <img src={read.pictureOne} alt="Pic..." className="" />
            </div>
          )}
          <p className="Home_Readable_lorem text-muted lead">
            از آنجا که لورم ایپسوم، شباهت زیادی به متن های واقعی دارد، طراحان
            معمولا از لورم ایپسوم استفاده میکنند تا فقط به مشتری یا کار فرما
            نشان دهند که قالب طراحی شده بعد از اینکه متن در آن قرار میگرد چگونه
            خواهد بود و فونت ها و اندازه ها چگونه در نظر گرفته شده است. نکته
            بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت
            و گرافیست کاران بعد از آنکه قالب و محتوای مورد نظرشون را ایجاد کردند
            از یاد می‌برند که متن لورم را از قسمتهای مختلف سایت حذف کنند و یا با
            متن دیگری جایگزین کنند. به همین دلیل اغلب اوقات ما با وبسایتهایی
            مواجه می‌شویم که در گوشه و کنار صفحات آنها متن لورم ایپسوم هنوز وجود
            دارد و حذف نشده است که این نشان دهنده بی توجهی طراحان است.
          </p>
          {read.pictureTwo.length > 0 && (
            <div className="Home_Readable_PictureTwoBox d-flex justify-content-center mt-5 mb-4">
              <img src={read.pictureTwo} alt="Pic..." className="mb-4" />
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default HomeReadable;
