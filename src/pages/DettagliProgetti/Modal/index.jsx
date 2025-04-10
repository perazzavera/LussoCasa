import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ imageSrc, imageAlt }) => {
  return (
    <div
      className="modal fade"
      id="ModalImagem"
      tabIndex="-1"
      aria-labelledby="ModalImagemLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className={` ${styles.conteudo} modal-body`}>
            <button
              type="button"
              className={`btn-close fs-5 ${styles.botao}`}
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="bi bi-x fs-1 fw-bold text-black" />
            </button>
            {/* Exibindo a imagem aqui */}
            <img src={imageSrc} alt={imageAlt} className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
