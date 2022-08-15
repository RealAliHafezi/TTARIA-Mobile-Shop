import React, { ReactElement } from "react";
// style
import "./../../styles/scss/Login/Login.scss";
// image
import { Logo } from "../../assets/image/Images";
// type
interface propsType {
  title: string;
  desc: string | null;
  children: ReactElement;
  formik: any;
  labelTxt: string;
  InputId: string;
}
const LoginBase = ({
  title,
  desc,
  children,
  formik,
  labelTxt,
  InputId,
}: propsType) => {
  return (
    <article className="Login d-flex align-items-center justify-content-center px-2">
      <div className="card Login_Card justify-content-center align-content-center px-1 py-3">
        <div className="Login_Card_ImgBox w-100 d-flex justify-content-center">
          <img src={Logo} className="w-100" alt="Logo" />
        </div>
        <div className="card-body px-2">
          <h5 className="card-title fw-bold pb-3 mb-5">{title}</h5>
          {desc && <p>{desc}</p>}
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
            className="position-relative"
          >
            <label htmlFor={`${InputId}`} className="mb-1 m-1">
              {labelTxt}
            </label>
            {children}
          </form>
        </div>
      </div>
    </article>
  );
};

export default LoginBase;
