import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2 data-aos="fade-up" className={styles.titulo}>
            Trasformiamo spazi in sogni abitabili
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className={styles.subtitulo}
          >
            Design d'interni di lusso, arredamento esclusivo e progetti
            personalizzati
          </p>
          <Link
            data-aos="fade-up"
            data-aos-delay="600"
            to="/progetti"
            className={`btn ${styles.botao}`}
          >
            Scopri i progetti
          </Link>
        </div>
      </div>
    </section>
  );
}
