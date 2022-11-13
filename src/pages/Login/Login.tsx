import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// components
import Modal from "../../components/Modal";
import LoginBase from "../../sections/Login/LoginBase";
// icon
import { TbDeviceMobile, FaSignInAlt } from "./../../assets/icons/icons";
// type
interface initialValuesProps {
  PhoneNumber: string;
}
const Login = () => {
  // title
  window.document.title = "ورود یا ثیت نام موبایل | فروشگاه آریا";
  // formik library
  const formik = useFormik({
    initialValues: {
      PhoneNumber: "",
    },
    onSubmit: (values: initialValuesProps) => {
      // console.log(values);
    },
    validationSchema: Yup.object({
      PhoneNumber: Yup.string()
        .required("لطفا شماره تلفن خود را وارد کنید")
        .matches(
          /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/,
          "لطفا با شماره تلفنی از ایران وارد شوید"
        ),
    }),
  });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <LoginBase
      title="ورود یا ثبت نام با موبایل | فروشگاه آریا"
      desc={null}
      labelTxt="شماره موبایل"
      InputId="LoginTel"
      formik={formik}
    >
      <>
        <input
          className={`form-control ${
            formik.touched.PhoneNumber && formik.errors.PhoneNumber
              ? "Login_Form_InValid"
              : ""
          }`}
          type="tel"
          id="LoginTel"
          {...formik.getFieldProps("PhoneNumber")}
        />
        <TbDeviceMobile className="Login_Input_Icon" />
        {formik.touched.PhoneNumber && formik.errors.PhoneNumber && (
          <span className="Login_Form_Error mt-1 text-danger position-absolute">
            {formik.errors.PhoneNumber}
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
          <span className="me-1">ارسال کد تایید</span>
        </button>
        {/* Modal */}
        <Modal
          id="LoginPhoneNumberModal"
          title="اخطار !"
          bodyTxt="سلام دوستان . شرمنده ! اینجا باید برای شما پیامک میومد . من هم با
            کسی که بکندم رو بزنه کار نکردم برای این پروژه . از طرفی هزینه
            اضافی داشت پیامک زدن . خب کلا قرار بود بکند من با firebase باشه و
            از طریق احراز هویت این سایت شما میتونید وارد سایت بشید باز هم
            شرمنده !🙃 برای ورود با ایمیل میتونید با استفاده از دکمه زیر به
            صفحه مورد نظر برید :"
          btnTxt="باشه بابا"
          linkTxt="صفحه ورود با ایمیل"
          linkAddress="/loginWE"
        />
        {/*  */}
      </>
    </LoginBase>
  );
};

export default Login;
