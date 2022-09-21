import React, { useRef, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { PanelAddProductPost } from "../../redux/PanelAddProductSlice";
import { handleResetAll } from "../../redux/Panel_AddproductSlice";
// components
import PanelAddProductsCategory from "./PanelAddProductsCategory";
// style
import "./../../styles/scss/Panel/PanelAddProducts.scss";
// type
import { ProductsType } from "./../../assets/Types";
import Alert from "./../../components/Alert";
import Pending from "../../components/Pending";

const PanelAddProduct = () => {
  const dispatch = useAppDispatch();
  const initialValues = useAppSelector(
    (state) => state.AddProduct.initialValues
  );
  const postingProductReactions = useAppSelector(
    (state) => state.AddProduct.reactions
  );
  const [AutoIDCheckBox, setAutoID] = useState<boolean>(true);
  const PhoneLabelRefForID = useRef<HTMLInputElement>(null);
  // is in initialValues , but there is another page , for that , i write that in redux-toolkit , and give from redux-toolkit-state
  const pictures = useAppSelector((state) => state.AddProductState.pictures);
  const colors = useAppSelector((state) => state.AddProductState.colors);
  const formik = useFormik<ProductsType>({
    initialValues,
    onSubmit: (values) => {
      values = {
        ...values,
        id:
          AutoIDCheckBox && PhoneLabelRefForID.current?.value.length
            ? PhoneLabelRefForID.current?.value
                .trim()
                .toUpperCase()
                .split(" ")
                .join("_")
            : "",
        information: {
          ...values.information,
          colors: [...colors],
          banners: [...pictures],
        },
      };
      dispatch(PanelAddProductPost(values));
      postingProductReactions.success && dispatch(handleResetAll());
      postingProductReactions.success && formik.setValues(initialValues);
    },
    validationSchema: Yup.object({}),
  });

  return (
    <section className="Panel_AddProducts position-relative col-10 px-4 py-3">
      <h2 className="text-center mb-3">فرم اضافه کردن کالا</h2>
      <form
        action=""
        className="row g-0 w-100"
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <div className="mb-3 col-12 col-md-6 ps-md-2">
          <label htmlFor="formGroupExampleInput" className="form-label">
            عنوان محصول (En)
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="TSCO Desktop TS 2184 Bluetooth Speaker 📡"
            dir="ltr"
            autoComplete="off"
            ref={PhoneLabelRefForID}
            {...formik.getFieldProps("PhoneLable")}
          />
        </div>
        <div className="mb-3 col-12 col-md-6 pe-md-2">
          <label htmlFor="formGroupExampleInput" className="form-label">
            عنوان محصول
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="اسپیکر بلوتوثی رومیزی تسکو مدل TS 2184"
            autoComplete="off"
            {...formik.getFieldProps("PhoneLableFa")}
          />
        </div>
        <div className="mb-3 col-12 col-md-6 ps-md-2">
          <label htmlFor="formGroupExampleInput" className="form-label">
            برند محصول (En)
          </label>
          <select
            className="form-select"
            {...formik.getFieldProps("brand")}
            aria-label="Default select example"
          >
            <option value="samsung">samsung</option>
            <option value="xiaomi">xiaomi</option>
            <option value="apple">apple</option>
            <option value="Watch">Watch</option>
            <option value="Speaker">Speaker</option>
          </select>
        </div>
        <div className="mb-3 col-12 col-md-6 pe-md-2">
          <label htmlFor="formGroupExampleInput" className="form-label">
            برند محصول
          </label>
          <select
            className="form-select"
            {...formik.getFieldProps("brandFa")}
            aria-label="Default select example"
          >
            <option value="سامسونگ">سامسونگ</option>
            <option value="شیائومی">شیائومی</option>
            <option value="اپل">اپل</option>
            <option value="ساعت">ساعت</option>
            <option value="اسپیکر">اسپیکر</option>
          </select>
        </div>
        <div className="mb-3 col-12 col-md-3 ps-md-4">
          <label htmlFor="formGroupExampleInput" className="form-label">
            نوع محصول
          </label>
          <select
            className="form-select"
            {...formik.getFieldProps("productName")}
            aria-label="Default select example"
          >
            <option value="Mobile">Mobile</option>
            <option value="Watch">Watch</option>
            <option value="Speaker">Speaker</option>
          </select>
        </div>
        <div className="mb-3 col-12 col-md-9 pe-md-4">
          <label htmlFor="formGroupExampleInput" className="form-label">
            آیدی محصول
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="این بخش بعد از وارد کردن عنوان محصول ، خودکار وارد میشود"
            autoComplete="off"
            disabled={AutoIDCheckBox}
            {...formik.getFieldProps("id")}
          />
          <div className="form-check form-switch mt-2">
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            >
              آیدی خودکار
            </label>
            <input
              className="form-check-input float-none me-2"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              defaultChecked={true}
              onChange={(e) => setAutoID(e.target.checked)}
            />
          </div>
        </div>
        <hr className="bg-warning" />
        <h4 className="text-center mb-3">جزئیات</h4>
        {formik.values.productName === `Mobile` && (
          <PanelAddProductsCategory
            formik={formik}
            memory={true}
            date={true}
            type={true}
            sim={true}
            size={true}
          />
        )}
        {formik.values.productName === "Speaker" && (
          <PanelAddProductsCategory
            formik={formik}
            memory={false}
            date={false}
            type={false}
            sim={false}
            size={false}
          />
        )}
        {formik.values.productName === "Watch" && (
          <PanelAddProductsCategory
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
          disabled={postingProductReactions.pending}
          onClick={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          ثبت
        </button>
      </form>
      {/* pending when posting product */}
      {postingProductReactions.pending && <Pending />}
      {/* when posting is success or rejecting */}
      {postingProductReactions.success && (
        <Alert
          bg="success"
          title="پیام جدید"
          massage="محصول شما با موفقیت ذخیره شد 😉"
          bottom="30px"
          right="10px"
          time={5000}
        />
      )}
      {postingProductReactions.reject && (
        <Alert
          bg="danger"
          title="پیام جدید"
          massage="عمیلات با خطا مواجه شد 🚩"
          bottom="30px"
          right="10px"
          time={4000}
        />
      )}
      {/*  */}
    </section>
  );
};

export default PanelAddProduct;
