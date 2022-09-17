import React, { useRef, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useAppSelector } from "../../redux/hooks";
// components
import PanelAddProductsMobile from "./PanelAddProductsMobile";
// style
import "./../../styles/scss/Panel/PanelAddProducts.scss";
// type
import { ProductsType } from "./../../assets/Types";

const PanelAddProduct = () => {
  const [AutoIDCheckBox, setAutoID] = useState<boolean>(true);
  const PhoneLabelRefForID = useRef<HTMLInputElement>(null);
  // is in initialValues , but there is another page , for that , i write that in redux-toolkit , and give from redux-toolkit-state
  const pictures = useAppSelector((state) => state.AddProductState.pictures);
  const colors = useAppSelector((state) => state.AddProductState.colors);
  const formik = useFormik<ProductsType>({
    initialValues: {
      productName: "",
      productNameFa: "",
      PhoneLable: "",
      PhoneLableFa: "",
      brand: "samsung",
      brandFa: "",
      id: "",
      information: {
        memory: "",
        memoryType: "",
        price: 1,
        Inventory: true,
        date: "",
        type: "",
        length: 1,
        width: 1,
        weight: 1,
        height: 1,
        sim: "",
        colors: [],
        colorsEn: [],
        discount: false,
        off: 0,
        banner: "",
        banners: [],
      },
    },
    onSubmit: (values) => {
      // so pictures and colors are array and i give these array and == initialValues.information.banners || colors and others
      values.information.banners = [...pictures];
      values.information = { ...values.information, banner: pictures[0] };
      values.information.colorsEn = [...colors];
      if (AutoIDCheckBox && PhoneLabelRefForID.current?.value.length) {
        values = {
          ...values,
          id: PhoneLabelRefForID.current?.value
            .trim()
            .toUpperCase()
            .split(" ")
            .join("_"),
        };
      }
      //
      console.log(values);
    },
    validationSchema: Yup.object({}),
  });
  return (
    <section className="Panel_AddProducts col-10 px-4 py-3">
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
            onChange={(e) => {
              e.preventDefault();
              // this code is true and worked , but i dont know ts what it wants from me
              formik.values.brand = e.target.value;
              console.log(e.target.value);
            }}
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
            onChange={(e) => {
              e.preventDefault();
              // this code is true and worked , but i dont know ts what it wants from me
              formik.values.brandFa = e.target.value;
              console.log(e.target.value);
            }}
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
            onChange={(e) => {
              e.preventDefault();
              formik.values.productName = `${e.target.value}`;
            }}
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
        <PanelAddProductsMobile formik={formik} />
        <button
          className="btn btn-success"
          onClick={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          ثبت
        </button>
      </form>
    </section>
  );
};

export default PanelAddProduct;
