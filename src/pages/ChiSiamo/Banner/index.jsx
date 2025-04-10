import { useEffect } from "react";
import styles from "./Banner.module.css";
import Aos from "aos";

export default function Banner() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}>
        <div className={styles.conteudo}>
          <h2 data-aos="fade-up">LussoCasa</h2>
          <p data-aos="fade-up" data-aos-delay="300">
            Passione per il dettaglio, amore per la bellezza.
          </p>
        </div>
      </div>
    </div>
  );
}
