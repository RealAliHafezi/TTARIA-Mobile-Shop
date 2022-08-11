import { ReactElement } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Home/Header";

// type
interface ChildrenType {
  children: ReactElement;
}
const PagesLayout = ({ children }: ChildrenType) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default PagesLayout;
