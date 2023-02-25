import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";

const Nabvar = () => {
  return (
    <div className={styles.containerNavbar}>
      <h3>Logo "(No definido aún)"</h3>
      <ul className={styles.containerList}>
        <a href="">
          <li>Inicio</li>
        </a>
        <a href="">
          <li>Productos</li>
        </a>
        <a href="">
          <li>Contacto</li>
        </a>
      </ul>
      <h3>Carrito</h3>
      <CartWidget />
    </div>
  );
};

export default Nabvar;
