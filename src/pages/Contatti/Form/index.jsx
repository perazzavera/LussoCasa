import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./Form.module.css";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className={styles.container}>
      <h3 className="text-2xl font-serif text-[#00382D] mb-6">
        Invia un Messaggio
      </h3>

      {isSubmitted && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
          Messaggio inviato con successo! Ti risponderemo al più presto.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className="d-flex flex-column">
          <label htmlFor="name" className="fw-semibold">
            Nome
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className={`${errors.name ? "border-red-500" : "border-gray-300"} ${
              styles.input
            }`}
          />
          {errors.name && (
            <p className={styles.alert}>Il nome è obbligatorio</p>
          )}
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="email" className="fw-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            className={`${errors.name ? "border-red-500" : "border-gray-300"} ${
              styles.input
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.email.type === "required"
                ? "L'email è obbligatoria"
                : "Inserisci un indirizzo email valido"}
            </p>
          )}
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="message" className="fw-semibold">
            Messaggio
          </label>
          <textarea
            id="message"
            rows={5}
            {...register("message", { required: true })}
            className={`${errors.name ? "border-red-500" : "border-gray-300"} ${
              styles.textArea
            }`}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">
              Il messaggio è obbligatorio
            </p>
          )}
        </div>
        <div className="d-flex justify-content-center pt-3">
          <button type="submit" className={styles.botao}>
            Invia Messaggio
          </button>
        </div>
      </form>
    </div>
  );
}
