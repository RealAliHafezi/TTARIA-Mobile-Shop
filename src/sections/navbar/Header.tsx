// style
import "./../../styles/scss/Header.scss";
// components
import NavbarBase from "../../components/navbar/NavbarBase";
import NavbarTop from "../../components/navbar/NavbarTop";
import NavbarBaseResponsive from "../../components/navbar/NavbarBaseResponsive";
import NavbarBottom from "../../components/navbar/NavbarBottom";
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
