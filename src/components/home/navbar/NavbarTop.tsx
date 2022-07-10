import { Link } from "react-router-dom";
// style
import "./../../../styles/scss/home/header/NavbarTop.scss";
// icons
import { GiRotaryPhone, HiMail } from "../../../assets/icons/icons";
const NavbarTop = () => {
  return (
    <nav className="Navbar_Top container-fluid d-none d-lg-flex justify-content-between align-items-center px-4 m-0">
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <GiRotaryPhone />
          <span className="Navbar_Top_Right_Item me-1">۰۲۱-۸۸۸۰۰۱۳۸</span>
        </div>
        <div className="d-flex align-items-center me-3">
          <HiMail />
          <span className="Navbar_Top_Right_Item me-1">info@ttaria.com</span>
        </div>
      </div>
      <ul className="d-flex align-items-center p-0 m-0">
        <li className="Navbar_Top_Left_ListItem mx-2">
          <Link to={`/`} className="LINK">
            خانه
          </Link>
        </li>
        <li className="Navbar_Top_Left_ListItem mx-2">
          <Link to={`/`} className="LINK">
            درباره ما
          </Link>
        </li>
        <li className="Navbar_Top_Left_ListItem me-2">
          <Link to={`/`} className="LINK">
            ارتباط با ما
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarTop;
