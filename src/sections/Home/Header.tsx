import { useState, useEffect } from "react";
// style
import "./../../styles/scss/home/header/Header.scss";
import { HeaderWrapper } from "../../styles/js/Header.style";
// components
import NavbarBase from "../../components/home/navbar/NavbarBase";
import NavbarTop from "../../components/home/navbar/NavbarTop";
import NavbarBaseResponsive from "../../components/home/navbar/NavbarBaseResponsive";
// type
import { HeaderScrollOptionType } from "../../assets/Types";

const Navbar = () => {
  const [HideNavbarTop, setHideNavbarTop] = useState<boolean>(true);
  // send props for HeaderWrapper in Header.style.tsx
  const HeaderProps: HeaderScrollOptionType = {
    Hide: HideNavbarTop,
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // for navbar top
      if (window.scrollY >= 75) {
        setHideNavbarTop(false);
      } else if (window.scrollY < 75) {
        setHideNavbarTop(true);
      }
    });
  }, []);
  return (
    <>
      <HeaderWrapper
        {...HeaderProps}
        className="navbar navbar-expand-lg d-block position-sticky h-auto py-0 mb-5"
        id="Header"
      >
        <NavbarTop />
        <NavbarBase />
        <NavbarBaseResponsive />
      </HeaderWrapper>
    </>
  );
};

export default Navbar;
