import { useParams } from "react-router-dom";
import styles from "./DettagliProgetti.module.css";
import { useEffect, useState } from "react";
import progetti from "../../mocks/progetti.json";
import Modal from "./Modal";
import Aos from "aos";

export default function DettagliProgetti() {
  const { id } = useParams();
  const [progetto, setProgetto] = useState(null);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    const progettoAttuale = progetti.find((p) => p.id === parseInt(id));
    setProgetto(progettoAttuale);
  }, [id]);

  if (!progetto) {
    return <div>Projeto não encontrado!</div>;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.conteudo}>
          <div data-aos="fade-up" className={styles.info}>
            <h3>{progetto.titulo}</h3>
            <p dangerouslySetInnerHTML={{ __html: progetto.texto }} />
          </div>
        </div>
        <div
          className={styles.imagem}
          key={`image-${id}`} // Adiciona uma chave única para forçar recriação
        >
          <img src={progetto.src} alt={progetto.alt} />

          <button
            type="button"
            className={styles.botao}
            data-bs-toggle="modal"
            data-bs-target="#ModalImagem"
          >
            <i className="bi bi-search fs-4" />
          </button>
          {/* Passando a imagem e o texto para o modal */}
          <Modal imageSrc={progetto.src} imageAlt={progetto.alt} />
        </div>
      </div>
      <div className={styles.bannerBottom}>
        <div className={styles.overlay}></div>
      </div>
    </>
  );
}
