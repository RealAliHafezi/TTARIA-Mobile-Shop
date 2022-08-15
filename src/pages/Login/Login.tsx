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
  window.document.title = "ورود یا ثیت نام | فروشگاه آریا";

  // formik library
  const formik = useFormik({
    initialValues: {
      PhoneNumber: "",
    },
    onSubmit: (values: initialValuesProps) => {
      console.log(values);
      console.log(formik);
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
          className="btn btn-primary Login_Form_SubmitBtn d-flex align-items-center justify-content-center p-2 mt-4"
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

  // return (
  // <LoginWrapper
  //   {...LoginWrapperProps}
  //   className="Login d-flex align-items-center justify-content-center px-2"
  // >
  //   <div className="card Login_Card justify-content-center align-content-center px-1 py-3">
  //     <div className="Login_Card_ImgBox w-100 d-flex justify-content-center">
  //       <img src={Logo} className="w-100" alt="..." />
  //     </div>
  //     <div className="card-body px-2">
  //       <h5 className="card-title fw-bold pb-3 mb-5">{title}</h5>
  //       {desc && <p>{desc}</p>}
  //       <form
  //         action=""
  //         className="text-start"
  //         onSubmit={(e) => {
  //           e.preventDefault();
  //         }}
  //       >
  //         <div className="position-relative text-end">
  //           <label
  //             htmlFor="Login_PhoneNumber_Input"
  //             className="form-label mb-2"
  //           >
  //             {label}
  //           </label>
  //           <input
  //             type={`${inputType}`}
  //             className="form-control"
  //             id="Login_PhoneNumber_Input"
  //             onChange={(e) =>
  //               inputType
  //                 ? handleChangeInputValueAndVerifyPhoneNumber(e)
  //                 : handleChangeInputValueAndVerifyEmail(e)
  //             }
  //           />

  //           {Icon}
  //         </div>
  //         {inputType === "tel" ? (
  //           <button
  //             disabled={PhoneNumberVerify === true ? false : true}
  //             className="Login_Form_SubmitBtn btn btn-primary d-inline-flex align-items-center justify-content-center mt-3"
  //             data-bs-toggle="modal"
  //             data-bs-target="#LoginModal"
  //           >
  //             <FaSignInAlt className="ms-2" />
  //             <span>{buttonTxt}</span>
  //           </button>
  //         ) : (
  //           <Link
  //             aria-disabled={PhoneNumberVerify === true ? false : true}
  //             to={`${buttonAddress}`}
  //             className="Login_Form_SubmitBtn btn btn-primary d-inline-flex align-items-center justify-content-center mt-3 LINK"
  //           >
  //             <FaSignInAlt className="ms-2" />
  //             <span>{buttonTxt}</span>
  //           </Link>
  //         )}
  //       </form>
  //     </div>
  //   </div>
  //   {/* Modal */}
  //   <Modal
  //     id="LoginModal"
  //     title="اخطار !"
  //     bodyTxt="سلام دوستان . شرمنده ! اینجا باید برای شما پیامک میومد . من هم با
  //           کسی که بکندم رو بزنه کار نکردم برای این پروژه . از طرفی هزینه
  //           اضافی داشت پیامک زدن . خب کلا قرار بود بکند من با firebase باشه و
  //           از طریق احراز هویت این سایت شما میتونید وارد سایت بشید باز هم
  //           شرمنده !🙃 برای ورود با ایمیل میتونید با استفاده از دکمه زیر به
  //           صفحه مورد نظر برید :"
  //     btnTxt="باشه بابا"
  //     linkTxt="صفحه ورود با ایمیل"
  //     linkAddress="/loginWE"
  //   />
  //   {/*  */}
  // </LoginWrapper>
  // );
};

export default Login;
