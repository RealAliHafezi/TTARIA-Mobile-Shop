import React from "react";

const PanelAddProductsMobile = () => {
  return (
    <>
      <div className="mb-3 col-6 pe-4">
        <label htmlFor="Panel_Add_memory" className="form-label">
          مموری
        </label>
        <input
          id="Panel_Add_memory"
          type="text"
          className="form-control"
          name="memory"
          placeholder="مثلا 16 گیگابایت 💾"
        />
      </div>
      <div className="mb-3 col-6 pe-4">
        <label htmlFor="Panel_Add_memoryType" className="form-label">
          نوع مموری
        </label>
        <input
          id="Panel_Add_memoryType"
          type="text"
          className="form-control"
          name="memoryType"
          placeholder="UFC 3.1 مثلا 🖫"
        />
      </div>
      <div className="mb-3 col-6 pe-4">
        <label htmlFor="Panel_Add_price" className="form-label">
          قیمت
        </label>
        <input
          id="Panel_Add_price"
          type="number"
          className="form-control"
          name="price"
          placeholder="مثلا 2600000 💲"
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
      <div className="mb-3 col-6 pe-4">
        <label htmlFor="Panel_Add_date" className="form-label">
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
        <label htmlFor="Panel_Add_date" className="form-label">
          طول
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
        <label htmlFor="Panel_Add_date" className="form-label">
        
        </label>
        <input
          type="number"
          id="Panel_Add_width"
          className="form-control"
          name="width"
          placeholder="مثلا 168"
        />
      </div>
    </>
  );
};

export default PanelAddProductsMobile;
