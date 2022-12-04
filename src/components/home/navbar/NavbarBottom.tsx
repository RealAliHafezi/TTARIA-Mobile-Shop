import React, { useState, useEffect } from "react";
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
  Hide: boolean;
};
const NavbarBottom = () => {
  const [HideWhenScroll, setHideWhenScroll] = useState<boolean>(true);
  const [openNavbarListItem, setOpenNavbarListItems] = useState<boolean>(false);
  // active item , datas is here
  const [ActiveItemData, setActiveItemData] = useState<
    Array<NavbarListDataType>
  >([]);
  const NavbarListDataShowing: NavbarBottomProps = {
    show: openNavbarListItem,
    Hide: HideWhenScroll,
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
  // when scroll Bottom , navbarBottom Hide & when scroll top , navbarBottom Show
  useEffect(() => {
    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      if (window.scrollY > 75) {
        let scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
          setHideWhenScroll(false);
        } else if (scrollTop <= lastScrollTop) {
          setHideWhenScroll(true);
        }
        lastScrollTop = scrollTop;
      }
    });
  }, []);
  return (
    <NavbarBottomWrapper
      className="Navbar_Bottom position-absolute container-fluid d-none d-lg-flex align-items-center"
      {...NavbarListDataShowing}
    >
      <ul className="Navbar_Bottom_List d-flex justify-content-start position-relative">
        {NavbarListItemsData.map((ListItemLable, index) => (
          <li
            key={index}
            className="Navbar_Bottom_ListItem CURSOR"
            onMouseOver={() =>
              handleHoverOnNavbarListItems(ListItemLable.labelEn)
            }
            onMouseLeave={() => setOpenNavbarListItems(false)}
          >
            {ListItemLable.lable}
          </li>
        ))}
        <ul
          onMouseMove={() => setOpenNavbarListItems(true)}
          onMouseLeave={() => setOpenNavbarListItems(false)}
          className="Navbar_Bottom_ListItems_Data position-absolute d-none flex-column py-3 px-4"
        >
          {ActiveItemData.length &&
            ActiveItemData[0].data?.map((dataItem, dataIndex) => (
              <>
                <Link
                  to={`/productsCategories/${dataItem.titleEn}`}
                  className="LINK"
                  onClick={() => setOpenNavbarListItems(false)}
                >
                  <li
                    key={dataIndex}
                    className="Navbar_Bottom_ListItems_Data_Item fw-bold mb-2 CURSOR"
                  >
                    {dataItem.title}
                    <MdOutlineArrowBackIosNew />
                  </li>
                </Link>
                {dataItem.item && (
                  <ul className="Navbar_Bottom_ListItems_Data_Item_List">
                    {dataItem.item.map((itemList, itemListIndex) => (
                      <li
                        key={itemListIndex}
                        className="Navbar_Bottom_ListItems_Data_Item_ListItem mb-1 fw-bold CURSOR"
                        onClick={() => setOpenNavbarListItems(false)}
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
