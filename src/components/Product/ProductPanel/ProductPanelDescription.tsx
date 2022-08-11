import React from "react";
// Data
import { ProductDescriptionData } from "./../../../Data";
// style
import "./../../../styles/scss/product/ProductPanel/ProductPanelDescription.scss";
const ProductPanelDescription = () => {
  return (
    <>
      {ProductDescriptionData.map((productDesc, index) => (
        <React.Fragment key={index}>
          {productDesc.title && (
            <h2 className="Product_Panel_Description_Title fs-4 mt-5 mb-3">
              {productDesc.title}
            </h2>
          )}
          {productDesc.desc1 && (
            <p className="Product_Panel_Description_Paragraph">
              {productDesc.desc1}
            </p>
          )}
          {productDesc.pic1 && (
            <img src={productDesc.pic1} alt="Product Pic.." className="Product_Panel_Description_Picture d-block mx-auto my-4" />
          )}
          {productDesc.desc2 && (
            <p className="Product_Panel_Description_Paragraph">
              {productDesc.desc2}
            </p>
          )}
          {productDesc.pic2 && (
            <img src={productDesc.pic2} alt="Product Pic.." className="Product_Panel_Description_Picture d-block mx-auto my-4" />
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default ProductPanelDescription;
