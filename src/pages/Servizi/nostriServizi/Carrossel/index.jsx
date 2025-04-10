import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { useParams } from "react-router-dom";
import data from "../../../../mocks/servizi.json";
import styles from "./Carrossel.module.css";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";

export default function Carrossel() {
  const [immaginiExtra, setImmaginiExtra] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const filteredImages = data.categorias.filter(
      (img) => img.categoria === categoria
    );
    setImmaginiExtra(filteredImages);
  }, [categoria]);

  const itemTemplate = (item) => {
    return (
      <div>
        <img className={styles.imagem} src={item.src} alt={item.alt} />
      </div>
    );
  };

  const prevButton = (
    <Button icon="pi pi-chevron-left" className={styles.botao} />
  );

  const nextButton = (
    <Button icon="pi pi-chevron-right" className={styles.botao} />
  );

  return (
    <div className={styles.card}>
      <Carousel
        value={immaginiExtra}
        itemTemplate={itemTemplate}
        numVisible={3} // fallback padrão para desktop
        numScroll={1}
        circular
        prevIcon={prevButton}
        nextIcon={nextButton}
        autoplayInterval={3000}
        responsiveOptions={[
          {
            breakpoint: "768px",
            numVisible: 1,
            numScroll: 1,
          },
          {
            breakpoint: "1024px",
            numVisible: 2,
            numScroll: 1,
          },
          {
            breakpoint: "1200px", // Desktop (opcional)
            numVisible: 3,
            numScroll: 1,
          },
        ]}
      />
    </div>
  );
}
