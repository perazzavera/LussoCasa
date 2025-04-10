import React, { useState, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import progetti from "../../mocks/progetti.json";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";
import styles from "./Progetti.module.css";
import Tags from "./componentes/Tags";
import Aos from "aos";

export default function Progetti() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const { tag } = useParams();
  const [pageAttuale, setPageAttuale] = useState(1);
  const [selectedTag, setSelectedTag] = useState(tag || "all");
  const progettiPerPage = 6;

  useEffect(() => {
    if (tag) {
      setSelectedTag(tag);
      setPageAttuale(1);
    }
  }, [tag]);

  const progettiFiltrati = useMemo(() => {
    return selectedTag === "all"
      ? progetti
      : progetti.filter((progetto) => progetto.tag === selectedTag);
  }, [selectedTag]);

  const totalPages = Math.ceil(progettiFiltrati.length / progettiPerPage);
  const progettiAttuali = progettiFiltrati.slice(
    (pageAttuale - 1) * progettiPerPage,
    pageAttuale * progettiPerPage
  );

  return (
    <>
      <div className={styles.banner}>
        <div className={styles.overlay}>
          <h2 data-aos="fade-up">Nostri Progetti</h2>
          <p data-aos="fade-up" data-aos-delay="300">
            Progetti unici che combinano design e qualità
          </p>
        </div>
      </div>
      <Tags
        setSelectedTag={setSelectedTag}
        setCurrentPage={setPageAttuale}
        selectedTag={selectedTag}
      />
      <section className={styles.container}>
        {progettiAttuali.map((progetto) => (
          <div key={progetto.id} className={styles.item}>
            <div className={styles.imagem}>
              <img src={progetto.src} alt={progetto.alt} />
            </div>
            <div className="d-flex justify-content-between align-items-center pt-4">
              <span>
                <h3>{progetto.titulo}</h3>
                <p>{progetto.subtitulo}</p>
              </span>
              <span className="d-none">{progetto.tag}</span>
              <Link
                className={styles.link}
                to={`/dettagli-progetti/${progetto.id}`}
                aria-label={`View all details for ${progetto.titulo}`}
              >
                <i className="bi bi-chevron-right fs-5" />
              </Link>
            </div>
          </div>
        ))}
      </section>
      <div className={styles.pagination}>
        <Pagination
          sx={{
            "& .MuiPaginationItem-root": {
              color: "var(--verde-oliva)", // cor do texto
              borderColor: "var(--verde-oliva)",
              fontWeight: "600",
              "&:hover": {
                backgroundColor: "var(--verde-oliva)",
                color: "var(--verde)",
              },
            },
            "& .Mui-selected": {
              backgroundColor: "var(--verde-oliva)",
              color: "var(--verde-claro)",
            },
          }}
          count={totalPages}
          variant="outlined"
          page={pageAttuale}
          onChange={(e, page) => setPageAttuale(page)}
        />
      </div>
      <div className={styles.bannerBottom}>
        <div className={styles.overlay}></div>
      </div>
    </>
  );
}
