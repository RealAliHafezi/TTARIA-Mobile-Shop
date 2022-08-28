import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "./../../redux/hooks";
import { handleChangeAdminAccess } from "../../redux/Access";
// components
import LoginBase from "../../sections/Login/LoginBase";
// icons
import { FaSignInAlt } from "./../../assets/icons/icons";
const LoginAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      Email: "",
      Pass: "",
    },
    onSubmit: () => {
      dispatch(handleChangeAdminAccess());
      navigate("/editPanel");
    },
    validationSchema: Yup.object({
      Email: Yup.string()
        .required("وارد کردن ایمیل اجبار است")
        .oneOf(["testamirali80@yahoo.com"]),
      Pass: Yup.string()
        .required("وارد کردن رمز واجب است")
        .oneOf(["09380397555"]),
    }),
  });
  return (
    <LoginBase
      title="ورود ادمین | فروشگاه آریا"
      desc={null}
      labelTxt="ایمیل"
      InputId="LoginAdminEmail"
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
          id="LoginAdminEmail"
          {...formik.getFieldProps("Email")}
        />
        {formik.touched.Email && formik.errors.Email && (
          <span className="Login_Form_Error mt-1 text-danger position-absolute">
            ایمیل شما برای ورود به سایت صحیح نیست
          </span>
        )}
        <label htmlFor="LoginAdminPass" className="mb-1 m-1 mt-4">
          رمز عبور
        </label>
        <input
          className={`form-control ${
            formik.touched.Pass && formik.errors.Pass
              ? "Login_Form_InValid"
              : ""
          }`}
          type="tel"
          id="LoginAdminPass"
          {...formik.getFieldProps("Pass")}
        />
        {formik.touched.Pass && formik.errors.Pass && (
          <span className="Login_Form_Error mt-1 text-danger position-absolute">
            رمز عبور شما برای ورود به سایت صحیح نیست
          </span>
        )}
        <button
          disabled={!formik.dirty || !formik.isValid}
          type="submit"
          className="btn btn-primary Login_Form_SubmitBtn d-flex align-items-center justify-content-center p-2 mt-5"
          data-bs-toggle="modal"
          data-bs-target="#LoginPhoneNumberModal"
        >
          <FaSignInAlt />
          <span className="text-light me-1">ارسال کد تایید</span>
        </button>
      </>
    </LoginBase>
  );
};

export default LoginAdmin;
