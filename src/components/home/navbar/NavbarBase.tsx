import React, { useState } from "react";
// style
import "./../../../styles/scss/home/header/NavbarBase.scss";
// images and logo
import {
  MdOutlineSearch,
  AiOutlineHeart,
  RiShoppingBasket2Line,
  FaRegUserCircle,
} from "../../../assets/icons/icons";
import { Logo } from "../../../assets/image/Images";
const NavbarBase = () => {
  const [Search, setSearch] = useState<string>("");
  return (
    <div className="container-fluid d-none d-lg-flex aling-items-center justify-content-between">
      <div className="NavbarBase_Right d-flex align-items-center">
        <div className="NavbarBase_Right_Logo ms-5">
          <img src={Logo} alt="Logo" className="w-100 h1-00" />
        </div>
        <div className="NavbarBase_Right_SearchBox position-relative">
          <input
            type="text"
            value={Search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            className="form-control w-100 px-3"
            placeholder="نام محصول یا برند خود را جستجو کنید ..."
          />
          <MdOutlineSearch className="position-absolute" />
        </div>
      </div>
      <div className="NavbarBase_Left d-flex align-items-center">
        <div className="NavbarBase_Left_Btn position-relative ms-3">
          <RiShoppingBasket2Line />
          <span className="Navbar_Badge d-flex align-items-center justify-content-center position-absolute top-0 start-100 translate-middle rounded-circle">
            1
          </span>
        </div>
        <div className="NavbarBase_Left_Btn position-relative ms-3">
          <AiOutlineHeart />
          <span className="Navbar_Badge d-flex align-items-center justify-content-center position-absolute top-0 start-100 translate-middle rounded-circle">
            1
          </span>
        </div>
        <div className="NavbarBase_LoginBtn d-none d-lg-block py-2 px-3">
          <FaRegUserCircle className="ms-2" />
          <span>ثبت نام یا ورود</span>
        </div>
      </div>
    </div>
  );
};

export default NavbarBase;
