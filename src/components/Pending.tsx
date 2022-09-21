import React from "react";

const Pending = () => {
  return (
    <div className="PostingSpinner position-absolute d-flex justify-content-center align-items-center w-100 h-100">
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Pending;
