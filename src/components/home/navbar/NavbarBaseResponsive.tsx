import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// components
import NavbarBaseResponsiveDrawer from "./NavbarBaseResponsiveDrawer";
// image && icons
import { Logo } from "../../../assets/image/Images";
import {
  FaBars,
  MdOutlineSearch,
  RiShoppingBasket2Line,
  AiOutlineHeart,
} from "../../../assets/icons/icons";
// style
import "./../../../styles/scss/home/header/NavbarBaseResponsive.scss";
const NavbarBaseResponsive = () => {
  const navigate = useNavigate();
  const [Search, setSearch] = useState<string>("");
  return (
    <div className="Navbar_NavbarBase_Responsive container-fluid d-flex d-lg-none flex-column py-2">
      <div className="w-100 d-flex align-items-center justify-content-between mb-3">
        <button
          className="NavbarBaseResponsive_Bars navbar-toggler d-block"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar_NavbarBase"
        >
          <FaBars />
        </button>
        <NavbarBaseResponsiveDrawer />
        <div className="NavbarBase_Right_Logo">
          <img src={Logo} alt="Logo" className="w-100 h-100" />
        </div>
        <div className="NavbarBaseResponsive_Btn position-relative me-3">
          <RiShoppingBasket2Line />
          <span className="Navbar_Badge d-flex align-items-center justify-content-center position-absolute top-0 start-100 translate-middle rounded-circle">
            1
          </span>
        </div>
      </div>
      <div className="d-flex w-100 align-items-center justify-content-between">
        <form
          onSubmit={() => {
            navigate(`/search/${Search}`);
          }}
          className="NavbarBaseResponsive_SearchBox position-relative"
        >
          <input
            type="text"
            value={Search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            className="form-control w-100 px-3"
            placeholder="نام محصول یا برند خود را جستجو کنید ..."
          />
          <Link className="LINK" to={`/search/${Search}`}>
            <MdOutlineSearch className="position-absolute" />
          </Link>
        </form>
        <div className="NavbarBaseResponsive_Btn position-relative d-block me-1">
          <AiOutlineHeart />
          <span className="Navbar_Badge d-flex align-items-center justify-content-center position-absolute top-0 start-100 translate-middle rounded-circle">
            1
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavbarBaseResponsive;
