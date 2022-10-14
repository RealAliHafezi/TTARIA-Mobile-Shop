import React from "react";
// components
import PanelColor from "../../components/Panel/PanelColor";
import PanelPicture from "../../components/Panel/PanelPicture";
// type
interface propsType {
  formik: any;
  memory: boolean;
  date: boolean;
  sim: boolean;
  type: boolean;
  size: boolean;
}
const PanelEditProductsCategory = ({
  formik,
  memory,
  date,
  sim,
  type,
  size,
}: propsType) => {
  return (
    <React.Fragment>
      {memory && (
        <>
          <div className="mb-4 col-12 col-sm-6 col-md-3 position-relative">
            <label htmlFor="Panel_Add_memory" className="form-label">
              مموری
            </label>
            <input
              id="Panel_Add_memory"
              type="text"
              className={`form-control ${
                formik.touched.PhoneLable &&
                formik.touched.PhoneLable &&
                "ErrorInput"
              }`}
              placeholder="مثلا 16 گیگابایت 💾"
              autoComplete="off"
              {...formik.getFieldProps("information.memory")}
            />
            {formik.touched.information?.memory &&
              formik.errors.information?.memory && (
                <span className="text-danger position-absolute ErrorText">
                  {formik.errors.information?.memory}
                </span>
              )}
          </div>
          <div className="mb-4 col-12 col-sm-6 col-md-3 pe-sm-2 position-relative">
            <label htmlFor="Panel_Add_memoryType" className="form-label">
              نوع مموری
            </label>
            <input
              id="Panel_Add_memoryType"
              type="text"
              className={`form-control ${
                formik.touched.PhoneLable &&
                formik.touched.PhoneLable &&
                "ErrorInput"
              }`}
              placeholder="UFC 3.1 مثلا 🖫"
              autoComplete="off"
              {...formik.getFieldProps("information.memoryType")}
            />
            {formik.touched.information?.memoryType &&
              formik.errors.information?.memoryType && (
                <span className="text-danger position-absolute ErrorText">
                  {formik.errors.information?.memoryType}
                </span>
              )}
          </div>
        </>
      )}
      <div className="mb-4 col-12 col-sm-6 col-md-3 pe-md-2 position-relative">
        <label htmlFor="Panel_Add_price" className="form-label">
          قیمت
        </label>
        <input
          id="Panel_Add_price"
          type="number"
          className={`form-control ${
            formik.touched.PhoneLable &&
            formik.touched.PhoneLable &&
            "ErrorInput"
          }`}
          placeholder="مثلا 2600000 💲"
          autoComplete="off"
          min={0}
          {...formik.getFieldProps("information.price")}
        />
        {formik.touched.information?.price &&
          formik.errors.information?.price && (
            <span className="text-danger position-absolute ErrorText">
              {formik.errors.information?.price}
            </span>
          )}
      </div>
      <div className="mb-4 col-12 col-sm-6 col-md-3 pe-sm-2 position-relative">
        <label htmlFor="Panel_Add_price" className="form-label">
          وضعیت
        </label>
        <select
          className={`form-control ${
            formik.touched.PhoneLable &&
            formik.touched.PhoneLable &&
            "ErrorInput"
          }`}
          aria-label="Default select example"
          {...formik.getFieldProps("information.Inventory")}
        >
          <option value="true">موجود</option>
          <option value="false">ناموجود</option>
        </select>
        {formik.touched.information?.Inventory &&
          formik.errors.information?.Inventory && (
            <span className="text-danger position-absolute ErrorText">
              {formik.errors.information?.Inventory}
            </span>
          )}
      </div>
      {date && (
        <div className="mb-4 col-12 col-sm-6 col-md-3 position-relative">
          <label htmlFor="Panel_Add_date" className="form-label">
            تاریخ
          </label>
          <input
            type="date"
            id="Panel_Add_date"
            className={`form-control ${
              formik.touched.PhoneLable &&
              formik.touched.PhoneLable &&
              "ErrorInput"
            }`}
            placeholder="مثلا 14 سپتامبر 2021 📆"
            autoComplete="off"
            {...formik.getFieldProps("information.date")}
          />
          {formik.touched.information?.date &&
            formik.errors.information?.date && (
              <span className="text-danger position-absolute ErrorText">
                {formik.errors.information?.date}
              </span>
            )}
        </div>
      )}
      {type && (
        <div className="mb-4 col-12 col-sm-6 col-md-3 pe-sm-2 position-relative">
          <label htmlFor="Panel_Add_type" className="form-label">
            نوع
          </label>
          <input
            type="text"
            id="Panel_Add_date"
            className={`form-control ${
              formik.touched.PhoneLable &&
              formik.touched.PhoneLable &&
              "ErrorInput"
            }`}
            placeholder="مثلا IPS LCD "
            autoComplete="off"
            {...formik.getFieldProps("information.type")}
          />
          {formik.touched.information?.type &&
            formik.errors.information?.type && (
              <span className="text-danger position-absolute ErrorText">
                {formik.errors.information?.type}
              </span>
            )}
        </div>
      )}
      {sim && (
        <div className="mb-4 col-12 col-sm-6 pe-md-2 position-relative">
          <label htmlFor="Panel_Add_sim" className="form-label">
            سیم کارت
          </label>
          <input
            type="text"
            id="Panel_Add_sim"
            className={`form-control ${
              formik.touched.PhoneLable &&
              formik.touched.PhoneLable &&
              "ErrorInput"
            }`}
            placeholder="مثلا دوسیم کارته ( نانوسیم ، همزمان یکی فعال ) 📴"
            autoComplete="off"
            {...formik.getFieldProps("information.sim")}
          />
          {formik.touched.information?.sim &&
            formik.errors.information?.sim && (
              <span className="text-danger position-absolute ErrorText">
                {formik.errors.information?.sim}
              </span>
            )}
        </div>
      )}
      {size && (
        <>
          <div className="mb-4 col-12 col-sm-6 col-md-3 position-relative">
            <label htmlFor="Panel_Add_width" className="form-label">
              عرض
            </label>
            <input
              type="number"
              id="Panel_Add_width"
              className={`form-control ${
                formik.touched.PhoneLable &&
                formik.touched.PhoneLable &&
                "ErrorInput"
              }`}
              placeholder="مثلا 168"
              autoComplete="off"
              min={0}
              {...formik.getFieldProps("information.width")}
            />
            {formik.touched.information?.width &&
              formik.errors.information?.width && (
                <span className="text-danger position-absolute ErrorText">
                  {formik.errors.information?.width}
                </span>
              )}
          </div>
          <div className="mb-4 col-12 col-sm-6 col-md-3 pe-md-2 position-relative">
            <label htmlFor="Panel_Add_height" className="form-label">
              ضخامت
            </label>
            <input
              type="number"
              id="Panel_Add_height"
              className={`form-control ${
                formik.touched.PhoneLable &&
                formik.touched.PhoneLable &&
                "ErrorInput"
              }`}
              placeholder="مثلا 8.9"
              autoComplete="off"
              min={0}
              {...formik.getFieldProps("information.height")}
            />
            {formik.touched.information?.height &&
              formik.errors.information?.height && (
                <span className="text-danger position-absolute ErrorText">
                  {formik.errors.information?.height}
                </span>
              )}
          </div>
          <div className="mb-4 col-12 col-sm-6 col-md-3 pe-sm-2 position-relative">
            <label htmlFor="Panel_Add_length" className="form-label">
              طول
            </label>
            <input
              type="number"
              id="Panel_Add_length"
              className={`form-control ${
                formik.touched.PhoneLable &&
                formik.touched.PhoneLable &&
                "ErrorInput"
              }`}
              placeholder="مثلا 175"
              autoComplete="off"
              min={0}
              {...formik.getFieldProps("information.length")}
            />
            {formik.touched.information?.length &&
              formik.errors.information?.length && (
                <span className="text-danger position-absolute ErrorText">
                  {formik.errors.information?.length}
                </span>
              )}
          </div>
        </>
      )}
      <div className="mb-4 col-12 col-sm-6 col-md-3 pe-md-2 position-relative">
        <label htmlFor="Panel_Add_weight" className="form-label">
          وزن
        </label>
        <input
          type="number"
          id="Panel_Add_weight"
          className={`form-control ${
            formik.touched.PhoneLable &&
            formik.touched.PhoneLable &&
            "ErrorInput"
          }`}
          placeholder="مثلا 203"
          autoComplete="off"
          min={0}
          {...formik.getFieldProps("information.weight")}
        />
        {formik.touched.information?.weight &&
          formik.errors.information?.weight && (
            <span className="text-danger position-absolute ErrorText">
              {formik.errors.information?.weight}
            </span>
          )}
      </div>
      <div className="mb-4 col-12 col-sm-6 col-md-3 pe-md-2 position-relative">
        <label htmlFor="formGroupExampleInput" className="form-label">
          تخفیف
        </label>
        <select
          className={`form-control ${
            formik.touched.PhoneLable &&
            formik.touched.PhoneLable &&
            "ErrorInput"
          }`}
          aria-label="Default select example"
          {...formik.getFieldProps("information.discount")}
        >
          <option value="false">ندارد</option>
          <option value="true">دارد</option>
        </select>
        {formik.touched.information?.discount &&
          formik.errors.information?.discount && (
            <span className="text-danger position-absolute ErrorText">
              {formik.errors.information?.discount}
            </span>
          )}
      </div>

      <div className="mb-4 col-12 col-sm-6 col-md-3 pe-md-2 position-relative">
        <label htmlFor="Panel_Add_off" className="form-label">
          میزان تخفیف
        </label>
        <input
          type="number"
          id="Panel_Add_off"
          className={`form-control ${
            formik.touched.PhoneLable &&
            formik.touched.PhoneLable &&
            "ErrorInput"
          }`}
          placeholder="مثلا 8"
          disabled={!JSON.parse(formik.values.information.discount)}
          min={0}
          autoComplete="off"
          {...formik.getFieldProps("information.off")}
        />
        {formik.touched.information?.off && formik.errors.information?.off && (
          <span className="text-danger position-absolute ErrorText">
            {formik.errors.information?.off}
          </span>
        )}
      </div>
      <PanelColor formik={formik} />
      <PanelPicture formik={formik} />
    </React.Fragment>
  );
};

export default PanelEditProductsCategory;
