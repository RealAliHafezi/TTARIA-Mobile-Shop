import React, { useEffect, useState } from "react";
// style
import "./../../styles/scss/product/ProductInformationServices.scss";
// Data
import { FooterData } from "../../Data";
// type
interface DataType {
  title: string;
  caption: string;
  logo: string;
}
const ProductInformationSendProduct = () => {
  const [Services, setServices] = useState<null | Array<DataType>>(null);
  useEffect(() => {
    setServices(FooterData.services);
  }, []);
  return (
    Services && (
      <>
        {FooterData.services.map((service, index) => (
          <div
            className="col-12 col-sm-6 col-md-3 d-flex align-items-center px-2 mb-3 mb-lg-0"
            key={index}
          >
            <div className="Product_Information_Services_Logo d-flex align-items-end ms-2">
              <img
                src={service.logo}
                alt="Service pic..."
                className="w-100 h-100"
              />
            </div>
            <div className="Product_Information_Services_Label d-flex flex-column justify-content-center CDEFAULT">
              <h6 className="fw-bold">{service.title}</h6>
              <span>{service.caption}</span>
            </div>
          </div>
        ))}
      </>
    )
  );
};

export default ProductInformationSendProduct;
