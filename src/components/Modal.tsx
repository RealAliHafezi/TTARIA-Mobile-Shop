import React from "react";
import { Link } from "react-router-dom";
// type
interface propsType {
  title: string;
  linkTxt: string;
  linkAddress: string;
  btnTxt: string;
  bodyTxt: string;
  id: string;
}
const Modal = ({
  title,
  linkTxt,
  linkAddress,
  btnTxt,
  bodyTxt,
  id,
}: propsType) => {
  return (
    <div
      className="modal fade"
      id={`${id}`}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {title}
            </h5>
          </div>
          <div className="modal-body">
            <p>{bodyTxt}</p>
            {linkAddress.length >= 1 && (
              <button
                data-bs-dismiss="modal"
                className=" btn btn-sm btn-success"
              >
                <Link to={`${linkAddress}`} className="LINK">
                  {linkTxt}
                </Link>
              </button>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              {btnTxt}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
