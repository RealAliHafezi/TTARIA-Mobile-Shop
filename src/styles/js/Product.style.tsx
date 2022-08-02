import styled from "styled-components";

type propsType = {
  resultVisibility: boolean;
};
export const ProductWrapper = styled.article<propsType>`
  @media only screen and (min-width: 768px) {
    .Product_Information_Image_Result {
      width: ${(props) => (props.resultVisibility ? "250px" : "0px")};
      height: ${(props) => (props.resultVisibility ? "250px" : "0px")};
      right: ${(props) => (props.resultVisibility ? "50%" : "25%")};
      visibility: ${(props) => (props.resultVisibility ? "visible" : "hidden")};
      opacity: ${(props) => (props.resultVisibility ? "1" : "0")};
    }
  }

  @media only screen and (max-width: 992px) {
    .Product_Information_Image_Result {
      right: ${(props) => (props.resultVisibility ? "75%" : "40%")};
    }
  }
`;
