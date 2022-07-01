import React, { useState } from "react";
// icons
import { RiArrowDownSLine, RiArrowUpSLine } from "../../assets/icons/icons";
// types
import { NavbarListItemsDataType } from "./../../assets/Types";
interface propsType {
  NavbarListData: NavbarListItemsDataType;
  NavbarListDataIndex: number;
}
const NavbarBaseResponsiveDrawerDropdown2 = ({
  NavbarListData,
  NavbarListDataIndex,
}: propsType) => {
  const [Arrow, setArrow] = useState<boolean>(false);
  return (
    <React.Fragment key={NavbarListDataIndex}>
      {NavbarListData.item ? (
        <li
          onClick={() => setArrow(!Arrow)}
          className="d-flex align-items-center justify-content-between py-1 CURSOR"
          data-bs-toggle="collapse"
          data-bs-target={`#${NavbarListData.filter}Child`}
          aria-controls={`#${NavbarListData.filter}Child`}
        >
          <span>{NavbarListData.title}</span>
          {Arrow ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </li>
      ) : (
        <li key={NavbarListDataIndex} className="py-1 LINK CURSOR">
          <span>{NavbarListData.title}</span>
        </li>
      )}
      <ul
        className="collapse NavbarBaseResponsiveDreawer_Body_List2_ListItem_List justify-content-end flex-grow-1 p-0 m-0"
        id={`${NavbarListData.filter}Child`}
      >
        {NavbarListData.item?.map(
          (NavbarListItemDataItem, NavbarListItemDataItemIndex) => (
            <>
              <li key={NavbarListItemDataItemIndex} className="CURSOR">
                {NavbarListItemDataItem}
              </li>
            </>
          )
        )}
      </ul>
    </React.Fragment>
  );
};

export default NavbarBaseResponsiveDrawerDropdown2;
