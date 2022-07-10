import React, { useState } from "react";
import { Link } from "react-router-dom";
// style && icons
import { MdOutlineArrowBackIosNew } from "../../../assets/icons/icons";
import { NavbarBottomWrapper } from "../../../styles/js/Header.style";
import "./../../../styles/scss/home/header/NavbarBottom.scss";
// types & Data
import { NavbarListItemsData } from "../../../Data";
import { NavbarListDataType } from "../../../assets/Types";
export type NavbarBottomProps = {
  show: boolean;
};
const NavbarBottom = () => {
  const [openNavbarListItem, setOpenNavbarListItems] = useState<boolean>(false);
  // active item , datas is here
  const [ActiveItemData, setActiveItemData] = useState<
    Array<NavbarListDataType>
  >([]);
  const NavbarListDataShowing: NavbarBottomProps = {
    show: openNavbarListItem,
  };
  //
  const handleHoverOnNavbarListItems = (item: string) => {
    // for show data items background
    setOpenNavbarListItems(true);
    // for give active data items
    setActiveItemData(
      NavbarListItemsData.filter((item2) => item2.labelEn === item)
    );
  };
  return (
    <NavbarBottomWrapper
      className="Navbar_Bottom container-fluid d-none d-lg-flex align-items-center"
      {...NavbarListDataShowing}
    >
      <ul className="Navbar_Bottom_List d-flex justify-content-start position-relative">
        {NavbarListItemsData.map((ListItemLable) => (
          <Link to={`/`} className="LINK CURSOR">
            <li
              key={ListItemLable.labelEn}
              className="Navbar_Bottom_ListItem"
              onMouseOver={() =>
                handleHoverOnNavbarListItems(ListItemLable.labelEn)
              }
              onMouseLeave={() => setOpenNavbarListItems(false)}
            >
              {ListItemLable.lable}
            </li>
          </Link>
        ))}
        <ul
          onMouseMove={() => setOpenNavbarListItems(true)}
          onMouseLeave={() => setOpenNavbarListItems(false)}
          className="Navbar_Bottom_ListItems_Data position-absolute d-none flex-column py-3 px-4"
        >
          {ActiveItemData.length &&
            ActiveItemData[0].data?.map((dataItem, dataIndex) => (
              <>
                <li
                  key={dataIndex}
                  className="Navbar_Bottom_ListItems_Data_Item fw-bold mb-2 CURSOR"
                >
                  {dataItem.title}
                  <MdOutlineArrowBackIosNew />
                </li>
                {dataItem.item && (
                  <ul className="Navbar_Bottom_ListItems_Data_Item_List">
                    {dataItem.item.map((itemList, itemListIndex) => (
                      <li
                        key={itemListIndex}
                        className="Navbar_Bottom_ListItems_Data_Item_ListItem mb-1 fw-bold CURSOR"
                      >
                        {itemList}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
        </ul>
      </ul>
    </NavbarBottomWrapper>
  );
};

export default NavbarBottom;
