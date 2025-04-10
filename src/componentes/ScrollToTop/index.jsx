import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Rola para o topo da página
  }, [location]); // Dependência para rodar sempre que a localização mudar

  return null; // Não precisa renderizar nada, apenas o efeito
};

export default ScrollToTop;
