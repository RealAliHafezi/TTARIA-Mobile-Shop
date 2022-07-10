import styled from "styled-components";
// type
import { HeaderScrollOptionType } from "../../assets/Types";
import { NavbarBottomProps } from "../../components/home/navbar/NavbarBottom";
//
export const HeaderWrapper = styled.div<HeaderScrollOptionType>`
  top: ${(props) => (props.Hide ? "0" : "-50px")};
`;
// navbar bottom
export const NavbarBottomWrapper = styled.ul<NavbarBottomProps>`
  transform: translateY(${(props) => (props.Hide ? "0" : "-40px")});
  .Navbar_Bottom_ListItems_Data {
    display: flex !important;
    opacity: ${(props: NavbarBottomProps) => (props.show ? "1" : "0")};
    transition: all 0.2s;
    visibility: ${(props: NavbarBottomProps) =>
      props.show ? "visible" : "hidden"};
  }
`;
