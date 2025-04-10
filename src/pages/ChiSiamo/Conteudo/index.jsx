import { Link } from "react-router-dom";
import styles from "./Conteudo.module.css";
import { LuGem, LuHeartHandshake, LuRuler } from "react-icons/lu";
import { MdOutlineWatchLater } from "react-icons/md";
import { useEffect } from "react";
import Aos from "aos";

const servizi = [
  {
    id: 1,
    icone: <LuRuler size={40} />,
    titulo: "Progetti su misura",
    descrizione: "Soluzioni personalizzate per ogni cliente",
  },
  {
    id: 2,
    icone: <LuGem size={40} />,
    titulo: "Materiali di alta qualità",
    descrizione: "Solo i migliori materiali selezionati",
  },
  {
    id: 3,
    icone: <MdOutlineWatchLater size={40} />,
    titulo: "Esperienza pluriennale",
    descrizione: "Anni di progetti di successo",
  },
  {
    id: 4,
    icone: <LuHeartHandshake size={40} />,
    titulo: "Assistenza completa",
    descrizione: "Supporto in ogni fase del progetto",
  },
];

export default function Conteudo() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.conteudo}>
        <div>
          <h2 data-aos="fade-up">Chi Siamo</h2>
          <p data-aos="fade-up" data-aos-delay="300">
            LussoCasa è un atelier di design d'interni che trasforma gli spazi
            in esperienze uniche di eleganza e comfort. La nostra squadra di
            professionisti esperti combina l'estetica raffinata del design
            italiano con soluzioni funzionali personalizzate.
            <br />
            <br />
            Con anni di esperienza nel settore, ci distinguiamo per la nostra
            dedizione all'eccellenza e l'attenzione meticolosa ai dettagli. Ogni
            progetto è un'opportunità per creare ambienti che riflettono la
            personalità e lo stile di vita dei nostri clienti.
            <br />
            <br />I nostri valori fondamentali - eleganza, comfort, esclusività
            e sostenibilità - guidano ogni decisione e si riflettono in ogni
            ambiente che creiamo.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="d-flex w- justify-content-center"
        >
          <img
            className={styles.imagem}
            src="/chi siamo.jpg"
            alt="Salone accogliente con arredi eleganti in stile rustico, ampie finestre che si affacciano su una foresta verdeggiante e pavimento in legno naturale."
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="700" className={styles.itens}>
          {servizi.map((servizio) => (
            <div className={styles.item}>
              <div>{servizio.icone}</div>
              <div>
                <h4 className="m-0">{servizio.titulo}</h4>
                <p className="m-0">{servizio.descrizione}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center pt-5">
          <Link className={styles.link} to="/progetti">
            Scropri i nostri progetti
          </Link>
        </div>
      </div>
    </section>
  );
}
