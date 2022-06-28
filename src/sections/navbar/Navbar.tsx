// style
import "./../../styles/scss/Navbar.scss";
// components
import NavbarBase from "../../components/navbar/NavbarBase";
import NavbarTop from "../../components/navbar/NavbarTop";
import NavbarBaseResponsive from "../../components/navbar/NavbarBaseResponsive";
import NavbarBottom from "../../components/navbar/NavbarBottom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg d-block">
      <NavbarTop />
      <NavbarBase />
      <NavbarBaseResponsive />
      <NavbarBottom />
    </nav>
  );
};

export default Navbar;
