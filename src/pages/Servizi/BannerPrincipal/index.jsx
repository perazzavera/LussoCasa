import { useEffect } from "react";
import styles from "./BannerPrincipal.module.css";
import Aos from "aos";

export default function BannerPrincipal() {
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
          <h2 data-aos="fade-up">La Casa dei Tuoi Sogni</h2>
          <p data-aos="fade-up" data-aos-delay="300">
            Dove l'eleganza incontra il comfort, creando spazi che raccontano la
            tua storia
          </p>
        </div>
      </div>
    </div>
  );
}
