import styles from "./Tags.module.css";
import { Link, useParams } from "react-router-dom";

const tags = [
  "Tutti",
  "Camera da letto",
  "Bagno",
  "Cucina",
  "Soggiorno",
  "Sala da pranzo",
];

const Tags = () => {
  const { tag } = useParams(); // lê a tag da URL

  return (
    <div className={styles.container}>
      <div>
        {tags.map((t) => (
          <Link
            key={t}
            to={`/progetti/${t}`}
            className={`${
              tag === t || (!tag && t === "all")
                ? styles.tagSelecionada
                : styles.tag
            }`}
          >
            {t}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tags;
