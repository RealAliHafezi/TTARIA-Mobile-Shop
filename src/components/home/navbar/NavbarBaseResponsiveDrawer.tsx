import { Link } from "react-router-dom";
// components
import NavbarBaseResponsiveDrawerDropdown1 from "./NavbarBaseResponsiveDrawerDropdown1";
// style
import "./../../../styles/scss/home/header/NavbarBaseResponsiveDrawer.scss";

// Data
import { NavbarListItemsData } from "../../../Data";
// icon && images
import { Logo } from "../../../assets/image/Images";
import {
  AiOutlineClose,
  AiOutlineHome,
  SiAboutdotme,
  AiOutlinePhone,
} from "../../../assets/icons/icons";
const NavbarBaseResponsiveDrawer = () => {
  return (
    <>
      <div
        className="NavbarBaseResponsive_Drawer offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasNavbar_NavbarBase"
      >
        <div className="offcanvas-header position-relative d-flex justify-content-center py-3">
          <div className="NavbarBaseResponsiveDrawer_Logo">
            <img src={Logo} alt="Logo" className="w-100 h-100" />
          </div>
          <button
            type="button"
            className="NavbarBaseResponsiveDreawer_CloseBtn position-absolute"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <AiOutlineClose />
          </button>
        </div>
        <div className="offcanvas-body NavbarBaseResponsiveDreawer_Body px-0">
          <ul className="navbar-nav NavbarBaseResponsiveDreawer_Body_List1 justify-content-end flex-grow-1 p-0 py-3 m-0">
            <li className="nav-item CURSOR pe-3 py-1">
              <Link
                to={`/`}
                className="nav-link LINK d-flex align-items-center"
              >
                <div
                  className="w-100"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <AiOutlineHome className="ms-2" />
                  <span>خانه</span>
                </div>
              </Link>
            </li>
            <li className="nav-item CURSOR pe-3 py-1">
              <Link
                to={`/`}
                className="nav-link LINK d-flex align-items-center"
              >
                <div
                  className="w-100"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <AiOutlinePhone className="ms-2" />
                  <span>ارتباط با ما</span>
                </div>
              </Link>
            </li>
            <li className="nav-item CURSOR pe-3 py-1">
              <Link
                to={`/`}
                className="nav-link LINK d-flex align-items-center"
              >
                <div
                  className="w-100"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <SiAboutdotme className="ms-2" />
                  <span>درباره ما</span>
                </div>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav NavbarBaseResponsiveDreawer_Body_List2 justify-content-end flex-grow-1 p-0 py-2 m-0">
            {NavbarListItemsData.map((NavbarListItem, index) => (
              <NavbarBaseResponsiveDrawerDropdown1
                key={index}
                NavbarListItem={NavbarListItem}
                NavbarListItemIndex={index}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarBaseResponsiveDrawer;
