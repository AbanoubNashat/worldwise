import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import Footer from "./Footer";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo></Logo>
      <AppNav></AppNav>
      <p>List of cities</p>
      <Footer></Footer>
    </div>
  );
}

export default Sidebar;



