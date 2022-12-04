import React, { useState } from "react";
// components
import NavbarBaseResponsiveDrawerDropdown2 from "./NavbarBaseResponsiveDrawerDropdown2";
// icons
import { RiArrowDownSLine, RiArrowUpSLine } from "../../../assets/icons/icons";
// type
import { NavbarListDataType } from "../../../assets/Types";
interface propsType {
  NavbarListItem: NavbarListDataType;
  NavbarListItemIndex: number;
}
const NavbarBaseResponsiveDrawerDropdown1 = ({ NavbarListItem }: propsType) => {
  const [Arrow, setArrow] = useState<boolean>(false);
  return (
    <React.Fragment>
      <li
        onClick={() => setArrow(!Arrow)}
        className="NavbarBaseResponsiveDreawer_Body_List2Item d-flex align-items-center justify-content-between px-3 py-1 CURSOR"
        data-bs-toggle="collapse"
        data-bs-target={`#${NavbarListItem.filter}Father`}
        aria-controls={`#${NavbarListItem.filter}Father`}
      >
        <span className="ms-1">{NavbarListItem.lable}</span>
        {Arrow ? (
          <RiArrowDownSLine className="d-block" />
        ) : (
          <RiArrowUpSLine className="d-block" />
        )}
      </li>
      <ul
        className="collapse NavbarBaseResponsiveDreawer_Body_List2Item_List p-0 m-0"
        id={`${NavbarListItem.filter}Father`}
      >
        {NavbarListItem.data?.map((NavbarListItemTitle, index) => (
          <NavbarBaseResponsiveDrawerDropdown2
            key={index}
            NavbarListData={NavbarListItemTitle}
            NavbarListDataIndex={index}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default NavbarBaseResponsiveDrawerDropdown1;
