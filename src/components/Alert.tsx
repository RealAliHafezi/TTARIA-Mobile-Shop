import React, { useState } from "react";
// icon
import { AiOutlineClose } from "./../assets/icons/icons";
// type
interface propsType {
  bottom: string;
  right: string;
  bg: string;
  title: string;
  massage: string;
  time: number;
}
const Alert = ({ bottom, right, bg, title, massage, time }: propsType) => {
  const [show, setShow] = useState<boolean>(true);
  setTimeout(() => {
    setShow(false);
  }, time);
  return (
    <div
      className={`alert alert-${bg} alert-dismissible d-flex align-items-center justify-content-end position-absolute fade ${
        show && "show"
      } py-1`}
      role="alert"
      style={{ bottom: bottom, right: right }}
    >
      <span>
        <strong>{title}!</strong> {massage}
      </span>
      <button
        type="button"
        className="btn fs-5 mx-1"
        data-bs-dismiss="alert"
        aria-label="Close"
      >
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default Alert;
