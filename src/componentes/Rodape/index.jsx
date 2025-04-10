import { Link } from "react-router-dom";
import styles from "./Rodape.module.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Rodape() {
  return (
    <footer className={styles.container}>
      <div className={styles.conteudo}>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h2>LussoCasa</h2>
          <p>Dove l'eleganza prende forma</p>
          <div className={styles.sociais}>
            <a href="instagram.com" target="_blank">
              <FaInstagram />
            </a>
            <a href="faceboom.com" target="_blank">
              <FaFacebookF />
            </a>
          </div>
        </div>
        <div className={styles.info}>
          <div>
            <h5>Link Rapidi</h5>
            <nav className={styles.links}>
              <Link className={styles.link} to="/">
                Home
              </Link>
              <Link className={styles.link} to="/servizi">
                Servizi
              </Link>
              <Link className={styles.link} to="/contatti">
                Contatti
              </Link>
              <Link className={styles.link} to="/chisiamo">
                Chi Siamo
              </Link>
            </nav>
          </div>
          <div>
            <h5>Contatti</h5>
            <span className={styles.contato}>
              <i class="bi bi-envelope fs-6 fs-md-4" />
              <p className="m-0">info@lussocasa.it</p>
            </span>
            <span className={styles.contato}>
              <i class="bi bi-telephone fs-md-4" />
              <p className="m-0">+39 012 345 6789</p>
            </span>
            <span className={styles.contato}>
              <i class="bi bi-geo-alt fs-md-4" />
              <p className="m-0">Torino, Italia</p>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.direitos}>
        <p className="m-0">
          2025 LussoCasa. Progetto fittizio, senza fini commerciali. Sviluppato
          da{" "}
          <a
            className={styles.git}
            href="http://github.com/perazzavera"
            target="_blank"
          >
            <i class="bi bi-github"></i>
          </a>{" "}
          Vera Perazza.
        </p>
      </div>
    </footer>
  );
}
