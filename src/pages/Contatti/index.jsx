import { useEffect } from "react";
import styles from "./Contatti.module.css";
import Form from "./Form";
import Aos from "aos";

export default function Contatti() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.overlay}>
          <h2 data-aos="fade-up">Contatti</h2>
        </div>
      </div>
      <div className={styles.conteudo}>
        <div className="text-center mb-16">
          <h3>Contattaci</h3>
          <h5 className="text-xl text-gray-600">
            Siamo sempre pronti ad aiutarti con i tuoi progetti e dubbi!
          </h5>
        </div>
        <div className={styles.contato}>
          <div className="d-flex flex-column gap-5">
            <h4 className="text-center">I Nostri Contatti</h4>

            <div className="d-flex align-items-center gap-3">
              <div>
                <i class="bi bi-telephone fs-2"></i>
              </div>
              <div>
                <h5 className="m-0 fw-semibold fs-4">Telefono</h5>
                <a href="tel:+390123456789" className="fs-5">
                  +39 012 345 6789
                </a>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <div>
                <i class="bi bi-envelope fs-2"></i>
              </div>
              <div>
                <h5 className="m-0 fw-semibold fs-4">Email</h5>
                <a href="mailto:info@lussocasa.it" className="fs-5">
                  info@lussocasa.it
                </a>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <div>
                <i class="bi bi-geo-alt fs-2"></i>
              </div>
              <div>
                <h5 className="m-0 fw-semibold fs-4">Indirizzo</h5>
                <p className="m-0 fs-5">Via della Moda 123, Torino</p>
              </div>
            </div>
          </div>
          <div className={styles.mapa}>
            <h2>La Nostra Sede</h2>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90168.7462278548!2d7.5875166282357664!3d45.07010924993989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d126418be25%3A0x8903f803d69c77bf!2sTurim!5e0!3m2!1spt-BR!2sit!4v1744293899652!5m2!1spt-BR!2sit"
                style={{ border: 0, width: "600px", height: "450px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Form />
    </section>
  );
}
