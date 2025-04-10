import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultPage from "./pages/DefaultPage";
import Home from "./pages/Home";
import Progetti from "./pages/Progetti";
import DettagliProgetti from "./pages/DettagliProgetti";
import Servizi from "./pages/Servizi";
import DetagliServizi from "./pages/Servizi/DetagliServizi";
import ScrollToTop from "./componentes/ScrollToTop";
import ChiSiamo from "./pages/ChiSiamo";
import Contatti from "./pages/Contatti";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="progetti" element={<Progetti />} />
            <Route
              path="dettagli-progetti/:id"
              element={<DettagliProgetti />}
            />
            <Route path="progetti/:tag" element={<Progetti />} />
            <Route path="servizi" element={<Servizi />} />
            <Route path="servizi/:categoria" element={<DetagliServizi />} />
            <Route path="chisiamo" element={<ChiSiamo />} />
            <Route path="/contatti" element={<Contatti />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
