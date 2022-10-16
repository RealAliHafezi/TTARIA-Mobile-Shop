import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useFormik } from "formik";
import { HandlePanelUpdateProduct } from "./../../redux/PanelEditProductSlice";
// components
import PanelEditProductsCategory from "./PanelProductsCategory";
import Alert from "./../../components/Alert";
import Pending from "./../../components/Pending";
// types
import { Panel_PostProduct_Validate } from "./../../components/ValidationSchema";
interface propsType {
  ID: string;
}
const PanelEditProduct = ({ ID }: propsType) => {
  const dispatch = useAppDispatch();
  const UpdateProductReactions = useAppSelector(
    (state) => state.EditProduct.reactions
  );
  const initialValues = useAppSelector(
    (state) => state.EditProduct.initialValues
  );
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      dispatch(HandlePanelUpdateProduct({ id: ID, values: values }));
    },
    validationSchema: Panel_PostProduct_Validate,
  });
  useEffect(() => {
    formik.setValues(initialValues);
    window.scrollTo(0, 0);
  }, [initialValues]);
  return (
    <section className="Panel_AddProducts position-relative col-10 px-2 py-3">
      <h2 className="text-center mb-4">فرم اضافه کردن کالا</h2>
      <form
        action="have_not_file"
        className="row g-0 w-100"
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <div className="mb-4 col-12 col-md-6 ps-md-2 position-relative">
          <label htmlFor="formGroupExampleInput" className="form-label">
            عنوان محصول (En)
          </label>
          <input
            type="text"
            className={`form-control ${
              formik.touched.PhoneLable &&
              formik.touched.PhoneLable &&
              "ErrorInput"
            }`}
            placeholder="TSCO Desktop TS 2184 Bluetooth Speaker 📡"
            dir="ltr"
            autoComplete="off"
            {...formik.getFieldProps("PhoneLable")}
          />
          {formik.touched.PhoneLable && formik.touched.PhoneLable && (
            <span className="text-danger position-absolute ErrorText">
              {formik.errors.PhoneLable}
            </span>
          )}
        </div>
        <div className="mb-4 col-12 col-md-6 pe-md-2 position-relative">
          <label htmlFor="formGroupExampleInput" className="form-label">
            عنوان محصول
          </label>
          <input
            type="text"
            className={`form-control ${
              formik.touched.PhoneLable &&
              formik.touched.PhoneLable &&
              "ErrorInput"
            }`}
            placeholder="اسپیکر بلوتوثی رومیزی تسکو مدل TS 2184"
            autoComplete="off"
            {...formik.getFieldProps("PhoneLableFa")}
          />
          {formik.touched.PhoneLableFa && formik.touched.PhoneLableFa && (
            <span className="text-danger position-absolute ErrorText">
              {formik.errors.PhoneLableFa}
            </span>
          )}
        </div>
        <div className="mb-4 col-12 col-md-6 ps-md-2 position-relative">
          <label htmlFor="formGroupExampleInput" className="form-label">
            برند محصول (En)
          </label>
          <select
            className={`form-control ${
              formik.touched.PhoneLable &&
              formik.touched.PhoneLable &&
              "ErrorInput"
            }`}
            {...formik.getFieldProps("brand")}
            aria-label="Default select example"
          >
            <option value="samsung">samsung</option>
            <option value="xiaomi">xiaomi</option>
            <option value="apple">apple</option>
            <option value="Watch">Watch</option>
            <option value="Speaker">Speaker</option>
          </select>
          {formik.touched.brand && formik.touched.brand && (
            <span className="text-danger position-absolute ErrorText">
              {formik.errors.brand}
            </span>
          )}
        </div>
        <div className="mb-4 col-12 col-md-6 pe-md-2 position-relative">
          <label htmlFor="formGroupExampleInput" className="form-label">
            برند محصول
          </label>
          <select
            className={`form-control ${
              formik.touched.PhoneLable &&
              formik.touched.PhoneLable &&
              "ErrorInput"
            }`}
            {...formik.getFieldProps("brandFa")}
            aria-label="Default select example"
          >
            <option value="سامسونگ">سامسونگ</option>
            <option value="شیائومی">شیائومی</option>
            <option value="اپل">اپل</option>
            <option value="ساعت">ساعت</option>
            <option value="اسپیکر">اسپیکر</option>
          </select>
          {formik.touched.brandFa && formik.touched.brandFa && (
            <span className="text-danger position-absolute ErrorText">
              {formik.errors.brandFa}
            </span>
          )}
        </div>
        <div className="mb-4 col-12 col-md-3 ps-md-4 position-relative">
          <label htmlFor="formGroupExampleInput" className="form-label">
            نوع محصول
          </label>
          <select
            className={`form-control ${
              formik.touched.PhoneLable &&
              formik.touched.PhoneLable &&
              "ErrorInput"
            }`}
            {...formik.getFieldProps("productName")}
            aria-label="Default select example"
          >
            <option value="Mobile">Mobile</option>
            <option value="Watch">Watch</option>
            <option value="Speaker">Speaker</option>
          </select>
          {formik.touched.productName && formik.touched.productName && (
            <span className="text-danger position-absolute ErrorText">
              {formik.errors.productName}
            </span>
          )}
        </div>
        <div className="mb-4 col-12 col-md-9 pe-md-4 position-relative">
          <label htmlFor="formGroupExampleInput" className="form-label">
            آیدی محصول
          </label>
          <input
            type="text"
            className={`form-control ${
              formik.touched.PhoneLable &&
              formik.touched.PhoneLable &&
              "ErrorInput"
            }`}
            placeholder="این بخش بعد از وارد کردن عنوان محصول ، خودکار وارد میشود"
            autoComplete="off"
            {...formik.getFieldProps("id")}
          />
          {formik.touched.id && formik.touched.id && (
            <span className="text-danger position-absolute ErrorText">
              {formik.errors.information?.memory}
            </span>
          )}
        </div>
        <hr className="bg-warning" />
        <h4 className="text-center mb-4">جزئیات</h4>
        {formik.values.productName === `Mobile` && (
          <PanelEditProductsCategory
            formik={formik}
            memory={true}
            date={true}
            type={true}
            sim={true}
            size={true}
          />
        )}
        {formik.values.productName === "Speaker" && (
          <PanelEditProductsCategory
            formik={formik}
            memory={false}
            date={false}
            type={false}
            sim={false}
            size={false}
          />
        )}
        {formik.values.productName === "Watch" && (
          <PanelEditProductsCategory
            formik={formik}
            memory={false}
            date={true}
            type={false}
            sim={true}
            size={false}
          />
        )}
        <button
          type="submit"
          className="btn btn-success"
          disabled={UpdateProductReactions.pending}
          onClick={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          ثبت تغییرات
        </button>
      </form>
      {/* pending when posting product */}
      {UpdateProductReactions.pending && <Pending />}
      {/* when posting is success or rejecting */}
      {UpdateProductReactions.success && (
        <Alert
          bg="success"
          title="پیام جدید"
          massage="محصول شما با موفقیت بروزرسانی شد 😉"
          bottom="30px"
          right="10px"
          time={5000}
        />
      )}
      {UpdateProductReactions.reject && (
        <Alert
          bg="danger"
          title="پیام جدید"
          massage="عمیلات بروزرسانی با خطا مواجه شد 🚩"
          bottom="30px"
          right="10px"
          time={4000}
        />
      )}
      {/*  */}
    </section>
  );
};

export default PanelEditProduct;
