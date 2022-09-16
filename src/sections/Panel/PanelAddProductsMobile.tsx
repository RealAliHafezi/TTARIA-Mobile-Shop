import React, { useState, useRef } from "react";
// components
import Panel_AddProduct_Color from "../../components/Panel/Panel_AddProduct_Color";
import Panel_AddProduct_Picture from "../../components/Panel/Panel_AddProduct_Picture";
// type
interface propsType {
  formik: any;
}
const PanelAddProductsMobile = ({ formik }: propsType) => {
  // for colors
  const [colors, setColors] = useState<Array<string>>([]);
  return (
    <>
      <div className="mb-3 col-3 pe-4">
        <label htmlFor="Panel_Add_memory" className="form-label">
          مموری
        </label>
        <input
          id="Panel_Add_memory"
          type="text"
          className="form-control"
          placeholder="مثلا 16 گیگابایت 💾"
          {...formik.getFieldProps("information.memory")}
        />
      </div>
      <div className="mb-3 col-3 pe-4">
        <label htmlFor="Panel_Add_memoryType" className="form-label">
          نوع مموری
        </label>
        <input
          id="Panel_Add_memoryType"
          type="text"
          className="form-control"
          placeholder="UFC 3.1 مثلا 🖫"
          {...formik.getFieldProps("information.memoryType")}
        />
      </div>
      <div className="mb-3 col-3 pe-4">
        <label htmlFor="Panel_Add_price" className="form-label">
          قیمت
        </label>
        <input
          id="Panel_Add_price"
          type="number"
          className="form-control"
          placeholder="مثلا 2600000 💲"
          {...formik.getFieldProps("information.price")}
        />
      </div>
      <div className="mb-3 col-3 pe-4">
        <label htmlFor="Panel_Add_price" className="form-label">
          وضعیت
        </label>
        <select className="form-select" aria-label="Default select example">
          <option value="true">موجود</option>
          <option value="false">ناموجود</option>
        </select>
      </div>
      <div className="mb-3 col-3 pe-4">
        <label htmlFor="Panel_Add_date" className="form-label">
          تاریخ
        </label>
        <input
          type="date"
          id="Panel_Add_date"
          className="form-control"
          name="date"
          placeholder="مثلا 14 سپتامبر 2021 📆"
        />
      </div>
      <div className="mb-3 col-3 pe-4">
        <label htmlFor="Panel_Add_type" className="form-label">
          نوع
        </label>
        <input
          type="text"
          id="Panel_Add_date"
          className="form-control"
          name="type"
          placeholder="مثلا IPS LCD "
        />
      </div>
      <div className="mb-3 col-6 pe-4">
        <label htmlFor="Panel_Add_sim" className="form-label">
          سیم کارت
        </label>
        <input
          type="text"
          id="Panel_Add_sim"
          className="form-control"
          name="sim"
          placeholder="مثلا دوسیم کارته ( نانوسیم ، همزمان یکی فعال ) 📴"
        />
      </div>
      <div className="mb-3 col-3 pe-4">
        <label htmlFor="Panel_Add_width" className="form-label">
          عرض
        </label>
        <input
          type="number"
          id="Panel_Add_width"
          className="form-control"
          name="width"
          placeholder="مثلا 168"
        />
      </div>
      <div className="mb-3 col-3 pe-4">
        <label htmlFor="Panel_Add_height" className="form-label">
          ضخامت
        </label>
        <input
          type="number"
          id="Panel_Add_height"
          className="form-control"
          name="height"
          placeholder="مثلا 8.9"
        />
      </div>
      <div className="mb-3 col-3 pe-4">
        <label htmlFor="Panel_Add_length" className="form-label">
          طول
        </label>
        <input
          type="number"
          id="Panel_Add_length"
          className="form-control"
          name="length"
          placeholder="مثلا 175"
        />
      </div>
      <div className="mb-3 col-3 pe-4">
        <label htmlFor="Panel_Add_weight" className="form-label">
          وزن
        </label>
        <input
          type="number"
          id="Panel_Add_weight"
          className="form-control"
          name="weight"
          placeholder="مثلا 203"
        />
      </div>
      <div className="mb-3 col-3 pe-4">
        <label htmlFor="formGroupExampleInput" className="form-label">
          تخفیف
        </label>
        <select className="form-select" aria-label="Default select example">
          <option value="1">ندارد</option>
          <option value="2">دارد</option>
        </select>
      </div>
      {/* 
      if have a discount
      */}

      <div className="mb-3 col-3 pe-4">
        <label htmlFor="Panel_Add_off" className="form-label">
          میزان تخفیف
        </label>
        <input
          type="number"
          id="Panel_Add_off"
          className="form-control"
          name="off"
          placeholder="مثلا 8"
          disabled
        />
      </div>
      <Panel_AddProduct_Color />
      <Panel_AddProduct_Picture />
    </>
  );
};

export default PanelAddProductsMobile;
