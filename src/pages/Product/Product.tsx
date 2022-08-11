import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
// mui
import { Box, Tab } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
// icon
import { FiRepeat } from "./../../assets/icons/icons";
// components
import ProductInformationBox from "../../components/Product/ProductInformation/ProductInformationBox";
import ProductInformationPriceBox from "../../components/Product/ProductInformation/ProductInformationPriceBox";
import ProductInformationGallery from "../../components/Product/ProductInformation/ProductInformationGallery";
import ProductInformationSendProduct from "../../components/Product/ProductInformation/ProductInformationServices";
import ProductPanelDescription from "../../components/Product/ProductPanel/ProductPanelDescription";
import ProductPanelOptions from "../../components/Product/ProductPanel/ProductPanelOptions";
import ProductsBrand from "../../sections/Home/ProductsBrand";
import PagesLayout from "../../sections/PagesLayout/PageLayout";
// style
import { ProductWrapper } from "../../styles/js/Product.style";
import "./../../styles/scss/product/Product.scss";
// type
import { ProductsType } from "./../../assets/Types";

const Product = () => {
  const { Product } = useParams();
  const [product, setProduct] = useState<[] | ProductsType[]>([]);
  const [resultVisibility, setResultVisibility] = useState<boolean>(false);
  //   all products
  const getAllProducts = useAppSelector((state) => state.Products.products);
  // mui
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  // props for ProductWrapper
  const props = {
    resultVisibility: resultVisibility,
  };
  //
  useEffect(() => {
    Product &&
      getAllProducts &&
      setProduct(getAllProducts.filter((pro) => pro.id === Product));
  }, [Product, getAllProducts]);
  return (
    <PagesLayout>
      <ProductWrapper className="Product px-3 mb-3" {...props}>
        {product.length > 0 && (
          <>
            <section className="Product_Information row g-0 border pt-1 pb-0 pt-md-4 pt-lg-5 px-1 px-md-3 mb-5">
              <div className="Product_Information_Image_Result d-none d-md-block"></div>
              <div className="col-12 col-md-6 col-lg-4 Product_Information_Gallery py-1 px-0 px-sm-2 px-md-3 mb-3 mb-md-0">
                <ProductInformationGallery
                  product={product[0]}
                  resultVisibility={resultVisibility}
                  setResultVisibility={setResultVisibility}
                />
              </div>
              <div className="col-12 col-md-6 col-lg-5 px-2 ps-4 mb-3 mb-md-0">
                <ProductInformationBox product={product[0]} />
              </div>
              <div className="col-12 col-md-6 col-lg-3 px-3 pt-2 mx-md-auto">
                <ProductInformationPriceBox product={product[0]} />
              </div>
              <div className="Product_Information_Services w-100 row g-0 mt-5 px-2 py-4">
                <ProductInformationSendProduct />
              </div>
            </section>
            <section className="Product_Panel mb-5">
              <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                  <TabList
                    onChange={handleChange}
                    textColor="inherit"
                    aria-label="lab API tabs example"
                  >
                    <Tab className="py-3" label="توضیحات" value="1" />
                    <Tab className="py-3" label="مشخصات فنی" value="2" />
                  </TabList>
                  <TabPanel className="Product_Panel_Description" value="1">
                    <ProductPanelDescription />
                  </TabPanel>
                  <TabPanel className="Product_Panel_Options row g-0" value="2">
                    <ProductPanelOptions product={product[0]} />
                  </TabPanel>
                </TabContext>
              </Box>
            </section>
            {product.length > 0 && (
              <ProductsBrand
                brand={`${product[0].brand}`}
                icon={<FiRepeat />}
                title="پیشنهاد های مشابه"
              />
            )}
          </>
        )}
      </ProductWrapper>
    </PagesLayout>
  );
};

export default Product;
