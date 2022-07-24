import styled from "styled-components";
import { productsCategoryWrapperProps } from "./../../components/productsCategory/productsCategoryAsideResponsive/productsCategoryAsideResponsive";

export const ProductsCategoryAsideResponsiveWrapper = styled.div<productsCategoryWrapperProps>`
  right: ${(props) => (props.filterSlide ? "0" : "-100%")};
  visibility: ${(props) => (props.filterSlide ? "visible" : "hidden")};
`;
