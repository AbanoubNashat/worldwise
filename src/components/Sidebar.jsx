import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo></Logo>
      <AppNav></AppNav>
      {/* Outlet here acts the children prop but for routers so whatever the router has of component it will change depends on the router */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Sidebar;



