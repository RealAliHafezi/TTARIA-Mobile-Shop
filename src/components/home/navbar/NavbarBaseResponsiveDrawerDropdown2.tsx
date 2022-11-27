import React, { useState } from "react";
import { Link } from "react-router-dom";
// icons
import { RiArrowDownSLine, RiArrowUpSLine } from "../../../assets/icons/icons";
// types
import { NavbarListItemsDataType } from "../../../assets/Types";
interface propsType {
  NavbarListData: NavbarListItemsDataType;
  NavbarListDataIndex: number;
}
const NavbarBaseResponsiveDrawerDropdown2 = ({ NavbarListData }: propsType) => {
  const [Arrow, setArrow] = useState<boolean>(false);
  return (
    <React.Fragment>
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
        <Link
          to={`/productsCategories/${NavbarListData.titleEn}`}
          className="LINK CURSOR"
        >
          <li className="py-1" data-bs-dismiss="offcanvas" aria-label="Close">
            <span>{NavbarListData.title}</span>
          </li>
        </Link>
      )}
      <ul
        className="collapse NavbarBaseResponsiveDreawer_Body_List2_ListItem_List justify-content-end flex-grow-1 p-0 m-0"
        id={`${NavbarListData.filter}Child`}
      >
        {NavbarListData.item?.map((NavbarListItemDataItem, index) => (
          <div key={index}>
            <li className="CURSOR hosein"></li>
            <Link
              to={`/productsCategories/${NavbarListData.titleEn}`}
              className="LINK CURSOR"
            >
              <li
                className="py-1"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                {NavbarListItemDataItem}
              </li>
            </Link>
          </div>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default NavbarBaseResponsiveDrawerDropdown2;
