import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";
import links from "../../mocks/menu.json";

export default function NavBar() {
  const location = useLocation();
  return (
    <nav className={` ${styles.container} navbar navbar-expand-lg`}>
      <div className="container-fluid">
        <img src="/sogno-logo2.png" alt="logo sogno arredato" />
        <h1 className={styles.titulo}>LussoCasa</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {links.map((link) => (
              <li key={link.id} className="nav-item">
                <Link
                  className={`${
                    location.pathname === link.to ? "active" : ""
                  } ${styles.link} nav-link`}
                  aria-current="page"
                  to={link.to}
                >
                  {link.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
