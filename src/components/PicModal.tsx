import React, { useState, useEffect } from "react";
// style
import "./../styles/scss/components/PicModal.scss";
// types
interface propsType {
  URL: string;
  formik: any;
  index: number;
}
const PicModal = ({ URL, formik, index }: propsType) => {
  const [picUrl, setPicUrl] = useState<string>("");
  // a function for changing image url
  const handleChangePicture = () => {
    const newFilteredBanners = formik.values.information.banners.filter(
      (pic: string) => pic !== URL
    );
    formik.setValues({
      ...formik.values,
      information: {
        ...formik.values.information,
        banners: [...newFilteredBanners, picUrl],
      },
    });
  };
  const handleRemovePicture = () => {
    const newFilteredBanners = formik.values.information.banners.filter(
      (pic: string) => pic !== URL
    );
    formik.setValues({
      ...formik.values,
      information: {
        ...formik.values.information,
        banners: newFilteredBanners,
      },
    });
  };
  useEffect(() => {
    setPicUrl(URL);
  }, []);
  return (
    <div
      className="PicModal modal fade"
      id={`PicModal_${index}`}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body w-100 h-100">
            <div className="PicModal_ImageBox">
              <img src={picUrl} alt="عکسی موجود نیست" className="w-100 h-100" />
            </div>
            <label htmlFor="url" className="form-label">
              آدرس عکس :
            </label>
            <input
              name="url"
              type="text"
              className="form-control"
              value={picUrl}
              onChange={(e) => setPicUrl(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              بستن
            </button>
            <button
              type="button"
              className="btn btn-primary"
              disabled={picUrl.length <= 5}
              data-bs-dismiss="modal"
              onClick={(e) => {
                e.preventDefault();
                handleChangePicture();
              }}
            >
              ذخیره
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={(e) => {
                e.preventDefault();
                handleRemovePicture();
              }}
            >
              حذف
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PicModal;
