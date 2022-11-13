import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// components
import LoginBase from "../../sections/Login/LoginBase";
import Modal from "../../components/Modal";
// icon
import { FaSignInAlt, HiMail } from "./../../assets/icons/icons";
// type
interface initialValuesProps {
  Email: string;
}
const LoginWE = () => {
  const formik = useFormik({
    initialValues: {
      Email: "",
    },
    onSubmit: (values: initialValuesProps) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      Email: Yup.string()
        .email("لطفا ایمیل خود را به درستی وارد کنید")
        .required("لطفا ایمیل خود را وارد کنید"),
    }),
  });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <LoginBase
      desc={null}
      title="ورود یا ثبت نام با ایمیل | فروشگاه آریا"
      labelTxt="ایمیل"
      InputId="LoginEmail"
      formik={formik}
    >
      <>
        <input
          className={`form-control ${
            formik.touched.Email && formik.errors.Email
              ? "Login_Form_InValid"
              : ""
          }`}
          type="tel"
          id="LoginTel"
          {...formik.getFieldProps("Email")}
        />
        <HiMail className="Login_Input_Icon" />
        {formik.touched.Email && formik.errors.Email && (
          <span className="Login_Form_Error mt-1 text-danger position-absolute">
            {formik.errors.Email}
          </span>
        )}
        <button
          disabled={!formik.dirty || !formik.isValid}
          type="submit"
          className="btn btn-primary Login_Form_SubmitBtn d-flex align-items-center justify-content-center p-2 mt-4"
          data-bs-toggle="modal"
          data-bs-target="#LoginEmailModal"
        >
          <FaSignInAlt />
          <span className="me-1">ارسال کد تایید</span>
        </button>
        {/* Modal */}
        <Modal
          id="LoginEmailModal"
          title="اخطار !"
          bodyTxt="دوستان بازم شرمنده . قرار بود این بخش به وسیله firebase ساخته بشه ، ولی تصمیم بر این شد که این بخش به دوستان بکندکار واگذار بشه و من در اون دخالتی نداشته باشم"
          btnTxt="باشه بابا"
          linkTxt=""
          linkAddress=""
        />
        {/*  */}
      </>
    </LoginBase>
  );
};

export default LoginWE;
