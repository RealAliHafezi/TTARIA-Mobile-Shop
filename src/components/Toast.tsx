import React from "react";
// img
import { MyLogo } from "../assets/image/Images";
// types
interface propsType {
  right: string;
  bottom: string;
  title: string;
  color: string;
  massage: string;
  toasting: boolean;
}
const Toast = ({
  right,
  bottom,
  title,
  color,
  massage,
  toasting,
}: propsType) => {
  return (
    <>
      <div
        className={`toast position-absolute ${toasting && "show"}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        style={{ right: right, bottom: bottom }}
      >
        <div className={`toast-header ${color}`}>
          <img
            src={MyLogo}
            style={{ width: "40px", height: "40px" }}
            className="rounded-circle"
            alt="Pic"
          />
          <span className="text-warning me-2">{title}</span>
          <button
            type="button"
            className="btn-close me-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">{massage}</div>
      </div>
    </>
  );
};

export default Toast;
