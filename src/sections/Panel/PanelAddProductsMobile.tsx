import React, { useState } from "react";
// components
import Panel_AddProduct_Color from "../../components/Panel/Panel_AddProduct_Color";
import Panel_AddProduct_Picture from "../../components/Panel/Panel_AddProduct_Picture";
// type
interface propsType {
  formik: any;
}
const PanelAddProductsMobile = ({ formik }: propsType) => {
  const [DiscountSelect, setDiscountSelect] = useState<boolean>(true);
  return (
    <>
      <div className="mb-3 col-12 col-sm-6 col-md-3 pe-sm-4">
        <label htmlFor="Panel_Add_memory" className="form-label">
          مموری
        </label>
        <input
          id="Panel_Add_memory"
          type="text"
          className="form-control"
          placeholder="مثلا 16 گیگابایت 💾"
          autoComplete="off"
          {...formik.getFieldProps("information.memory")}
        />
      </div>
      <div className="mb-3 col-12 col-sm-6 col-md-3 pe-sm-4">
        <label htmlFor="Panel_Add_memoryType" className="form-label">
          نوع مموری
        </label>
        <input
          id="Panel_Add_memoryType"
          type="text"
          className="form-control"
          placeholder="UFC 3.1 مثلا 🖫"
          autoComplete="off"
          {...formik.getFieldProps("information.memoryType")}
        />
      </div>
      <div className="mb-3 col-12 col-sm-6 col-md-3 pe-sm-4">
        <label htmlFor="Panel_Add_price" className="form-label">
          قیمت
        </label>
        <input
          id="Panel_Add_price"
          type="number"
          className="form-control"
          placeholder="مثلا 2600000 💲"
          autoComplete="off"
          min={0}
          {...formik.getFieldProps("information.price")}
        />
      </div>
      <div className="mb-3 col-12 col-sm-6 col-md-3 pe-sm-4">
        <label htmlFor="Panel_Add_price" className="form-label">
          وضعیت
        </label>
        <select
          onChange={(e) => {
            e.preventDefault();
            formik.values.information.Inventory = JSON.parse(e.target.value);
          }}
          className="form-select"
          aria-label="Default select example"
        >
          <option value="true">موجود</option>
          <option value="false">ناموجود</option>
        </select>
      </div>
      <div className="mb-3 col-12 col-sm-6 col-md-3 pe-sm-4">
        <label htmlFor="Panel_Add_date" className="form-label">
          تاریخ
        </label>
        <input
          type="date"
          id="Panel_Add_date"
          className="form-control"
          placeholder="مثلا 14 سپتامبر 2021 📆"
          autoComplete="off"
          {...formik.getFieldProps("information.date")}
        />
      </div>
      <div className="mb-3 col-12 col-sm-6 col-md-3 pe-sm-4">
        <label htmlFor="Panel_Add_type" className="form-label">
          نوع
        </label>
        <input
          type="text"
          id="Panel_Add_date"
          className="form-control"
          placeholder="مثلا IPS LCD "
          autoComplete="off"
          {...formik.getFieldProps("information.type")}
        />
      </div>
      <div className="mb-3 col-12 col-sm-6 pe-sm-4">
        <label htmlFor="Panel_Add_sim" className="form-label">
          سیم کارت
        </label>
        <input
          type="text"
          id="Panel_Add_sim"
          className="form-control"
          placeholder="مثلا دوسیم کارته ( نانوسیم ، همزمان یکی فعال ) 📴"
          autoComplete="off"
          {...formik.getFieldProps("information.sim")}
        />
      </div>
      <div className="mb-3 col-12 col-sm-6 col-md-3 pe-sm-4">
        <label htmlFor="Panel_Add_width" className="form-label">
          عرض
        </label>
        <input
          type="number"
          id="Panel_Add_width"
          className="form-control"
          placeholder="مثلا 168"
          autoComplete="off"
          min={0}
          {...formik.getFieldProps("information.width")}
        />
      </div>
      <div className="mb-3 col-12 col-sm-6 col-md-3 pe-sm-4">
        <label htmlFor="Panel_Add_height" className="form-label">
          ضخامت
        </label>
        <input
          type="number"
          id="Panel_Add_height"
          className="form-control"
          placeholder="مثلا 8.9"
          autoComplete="off"
          min={0}
          {...formik.getFieldProps("information.height")}
        />
      </div>
      <div className="mb-3 col-12 col-sm-6 col-md-3 pe-sm-4">
        <label htmlFor="Panel_Add_length" className="form-label">
          طول
        </label>
        <input
          type="number"
          id="Panel_Add_length"
          className="form-control"
          placeholder="مثلا 175"
          autoComplete="off"
          min={0}
          {...formik.getFieldProps("information.length")}
        />
      </div>
      <div className="mb-3 col-12 col-sm-6 col-md-3 pe-sm-4">
        <label htmlFor="Panel_Add_weight" className="form-label">
          وزن
        </label>
        <input
          type="number"
          id="Panel_Add_weight"
          className="form-control"
          placeholder="مثلا 203"
          autoComplete="off"
          min={0}
          {...formik.getFieldProps("information.weight")}
        />
      </div>
      <div className="mb-3 col-12 col-sm-6 col-md-3 pe-sm-4">
        <label htmlFor="formGroupExampleInput" className="form-label">
          تخفیف
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => {
            e.preventDefault();
            setDiscountSelect(!JSON.parse(e.target.value));
            formik.values.information.discount = JSON.parse(e.target.value);
          }}
        >
          <option value="false" selected>
            ندارد
          </option>
          <option value="true">دارد</option>
        </select>
      </div>
      {/* 
      if have a discount
      */}

      <div className="mb-3 col-12 col-sm-6 col-md-3 pe-sm-4">
        <label htmlFor="Panel_Add_off" className="form-label">
          میزان تخفیف
        </label>
        <input
          type="number"
          id="Panel_Add_off"
          className="form-control"
          placeholder="مثلا 8"
          disabled={DiscountSelect}
          min={0}
          autoComplete="off"
          {...formik.getFieldProps("information.off")}
        />
      </div>
      <Panel_AddProduct_Color />
      <Panel_AddProduct_Picture />
    </>
  );
};

export default PanelAddProductsMobile;
