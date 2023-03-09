import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

const Nabvar = () => {
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/" style={{ color: "#e1d4c7", textDecoration: "none" }}>
          <logo />
        </Link>

        <ul className={styles.containerList}>
          <Link to="/" className={styles.navbarItem}>
            Todas
          </Link>
          <Link to="/category/accion" className={styles.navbarItem}>
            Urbanas
          </Link>
          <Link to="/category/deporte" className={styles.navbarItem}>
            Deportivas
          </Link>
        </ul>
        <CartWidget numero={numero} />
      </div>
      {children}
    </div>
  );
};

export default Nabvar;
