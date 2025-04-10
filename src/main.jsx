import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Tema do PrimeReact
import "primereact/resources/primereact.min.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
