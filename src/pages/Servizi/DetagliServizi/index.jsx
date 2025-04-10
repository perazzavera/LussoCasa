import styles from "./DetagliServizi.module.css";
import { useParams } from "react-router-dom";
import data from "../../../mocks/servizi.json";
import Carrossel from "../nostriServizi/Carrossel";
import { useState } from "react";
import BannerPrincipal from "../BannerPrincipal";

export default function DetagliServizi() {
  const { categoria } = useParams();
  const [ehVisivel, setEhVisivel] = useState(false);

  const servizio = data.servizi.find(
    (s) =>
      s.categoria.toLowerCase().replace(/\s/g, "-") === categoria.toLowerCase()
  );

  if (!servizio) {
    return <div>Servizio non trovato!</div>;
  }

  return (
    <section className={styles.container}>
      <BannerPrincipal />
      <div className={styles.details}>
        <div className={styles.texto}>
          <h3>{servizio.titulo}</h3>
          <p>{servizio.testo}</p>
        </div>
        <div className={styles.ImgContainer}>
          <img
            className={styles.imagem}
            src={servizio.src}
            alt={servizio.alt}
          />
        </div>
      </div>
      <div className={`${styles.transition} ${ehVisivel ? "visible" : ""}`}>
        {ehVisivel && <Carrossel />}
      </div>
      <div className="d-flex justify-content-center">
        <button
          onClick={() => setEhVisivel(!ehVisivel)}
          className={styles.botao}
        >
          {ehVisivel ? "Nascondi" : "Scopri di più"}
        </button>
      </div>
    </section>
  );
}
