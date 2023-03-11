import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Nabvar = ({ children }) => {
  let numero = 12;
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link
          to="/"
          style={{
            color: "#e1d4c7",
            textDecoration: "none",
            maxWidth: "10px",
            maxHeight: "10px",
          }}
        >
          <img className={styles.logo}
            src="https://res.cloudinary.com/dyc9of3yj/image/upload/v1678291441/logo_yqoxql.png"
            alt=""
          />
        </Link>

        <ul className={styles.containerList}>
          <Link to="/" className={styles.navbarItem}>
            Todos
          </Link>
          <Link to="/category/accion" className={styles.navbarItem}>
            Plataforma
          </Link>
          <Link to="/category/deporte" className={styles.navbarItem}>
            Deportivo
          </Link>
        </ul>
        <CartWidget numero={numero} />
      </div>
      {children}
    </div>
  );
};

export default Nabvar;
