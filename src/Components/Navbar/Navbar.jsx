import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";

const Nabvar = () => {
  return (
    <div className="container-navbar">
      <h3>Logo</h3>
      <ul className="container-list">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
      <h3>Carrito</h3>
      <CartWidget />
    </div>
  );
};

export default Nabvar;
