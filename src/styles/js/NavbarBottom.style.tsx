import styled from "styled-components";
// types
import { NavbarListDataShowingType } from "../../components/navbar/NavbarBottom";
export const NavbarBottomWrapper = styled.ul<NavbarListDataShowingType>`
  .Navbar_Bottom_ListItems_Data {
    display: flex !important;
    opacity: ${(prosp: NavbarListDataShowingType) => (prosp.show ? "1" : "0")};
    transition: all 0.2s;
    visibility: ${(prosp: NavbarListDataShowingType) =>
      prosp.show ? "visible" : "hidden"};
  }
`;
