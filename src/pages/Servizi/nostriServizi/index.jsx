import styles from "./NostriServizi.module.css";
import { servizi } from "../../../mocks/servizi.json"; // Corrigido para acessar o JSON
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";

export default function NostriServizi() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className={styles.container}>
      <h3 data-aos="fade-up" className="text-center m-0">
        I nostri servizi esclusivi
      </h3>
      <div data-aos="fade-up" data-aos-delay="400" className={styles.conteudo}>
        {servizi.map((servizio) => (
          <div key={servizio.id}>
            <Link to={`/servizi/${servizio.categoria}`}>
              <img
                className={styles.imagem}
                src={servizio.src}
                alt={servizio.alt}
              />
            </Link>
            <div className="pt-4">
              <h4>{servizio.titulo}</h4>
              <p>{servizio.subtitulo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
