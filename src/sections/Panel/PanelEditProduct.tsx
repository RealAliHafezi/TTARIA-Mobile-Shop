import React, { useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useFormik } from "formik";

const PanelEditProduct = () => {
  const initialValues = useAppSelector(
    (state) => state.EditProduct.initialValues
  );
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  useEffect(() => {
    formik.setValues(initialValues);
  }, [initialValues]);
  return formik.values ? (
    <div className="mb-4 col-12 col-md-6 pe-md-2 position-relative">
      <label htmlFor="formGroupExampleInput" className="form-label">
        عنوان محصول
      </label>
      <input
        type="text"
        className={`form-control ${
          formik.touched.PhoneLable && formik.touched.PhoneLable && "ErrorInput"
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
  ) : (
    <></>
  );
};

export default PanelEditProduct;
