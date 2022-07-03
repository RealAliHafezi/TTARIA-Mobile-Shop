// style
import "./../../styles/scss/home/header/Header.scss";
// components
import NavbarBase from "../../components/home/navbar/NavbarBase";
import NavbarTop from "../../components/home/navbar/NavbarTop";
import NavbarBaseResponsive from "../../components/home/navbar/NavbarBaseResponsive";
import NavbarBottom from "../../components/home/navbar/NavbarBottom";
const Navbar = () => {
  return (
    <header className="navbar navbar-expand-lg d-block" id="Header">
      <NavbarTop />
      <NavbarBase />
      <NavbarBaseResponsive />
      <NavbarBottom />
    </header>
  );
};

export default Navbar;
