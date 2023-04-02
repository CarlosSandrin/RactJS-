import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

// -------------------------------ANTES DE FIREBASE---------------------------------

// const Nabvar = ({ children }) => {
//   return (
//     <div>
//       <div className={styles.containerNavbar}>
//         <Link
//           to="/"
//           style={{
//             color: "#e1d4c7",
//             textDecoration: "none",
//             maxWidth: "10px",
//             maxHeight: "10px",
//           }}
//         >
//           <img
//             className={styles.logo}
//             src="https://res.cloudinary.com/dyc9of3yj/image/upload/v1678291441/logo_yqoxql.png"
//             alt=""
//           />
//         </Link>

//         <ul className={styles.containerList}>
//           <Link to="/" className={styles.navbarItem}>
//             Todos
//           </Link>
//           <Link to="/category/Plataforma" className={styles.navbarItem}>
//             Plataforma
//           </Link>
//           <Link to="/category/Deporte" className={styles.navbarItem}>
//             Deporte
//           </Link>
//           <Link to="/category/Pelea" className={styles.navbarItem}>
//             Pelea
//           </Link>
//         </ul>
//         <CartWidget />
//       </div>
//       {children}
//     </div>
//   );
// };

// export default Nabvar;

// --------------------------------DESPUES DE FIREBASE-----------------------------------------------

const Navbar = ({ children }) => {
  const cate = [
    {
      title: "Todos",
      path: "/",
      id: 1,
    },
    {
      title: "Plataforma",
      path: "/category/Plataforma",
      id: 2,
    },
    {
      title: "Pelea",
      path: "/category/Pelea",
      id: 3,
    },
    {
      title: "Deporte",
      path: "/category/Deporte",
      id: 4,
    },
  ];

  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/" style={{ color: "#e1d4c7", textDecoration: "none" }}>
          <img
            className={styles.logo}
            src="https://res.cloudinary.com/dyc9of3yj/image/upload/v1678291441/logo_yqoxql.png"
            alt=""
          />
        </Link>

        <ul className={styles.containerList}>
          {cate?.map((category) => {
            return (
              <Link
                key={category.id}
                to={category.path}
                className={styles.navbarItem}
              >
                {category.title}
              </Link>
            );
          })}
        </ul>
        <CartWidget />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
