import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
// style
import "./../../styles/scss/Panel/PanelAddProducts.scss";
import PanelAddProductsMobile from "./PanelAddProductsMobile";
// type
import { ProductsType } from "../../assets/Types";
const PanelAddProduct = () => {
  const [AutoIDCheckBox, setAutoID] = useState<boolean>(true);
  const formik = useFormik({
    initialValues: {
      ProductsName: "",
      ProductNameFa: "",
      PhoneLable: "",
      PhoneLableFa: "",
      brand: "",
      brandFa: "",
      id: "",
      information: {
        memory: "",
        memoryType: "",
        price: 0,
        Inventory: true,
        date: "",
        type: "",
        length: 0,
        width: 0,
        weight: 0,
        height: 0,
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
        <div className="mb-3 col-6 ps-2">
          <label htmlFor="formGroupExampleInput" className="form-label">
            عنوان محصول (En)
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="TSCO Desktop TS 2184 Bluetooth Speaker 📡"
            dir="ltr"
            {...formik.getFieldProps("PhoneLable")}
            // onFocus={(e)=> e.}
            // onBlur={()=> }
          />
        </div>
        <div className="mb-3 col-6 pe-2">
          <label htmlFor="formGroupExampleInput" className="form-label">
            عنوان محصول
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="اسپیکر بلوتوثی رومیزی تسکو مدل TS 2184"
            {...formik.getFieldProps("PhoneLableFa")}
          />
        </div>
        <div className="mb-3 col-6 ps-2">
          <label htmlFor="formGroupExampleInput" className="form-label">
            برند محصول (En)
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="TSCO 📡"
            dir="ltr"
            {...formik.getFieldProps("brand")}
          />
        </div>
        <div className="mb-3 col-6 pe-2">
          <label htmlFor="formGroupExampleInput" className="form-label">
            برند محصول
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="تسکو"
            {...formik.getFieldProps("brandFa")}
          />
        </div>
        <div className="mb-3 col-3 ps-4">
          <label htmlFor="formGroupExampleInput" className="form-label">
            نوع محصول
          </label>
          <select className="form-select" aria-label="Default select example">
            <option value="1">Mobile</option>
            <option value="2">Watch</option>
            <option value="3">Speaker</option>
          </select>
        </div>
        <div className="mb-3 col-9 pe-4">
          <label htmlFor="formGroupExampleInput" className="form-label">
            آیدی محصول
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="این بخش بعد از وارد کردن عنوان محصول ، خودکار وارد میشود"
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
